/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(event) {
    const id = await event.params.id
    async function starWars(id) {
        const res = await fetch(`https://swapi.dev/api/starships/${id}/`)
        const fulldata = await res.json()
        return fulldata
    }
    const starship = await starWars(id)
    async function getPilot(id) {
        const r = await fetch(`${event.url.protocol}${event.url.host}/people/${id}/__data.json`)
        const data = await r.json()
        return data
    }
    let pilots = [];
    if (starship.pilots.length > 0) {
        for (let i = 0; i < starship.pilots.length; i++) {
           const p = await getPilot(starship.pilots[i].split('/')[5])
           pilots.push(p)
        }
    }
    return {
        body: {
            starship,
            pilots
        }
    }
}