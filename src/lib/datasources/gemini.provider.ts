import constant from "../utils/constant";
import type { AI } from "./ai.interface";


export class GeminiProvider {
    async checkStatus(): Promise<string> {
        const status = await window.ai.canCreateTextSession();
        if (status === 'no') {
            return constant.DEVICE_NOT_SUPPORTED;
        }
        if (status === 'after-download') {
            return constant.DOWNLOAD_MODEL;
        }
        return constant.DEVICE_SUPPORTED;
    }

    async createSession<T>(): Promise<T> {
        return window.ai.createGenericSession({ temperature: 0.6, topK: 5 }) as T;
    }

    async promptStreaming<T>(session: any, input: string): Promise<T> {
        return session.promptStreaming(input);
    }

}

//async function promptStreaming(session: any, message: string) {
//const stream = session.promptStreaming(message);
//let prev = '';
//for await (const chunk of stream) {
//prev += chunk.slice(prev.length);
//}
//}