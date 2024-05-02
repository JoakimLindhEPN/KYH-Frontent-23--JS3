import { v } from "convex/values";

import { mutation } from "./_generated/server";

export const generateUploadUrl = mutation(async (ctx) => {
  const identity = await ctx.auth.getUserIdentity()
    if(!identity) throw new ConvexError('Unauthorized')
    
  return await ctx.storage.generateUploadUrl();
});

export const deleteImage = mutation({
  args: {
    storageId: v.id("_storage")
  },
  handler: async (ctx, args) => {
    return await ctx.storage.delete(args.storageId)
  }
})