<script>
    export let film
    export let people
    const releaseDate = new Date(film.release_date)
    const friendlyDate = releaseDate.toLocaleDateString()
</script>
<ul>
    <b>{film.title}</b>: 
    <li>Episode {film.episode_id}</li>
    <li>Director: {film.director}</li>
    <li>Producer(s): {film.producer}</li>
    <li>Release date: {friendlyDate}</li>
</ul>
{#if people.length > 0}
top characters: 
{#each people as people, i}
<ul>
    <li><a href="/people/{people.person.url.split('/')[5]}">{people.person.name}</a></li>
</ul>
{/each}
{/if}
<a href="/films">all films</a>