<script lang="ts">
  import Chat from "../components/Chat.svelte";
  import type { KeyboardEventHandler } from "svelte/elements";
  import { messages, sendMessage } from "../datasources/data.store";
  let input_chat = "";

  const submit: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      sendMessage(input_chat, $messages);
      input_chat = "";
    }
  };
</script>

<div class="flex flex-col h-screen">
  <div class="flex-1 overflow-y-auto p-4">
    {#each $messages as msg}
      <Chat message={msg} hours={"0"} />
    {/each}
  </div>
  <div
    class="p-4 bg-transparent shadow-md fixed inset-x-0 bottom-0 sm:pl-[17rem]"
  >
    <input
      type="text"
      placeholder="Type a message..."
      class="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      on:keydown={submit}
      bind:value={input_chat}
    />
  </div>
</div>

<style>
</style>
