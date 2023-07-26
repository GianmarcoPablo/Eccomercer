import {getItems} from "../services/itemService"

export const getPathsFromIds = async () => {
    const items = await getItems()
    const ids = items.map((item)=>{
        return{
            params: {
                id: convertToPath(item.title)
            }
        }
    })
    return ids
}

export const getItemsData = async (id) => {
    const items = await getItems()
    const product = items.find((item)=> convertToPath(item.title) === id)

    return {
        id: id,
        data: product
    }

}

export const convertToPath = (title) => {
    return title.toLowerCase().replace(/ /g,"-")
}