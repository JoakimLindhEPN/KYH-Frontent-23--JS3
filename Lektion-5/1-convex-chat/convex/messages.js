import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const send = mutation({
  args: {
    author: v.string(),
    authorId: v.string(),
    roomId: v.id("rooms"),
    body: v.string()
  },
  handler: async (ctx, {author, authorId, roomId, body}) => {
    const identity = await ctx.auth.getUserIdentity()
    if(!identity) throw new ConvexError('Unauthorized')

    await ctx.db.insert("messages", {
      author,
      authorId,
      roomId,
      body
    })
  }
})

export const getByRoom = query({
  args: {
    roomId: v.id("rooms")
  },
  handler: async (ctx, args) => {

    const messages = await ctx.db.query("messages")
    .withIndex("by_room", q => q.eq("roomId", args.roomId))
    .order("desc")
    .take(50)

    const messagesWithLikes = await Promise.all(
      messages.map(async (message) => {
        const likes = await ctx.db.query("likes")
        .withIndex("by_messageId", q => q.eq("messageId", message._id))
        .collect()

        return {
          ...message,
          likes
        }
      })
    )

    return messagesWithLikes.reverse()

  }
})