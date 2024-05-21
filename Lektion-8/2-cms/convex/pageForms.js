import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { checkIfAdmin } from "./admins";

export const getPageForm = query({
  args: {
    name: v.string()
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if(! await checkIfAdmin(ctx, identity.subject)) {
      throw new ConvexError('Unauthorized')
    }

    const form = await ctx.db.query("pageForms")
    .withIndex("by_name", q => q.eq("name", args.name))
    .first()

    return form
  }
})

export const addPageForm = mutation({
  args: {
    name: v.string(),
    fields: v.array(v.object({ name: v.string(), type: v.string() }))
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if(! await checkIfAdmin(ctx, identity.subject)) {
      throw new ConvexError('Unauthorized')
    }

    const form = await ctx.db.query("pageForms")
    .withIndex("by_name", q => q.eq("name", args.name))
    .first()

    if(form) {
      return ConvexError("A page with that name already exists")
    }

    return await ctx.db.insert("pageForms", {
      name: args.name,
      fields: args.fields
    })
  }
})

export const getAll = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if(! await checkIfAdmin(ctx, identity.subject)) {
      throw new ConvexError('Unauthorized')
    }
    const result = await ctx.db.query("pageForms").collect()
    return result.map(r => ({ _id: r._id, name: r.name }))
  }
})