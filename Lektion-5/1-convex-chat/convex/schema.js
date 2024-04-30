import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  rooms: defineTable({ 
    name: v.string(),
    isPublic: v.boolean(),
    password: v.string()
   }),
   messages: defineTable({
    author: v.string(),
    roomId: v.id("rooms"),
    body: v.string()
   }),
   likes: defineTable({
    messageId: v.id("messages"),
    liker: v.string()
   })
});