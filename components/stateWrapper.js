import { createContext,useState,useContext, useEffect } from "react"

const AppContext = createContext({
    isOpen: false,
    items: [],
    openCard: () => {},
    closeCard: () => {},
    addItemToCart: (item) => {},
    getNumberOfItems: () => {},
})
const StateWrapper = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [items, setItems] = useState([])
    const handleOpenCard = () => setIsOpen(true)
    const handleCloseCard = () => setIsOpen(false)
    const handleAddItemToCard = (item) => {
        const temp = [...items]
        const found = temp.find(el => el.id === item.id)
        if(found){
            found.quantity++
        }else{
            item.quantity = 1
            temp.push(item)
        }
        setItems([...temp])
    }

    const handleGetNumberOfItems = () => items.reduce((acc,item)=> acc + item.quantity,0)
    return (
        <AppContext.Provider
            value={ {
                isOpen,
                items,
                openCard: handleOpenCard,
                closeCard: handleCloseCard,
                addItemToCart: handleAddItemToCard,
                getNumberOfItems: handleGetNumberOfItems,
            } }
        >
            {children}
        </AppContext.Provider>
    )
}

export default StateWrapper

export function useAppContext(){
    return useContext(AppContext)
}