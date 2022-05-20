/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(event) {
    const id = await event.params.id
    async function starWars(id) {
        const res = await fetch(`https://swapi.dev/api/people/${id}/`)
        const fulldata = await res.json()
        return fulldata
    }
    const person = await starWars(id)
    return {
        body: {
            person
        }
    }
}