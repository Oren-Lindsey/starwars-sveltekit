<script>
    export let planet
</script>
<ul>
    <b>{planet.name}</b>: 
    <br>
    <li>rotation period: {planet.rotation_period} hrs</li> 
    <li>orbital period: {planet.orbital_period} days</li> 
    <li>diameter: {planet.diameter} kilometers</li> 
    <li>climate: {planet.climate}</li> 
    <li>gravity: {planet.gravity} Gs</li> 
    <li>terrain: {planet.terrain}</li> 
    <li>surface water: {planet.surface_water}{#if planet.surface_water !== "unknown"}%{/if}</li> 
    <li>population: {planet.population} people</li> 
</ul>
<a href="/planets">all planets</a>