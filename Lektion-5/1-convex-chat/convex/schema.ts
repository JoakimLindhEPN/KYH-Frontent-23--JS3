import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  rooms: defineTable({ 
    name: v.string(),
    isPublic: v.boolean(),
    password: v.optional(v.string())
   }),
  messages: defineTable({
    author: v.string(),
    authorId: v.string(),
    roomId: v.id("rooms"),
    body: v.string()
   }).index("by_room", ["roomId"]),
  likes: defineTable({
    messageId: v.id("messages"),
    liker: v.string(),
    likerId: v.string()
   }).index("by_messageId", ["messageId"])
});