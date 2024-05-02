import { ConvexError, v } from "convex/values";
import { action, internalMutation, mutation, query } from "./_generated/server";
import { api, internal } from './_generated/api'


export const createMeal = mutation({
  args: {
    name: v.string(),
    imageId: v.optional(v.id("_storage"))
  },
  handler: async (ctx, { imageId, name }) => {
    const identity = await ctx.auth.getUserIdentity()
    if(!identity) throw new ConvexError('Unauthorized')

    await ctx.db.insert("meals", { imageId, name })
  }
})

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    // const identity = await ctx.auth.getUserIdentity()
    // if(!identity) throw new ConvexError('Unauthorized')

    const meals = await ctx.db.query("meals").collect()

    return Promise.all(meals.map(async (meal) => ({
      ...meal,
      image: meal.imageId ? await ctx.storage.getUrl(meal.imageId) : undefined
    })))
  }
})
export const getById = query({
  args: {
    mealId: v.id("meals")
  },
  handler: async (ctx, args) => {

    const meal = await ctx.db.get(args.mealId)

    return {
      ...meal,
      image: meal.imageId ? await ctx.storage.getUrl(meal.imageId) : undefined
    }
  }
})

export const getRandom = query({
  args: {
    take: v.optional(v.number())
  },
  handler: async (ctx, args) => {
    const meals = await ctx.db.query("meals").collect()

    const _meals = meals.sort((a, b) => Math.random() - 0.5)
    .slice(0, args.take ? args.take : 5)

    return Promise.all(_meals.map(async (meal) => ({
      ...meal,
      image: meal.imageId ? await ctx.storage.getUrl(meal.imageId) : undefined
    })))
  }
})


export const updateMeal = mutation({
  args: {
    id: v.id('meals'),
    name: v.string(),
    imageId: v.optional(v.id("_storage"))
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if(!identity) throw new ConvexError('Unauthorized')

    return await ctx.db.patch(args.id, {
      name: args.name,
      imageId: args.imageId ? args.imageId : undefined
    })
  }
})

export const deleteMeal = action({
  args: {
    id: v.id("meals")
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if(!identity) throw new ConvexError('Unauthorized')

    const meal = await ctx.runQuery(api.meals.getById, { mealId: args.id })

    await ctx.runMutation(internal.meals.deleteForReal, { mealId: meal._id, imageId: meal.imageId })
  }
})

export const deleteForReal = internalMutation({
  args: {
    mealId: v.id("meals"),
    imageId: v.id("_storage")
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.mealId)
    await ctx.storage.delete(args.imageId)
  }
})