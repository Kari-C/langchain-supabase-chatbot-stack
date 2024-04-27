// pages/api/anthropic.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { ChatAnthropic } from "@langchain/anthropic";
import { HumanChatMessage, SystemChatMessage } from "@langchain/core";
const model = new ChatAnthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            const { topic } = req.body;

            if (!topic) {
                res.status(400).json({ error: 'Topic is required' });
                return;
            }

            const response = await model.call([
                new SystemChatMessage("You are a helpful chatbot"),
                new HumanChatMessage(`Tell me a joke about ${topic}`),
            ]);

            res.status(200).json({ response: response.text });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'An error occurred' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}