import axios from "axios"

export const askAi = async (messages) => {
    try {
        if(!messages || !Array.isArray(messages) || messages.length === 0) {
            throw new Error("Messages array is empty.");
        }
        
        if(!process.env.GROQ_API_KEY) {
            throw new Error("GROQ_API_KEY is not configured. Please set it in environment variables.");
        }
        
        // Use Groq API (free with no credits needed)
        const response = await axios.post("https://api.groq.com/openai/v1/chat/completions",
            {
                model: "llama-3.3-70b-versatile",
                messages: messages,
                max_tokens: 500,
                temperature: 0.3

            },
            {
            headers: {
            Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
            'Content-Type': 'application/json',
        },});

        const content = response?.data?.choices?.[0]?.message?.content;

        if (!content || !content.trim()) {
      throw new Error("AI returned empty response.");
    }

    return content
    } catch (error) {
        console.error("Groq Error:", error.response?.data || error.message);
        throw new Error(`AI API Error: ${error.response?.data?.error?.message || error.message}`);
    }
}