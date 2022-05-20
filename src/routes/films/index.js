/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(event) {
    async function starWars(page) {
        const res = await fetch(`https://swapi.dev/api/films?page=${page}`)
        const fulldata = await res.json()
        const filmData = fulldata.results
        return filmData
    }
    async function getPage() {
        const page = await event.url.searchParams.get('page')
        if (page) {
            return page
        } else {
            return 1
        }
    }
    const films = await starWars(1)
    return {
        body: {
            films
        }
    }
}