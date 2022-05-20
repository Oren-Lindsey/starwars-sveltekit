/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(event) {
    const id = await event.params.id
    async function starWars(id) {
        const res = await fetch(`https://swapi.dev/api/films/${id}/`)
        const fulldata = await res.json()
        return fulldata
    }
    async function getPerson(id) {
        const r = await fetch(`${event.url.protocol}${event.url.host}/people/${id}/__data.json`)
        const data = await r.json()
        return data
    }
    const film = await starWars(id)
    let people = [];
    if (film.characters.length > 0) {
        for (let i = 0; i < 5; i++) {
           const p = await getPerson(film.characters[i].split('/')[5])
           people.push(p)
        }
    }
    console.log(people)
    return {
        body: {
            film,
            people
        }
    }
}