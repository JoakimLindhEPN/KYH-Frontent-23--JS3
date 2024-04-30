import { ConvexError, v } from "convex/values"
import { mutation } from "./_generated/server"
// query, mutation, action, internalQuery, internalMutation

export const createRoom = mutation({
  args: {
    name: v.string(),
    isPublic: v.boolean(),
    password: v.string()
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if(!identity) throw new ConvexError('Unauthorized')
    
    
  }
})


