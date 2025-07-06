import { useState } from "react"

export default function InputForm({createBook}){
    const [term, setTerm] = useState('')

    function handleChange(e){
        setTerm(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        createBook(term)
        setTerm('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="exampleFormControlInput1" className="form-label">Agrega un titulo</label>
            <input onChange={handleChange} value={term} className="form-control" id="exampleFormControlInput1" placeholder="Book to read"></input>
        </form>
    )
}