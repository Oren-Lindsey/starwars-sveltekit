<script>
    export let planets
    export let page
</script>
<ul>
    {#each planets as planet}
    <li><b><a href="/planets/{planet.url.split('/')[5]}">{planet.name}</a></b></li>
    {/each}
</ul>
{#if page < 6}
<a href="/planets?page={parseInt(page) + 1}">next page</a>
{/if}
<br>
{#if page > 1}
<a href="/planets?page={parseInt(page) - 1}">previous page</a>
{/if}