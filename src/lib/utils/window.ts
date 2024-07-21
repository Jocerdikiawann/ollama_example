declare global {
    interface Window {
        ai: {
            createGenericSession(arg0: { temperature: number; topK: number; }): any;
            createTextSession(): any;
            canCreateTextSession: () => Promise<string>;
        };
    }
}