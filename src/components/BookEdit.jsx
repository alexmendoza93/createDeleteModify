import { useState } from "react"


export default function BookEedit({oldBook, editBook}){
    const [newTerm, setNewTerm] = useState(oldBook.title)

    function handleSubmit(e){
        e.preventDefault()
        editBook(oldBook.id, newTerm)
    }

    function handleChange(e){
        setNewTerm(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="exampleFormControlInput1" className="form-label">Agrega un titulo</label>
            <input onChange={handleChange} value={newTerm} className="form-control" id="exampleFormControlInput1"></input>
        </form>
    )
}