<script>
    export let people
    export let page
</script>
<ul>
    {#each people as person}
    <li><b><a href="/people/{person.url.split('/')[5]}">{person.name}</a></b>
    {/each}
</ul>
{#if page < 7}
<a href="/people?page={parseInt(page) + 1}">next page</a>
{/if}
<br>
{#if page > 1}
<a href="/people?page={parseInt(page) - 1}">previous page</a>
{/if}