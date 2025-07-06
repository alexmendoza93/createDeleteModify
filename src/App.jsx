import { useState } from 'react'
import InputForm from './components/InputForm'
import BookList from './components/BookList'


function App() {
  const [books, setBooks] = useState([])

  function handleCreate(term){
    let randId = Math.floor(Math.random() * 10000)
    setBooks([...books, {id: randId, title: term}])
  }

  function handleDelete(id){
    const nonDeletedBooks = books.filter(book =>{
      return book.id !== id
    })
    setBooks(nonDeletedBooks)
  }
  function handleEdit(id, newTerm){
    const updatedBooks = books.map(book => {
      if(book.id === id){
        return {...book, title: newTerm}
      }
      return book
    })
    setBooks(updatedBooks)
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1>Lista de libros a leer</h1>
            <BookList books={books} onDelete={handleDelete} editBook={handleEdit}/>
            <InputForm createBook={handleCreate} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
