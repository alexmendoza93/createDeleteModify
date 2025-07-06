import { useState } from "react"
import BookEdit from "./BookEdit";


export default function BookShow({book, onDelete, editBook}){
    const [edit, setEdit] = useState(false);

    function handleDelete(){
        onDelete(book.id)
    }

    function handleEdit(id, term){
        setEdit(!edit);
        editBook(id, term)
    }


    return(
        <div key={book.id} className="card m-2" style={{width: "18" + "rem"}}>
            <div className="card-body">
                <div className="d-flex justify-content-end">
                    <button onClick={handleEdit} type="button" className="btn btn-sm btn-outline-secondary me-1" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit your book"><i className="bi bi-pencil"></i></button>
                    <button onClick={handleDelete} type="button" className="btn btn-sm btn-outline-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete"><i className="bi bi-x-circle-fill"></i></button>
                </div>
                {edit ? <BookEdit oldBook={book} editBook={handleEdit}/> : <h5 className="card-title">{book.title}</h5> }
            </div>
        </div>
    )
}