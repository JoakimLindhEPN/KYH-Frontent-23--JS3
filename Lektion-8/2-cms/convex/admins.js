import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const checkIfAdmin = async (ctx, userId) => {
  const admin = await ctx.db.query('admins').filter(q => q.eq(q.field('userId'), userId)).unique()

    if(!admin) return false
    else return true
}

export const checkAdmin = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const admin = await ctx.db.query('admins').filter(q => q.eq(q.field('userId'), args.userId)).unique()

    if(!admin) return false
    else return true
  }
})