import './App.scss';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MyBooks from './myBooks/MyBooks';
import SelectedGenreContainer from './selectedGenre/SelectedGenreContainer';
import SelectedBookContainer from './selectedBookPreview/SelectidBookContainer';
import MainContainer from './Main/MainContainer';

const shelfItemsFromLocalStorage = JSON.parse(localStorage.getItem('shelfItems') || '[]')
const finishedBooksFromLocalStorage = JSON.parse(localStorage.getItem('finishedBooks') || '[]')

const App = () => {

  const [shelfItems, setShelfItems] = useState(shelfItemsFromLocalStorage);
  const [finishedBooks, setFinishedBooks] = useState(finishedBooksFromLocalStorage);


  useEffect(() => {
    localStorage.setItem('shelfItems', JSON.stringify(shelfItems))
  }, [shelfItems])

  useEffect(() => {
    localStorage.setItem('finishedBooks', JSON.stringify(finishedBooks))
  }, [finishedBooks])


  

  const onAdd = (book) => {
    // console.log(book)
    const exist = shelfItems.find(item => item.id === book.id)

    if (!exist) {
      setShelfItems([...shelfItems, book])
    } else {
      const deleted = shelfItems.filter(item => item.id !== book.id);
      setShelfItems(deleted);
    }
  }


  const onMarkAsRead = (book) => setFinishedBooks([...finishedBooks, book])

  console.log(shelfItems)
  console.log(finishedBooks)

  return (

    <div className="mainWrapper">
      <Header shelfItems={shelfItems} />
      <Routes>
        <Route path='/bookshelf' element={<MyBooks shelfItems={shelfItems} finishedBooks={finishedBooks}/>} />
        <Route path='/' element={<MainContainer onAdd={onAdd} shelfItems={shelfItems}/>} />
        <Route path='/preview/:name' element={<SelectedBookContainer onAdd={onAdd} onMarkAsRead={onMarkAsRead}/>} />
        <Route path='/genre/:name' element={<SelectedGenreContainer shelfItems={shelfItems}/>} />
      </Routes>
      <Footer />
    </div>


  );
}

export default App;
