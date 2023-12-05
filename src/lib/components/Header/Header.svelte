<script lang="ts">
  import Menu from "./Menu.svelte";
  import * as config from "$lib/site/config";

  let scrollY: number;
  $: sticky = scrollY > 0;
</script>

<svelte:window bind:scrollY />

<header class:sticky>
  <div class="container">
    <div class="logo">
      <a href="/">{config.siteName}</a>
    </div>

    <nav>
      <Menu />
    </nav>
  </div>
</header>
