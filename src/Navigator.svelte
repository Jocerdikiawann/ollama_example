<script lang="ts">
  import Home from "./lib/pages/Home.svelte";
  import Chat from "./lib/pages/Chat.svelte";
  import { Route } from "svelte-routing";
</script>

<div class="p-4 sm:ml-64">
  <div
    class="p-4 mb-16 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
  >
    <Route path="/chat" component={Chat} />
    <Route path="/"><Home /></Route>
  </div>
</div>
