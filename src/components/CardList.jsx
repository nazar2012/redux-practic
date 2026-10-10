import { useSelector, useDispatch } from "react-redux"
import { deleteCard, addCard } from "../redux/actions"
import { useState } from "react"
import { nanoid } from "nanoid"

function CardList() {
    const [title, setTitle] = useState("")
    const [filter, setFilter] = useState("")
    const [description, setDescription] = useState("")
    const cards = useSelector((state) => state.cards)
    const filteredCards = cards.filter((card) => card.title.toLowerCase().includes(filter.toLowerCase()))
    const dispatch = useDispatch()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (!title || !description) {
            return
        }
        dispatch(addCard({
            id: nanoid(),
            title,
            description,
        }))
        setTitle("")
        setDescription("")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={title} type="text" placeholder="name" onChange={evt => setTitle(evt.target.value)} />
                <input value={description} type="text" placeholder="description" onChange={evt => setDescription(evt.target.value)} />
                <button type="submit">add</button>
            </form>
            <input onChange={(evt) => setFilter(evt.target.value)} value={filter} type="text" placeholder="search" />
            {filteredCards.length > 0 ? (
                <ul>
                    {filteredCards.map((card) => {
                        return (
                            <li key={card.id}>
                                <h2>{card.title}</h2>
                                <p>{card.description}</p>
                                <button onClick={() => dispatch(deleteCard(card.id))} type="button">delete</button>
                            </li>
                        )
                    })}
                </ul>
            ) : <p>нема данних</p>}
        </>
    )
}

export default CardList