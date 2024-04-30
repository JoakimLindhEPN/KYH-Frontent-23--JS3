import { ConvexError, v } from "convex/values"
import { mutation, query } from "./_generated/server"
// query, mutation, action, internalQuery, internalMutation

export const createRoom = mutation({
  args: {
    name: v.string(),
    isPublic: v.boolean(),
    password: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if(!identity) throw new ConvexError('Unauthorized')
    
    ctx.db.insert("rooms", {
      name: args.name,
      isPublic: args.isPublic,
      password: args.password ? args.password : undefined
    })
  }
})


export const getAll = query({
  args: {},
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if(!identity) throw new ConvexError('Unauthorized')

    return await ctx.db.query("rooms").collect()

  }
})

