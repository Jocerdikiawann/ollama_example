<script lang="ts">
  export let title: string;
  export let onClick: () => void;
</script>

<button on:click={onClick}> {title} </button>
