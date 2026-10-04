import { useSelector, useDispatch } from "react-redux"
import { deleteCard, addCard } from "../redux/actions"
import { useState } from "react"
import { nanoid } from "nanoid"

function CardList() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const cards = useSelector((state) => state.cards)
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
            <ul>
                {cards.map((card) => {
                    return (
                        <li key={card.id}>
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                            <button onClick={() => dispatch(deleteCard(card.id))} type="button">delete</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default CardList