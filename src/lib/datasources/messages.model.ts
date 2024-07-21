class MessageInput {
    role!: string
    content!: string
}

class MessageOutput {
    content!: string
    time!: string
}

export { MessageInput, MessageOutput }