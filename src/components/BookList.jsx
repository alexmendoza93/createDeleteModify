import BookShow from './BookShow'

export default function BookList({books, onDelete, editBook}){

    const titles = books.map(book =>{
        return <BookShow book={book} onDelete={onDelete} editBook={editBook}/>
    })

    return (
        <div className="row">
            <div className="col d-flex flex-wrap justify-content-center">
                {titles}
            </div>
        </div>

    )
}