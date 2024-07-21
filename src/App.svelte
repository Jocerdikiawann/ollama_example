<script lang="ts">
  import { Router } from "svelte-routing";

  import Sidebar from "./lib/components/Sidebar.svelte";
  import Navigator from "./Navigator.svelte";
  export let url = "";
</script>

<Router {url}>
  <Sidebar />
  <Navigator />
</Router>
