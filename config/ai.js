import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.PUBLIC_GOOGLE_API_KEY)

export const model = genAI.getGenerativeModel({ model: 'gemini-pro' })