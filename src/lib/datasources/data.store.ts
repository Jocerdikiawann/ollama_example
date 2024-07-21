import { writable, type Writable } from "svelte/store";
import constant from "../utils/constant";
import { OllamaProvider } from "./ollama.provider";
import type { AI } from "./ai.interface";
import type { MessageOutput } from "./messages.model";

export const welcome_message: Writable<string> = writable(constant.WAITING);
export const messages: Writable<Array<string>> = writable([]);

export async function init() {
    try {
        //TODO: check provider
        const provider: AI = new OllamaProvider();
        provider.promptStreaming(
            'Hallo, aku pengunjung baru diwebsite ini.')
            .then(async (stream) => {
                welcome_message.set('');
                for await (const chunk of stream) {
                    console.log(`Output chunk : ${JSON.stringify(chunk)}`);
                    welcome_message.update((prev) => prev + chunk.lc_kwargs['content']);
                }
            })
    } catch (error) {
        console.log(error);
        welcome_message.set(constant.DEVICE_NOT_SUPPORTED);
    }
}

export async function sendMessage(input: string, data: Array<string>) {
    try {
        const provider: AI = new OllamaProvider();
        provider.promptStreaming(input)
            .then(async (stream) => {
                let prev = '';
                for await (const chunk of stream) {
                    prev += chunk.lc_kwargs['content'];
                    messages.set([...data, prev]);
                }
            });
    } catch (error) {
        console.log(error)
    }
}
