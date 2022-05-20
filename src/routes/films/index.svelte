<script>
    export let films
    export let page
</script>
<ul>
    {#each films as film}
    <li><b><a href="/films/{film.url.split('/')[5]}">{film.title}</a></b>
    {/each}
</ul>