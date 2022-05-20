<script>
    export let starship
    export let pilots
    console.log(pilots)
    const res = async function(id) {
        const r = await fetch(`/people/${id}/__data.json`)
        const data = await r.json()
        return data
    }
</script>
<ul>
    <b>{starship.name}</b>: 
    {#if starship.name !== starship.model}
    <li>model: {starship.model}</li>
    {/if}
    <li>manufacturer: {starship.manufacturer}</li>
    <li>cost (in credits): {starship.cost_in_credits}</li>
    <li>length: {starship["length"]} meters</li>
    <li>max speed (in atmosphere): {starship.max_atmosphering_speed}</li>
    <li>crew: {starship.crew} people</li>
    <li>passengers: {starship.passengers} people</li>
    <li>cargo capacity: {starship.cargo_capacity} kg</li>
    <li>time that this ship can provide consumables for it's crew: {starship.consumables}</li>
    <li>hyperdrive rating: {starship.hyperdrive_rating}</li>
    <li>class: {starship.starship_class}</li>
</ul>
{#if pilots.length > 0}
pilots: 
{#each starship.pilots as pilot, i}
<ul>
    <li><a href="/people/{pilot.split('/')[5]}">{pilots[i].person.name}</a></li>
</ul>
{/each}
{/if}
<a href="/starships">all starships</a>