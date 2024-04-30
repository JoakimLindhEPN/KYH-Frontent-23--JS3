import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const like = mutation({
  args: {
    liker: v.string(),
    likerId: v.string(),
    messageId: v.id("messages")
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("likes", {
      liker: args.liker,
      likerId: args.likerId,
      messageId: args.messageId
    })
  }
})