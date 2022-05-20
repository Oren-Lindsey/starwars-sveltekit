/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(event) {
    async function starWars(page) {
        const res = await fetch(`https://swapi.dev/api/planets?page=${page}`)
        const fulldata = await res.json()
        const planetsData = fulldata.results
        return planetsData
    }
    async function getPage() {
        const page = await event.url.searchParams.get('page')
        if (page) {
            return page
        } else {
            return 1
        }
    }
    const page = await getPage()
    const planets = await starWars(page)
    return {
        body: {
            planets,
            page
        }
    }
}