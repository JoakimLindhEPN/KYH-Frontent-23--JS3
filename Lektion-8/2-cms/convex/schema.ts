import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  admins: defineTable({
    email: v.string(),
    userId: v.string(),
  }),
  pages: defineTable({
    name: v.string(),
    content: v.string()
  }).index("by_name", ["name"]),
  posts: defineTable({
    title: v.string(),
    body: v.string()
  }),
  pageForms: defineTable({
    name: v.string(),
    fields: v.array(v.object({ name: v.string(), type: v.string() }))
  }).index("by_name", ["name"]),
});