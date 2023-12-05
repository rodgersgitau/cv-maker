<script lang="ts">
  import { fly } from "svelte/transition";

  import Header from "$lib/components/Header.svelte";

  import "../styles/styles.scss";

  export let data;
</script>

<div>
  <Header />

  <div class="layout">
    {#key data.url}
      <div in:fly={{ y: -50, duration: 250 }}>
        <slot />
      </div>
    {/key}
  </div>
</div>
