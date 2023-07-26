export const getItems = async () => {
    const request = await fetch("http://localhost:3000/api/items")
    const items = await request.json()
    return items
}

export const getLatestItems = async () => {
    const items = await getItems()
    return items.slice(0, 3)
}