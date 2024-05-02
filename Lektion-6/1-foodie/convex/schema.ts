import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  meals: defineTable({
    name: v.string(),
    imageId: v.optional(v.id("_storage"))
  })
});