import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from 'openai';

const openai = new OpenAI();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const { query } = req;
    const { text } = query;

    if (typeof text !== 'string') {
        throw new Error('Invalid text input');
    }

    const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: "shimmer",
        input: text, // The text you want to convert to speech
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());

    // Send the buffer as a response
    res.setHeader('Content-Type', 'audio/mpeg');
    res.send(buffer);
}