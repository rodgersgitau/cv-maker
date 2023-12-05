<script lang="ts">
  import { fade } from "svelte/transition";
  import MenuIcon from "../../icons/MenuIcon.svelte";
</script>

<button on:click={() => console.log("Menu Clicked!")} aria-label="Categories">
  <MenuIcon width={24} height={24} aria-hidden={true} />
</button>
