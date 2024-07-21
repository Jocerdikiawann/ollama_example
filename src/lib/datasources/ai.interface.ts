import type { BaseMessageChunk } from "@langchain/core/messages";
import type { IterableReadableStream } from "@langchain/core/utils/stream";

export interface AI {
    checkStatus(): Promise<string>;
    promptStreaming(input: string): Promise<IterableReadableStream<BaseMessageChunk>>;
}