<script lang="ts">
  import { onMount } from "svelte";
  import { init, welcome_message } from "../datasources/data.store";
  import { marked } from "marked";
  onMount(async () => {
    await init();
  });
</script>

<h1>{@html marked($welcome_message)}</h1>
