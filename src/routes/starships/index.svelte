<script>
    export let starships
    export let page
</script>
<ul>
    {#each starships as starship}
    <li><b><a href="/starships/{starship.url.split('/')[5]}">{starship.name}</a></b></li>
    {/each}
</ul>
{#if page < 4}
<a href="/starships?page={parseInt(page) + 1}">next page</a>
{/if}
<br>
{#if page > 1}
<a href="/starships?page={parseInt(page) - 1}">previous page</a>
{/if}