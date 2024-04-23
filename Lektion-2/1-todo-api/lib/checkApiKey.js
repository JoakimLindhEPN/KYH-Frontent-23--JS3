import User from "@/models/userSchema"


export default async function checkApiKey(req) {
  const url = new URL(req.url)
  const apiKey = url.searchParams.get("apiKey")

  const user = await User.findOne({ apiKey })

  return user
}