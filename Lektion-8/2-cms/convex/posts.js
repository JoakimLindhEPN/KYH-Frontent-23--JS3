import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { checkIfAdmin } from "./admins";


export const create = mutation({
  args: {
    title: v.string(),
    body: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if(! await checkIfAdmin(ctx, identity.subject)) {
      throw new ConvexError('Unauthorized')
    }

    return await ctx.db.insert("posts", { body: args.body, title: args.title })
  }
})

export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db.query("posts").collect()
  }
})

export const getById = query({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  }
})

export const update = mutation({
  args: {
    id: v.id("posts"),
    title: v.optional(v.string()),
    body: v.optional(v.string())
  },
  handler: async (ctx, { id, title, body }) => {
    const identity = await ctx.auth.getUserIdentity()
    if(! await checkIfAdmin(ctx, identity.subject)) {
      throw new ConvexError('Unauthorized')
    }

    return await ctx.db.patch(id, { title, body })
  }
})


export const removePost = mutation({
  args: { id: v.id('posts') },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if(! await checkIfAdmin(ctx, identity.subject)) {
      throw new ConvexError('Unauthorized')
    }

    await ctx.db.delete(args.id)
  }
})