import { ChatOllama } from "@langchain/community/chat_models/ollama";
import type { AI } from "./ai.interface";
import constant from "../utils/constant";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import type { Runnable, RunnableConfig } from "@langchain/core/runnables";
import type { BaseMessageChunk } from "@langchain/core/messages";
import { IterableReadableStream } from "@langchain/core/utils/stream";

export class OllamaProvider implements AI {
    checkStatus(): Promise<string> {
        return Promise.resolve(constant.DEVICE_SUPPORTED);
    }

    createSession(): Runnable<any, BaseMessageChunk, RunnableConfig> {
        const prompt = ChatPromptTemplate.fromMessages([
            [
                "system",
                `AI assistant in a website developer community is ready to help you. with responsiblity, respect, and honesty.`,
            ],
            ["human", `"{input}"`],
        ]);
        const model = new ChatOllama({
            baseUrl: "http://localhost:11434",
            model: "gemma:2b",
            temperature: 1
        });
        return prompt.pipe(model);
    }
    async promptStreaming(input: string): Promise<IterableReadableStream<BaseMessageChunk>> {
        const chain = this.createSession();
        return chain.stream({
            input: input
        });
    }


}
