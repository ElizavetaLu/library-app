import './App.scss';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MyBooks from './myBooks/MyBooks';
import SelectedGenreContainer from './selectedGenre/SelectedGenreContainer';
import SelectedBookContainer from './selectedBookPreview/SelectedBookContainer';
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
    const exist = shelfItems.find(item => item.book_id === book.book_id)

    if (!exist) {
      return setShelfItems([...shelfItems, book])
    } else {
      const deleted = shelfItems.filter(item => item.book_id !== book.book_id);
      return setShelfItems(deleted);
    }
  }


  const onMarkAsRead = (book) => {
    const exist = finishedBooks.find(item => item.book_id === book.book_id)
    return exist ? null : setFinishedBooks([...finishedBooks, book])
  }


  return (

    <div className="mainWrapper">
      <Header shelfItems={shelfItems} />
      <Routes>
        <Route path='/library-app/build/' element={<MainContainer
          onAdd={onAdd}
          shelfItems={shelfItems}
          onMarkAsRead={onMarkAsRead} />} />

        <Route path='/library-app/build/bookshelf' element={<MyBooks
          shelfItems={shelfItems}
          finishedBooks={finishedBooks}
          onAdd={onAdd}
          onMarkAsRead={onMarkAsRead} />} />

        <Route path='/library-app/build/preview/:name' element={<SelectedBookContainer
          onAdd={onAdd}
          onMarkAsRead={onMarkAsRead} />} />

        <Route path='/library-app/build/genre/:name' element={<SelectedGenreContainer
          finishedBooks={finishedBooks}
          onAdd={onAdd}
          onMarkAsRead={onMarkAsRead}
          shelfItems={shelfItems} />} />
      </Routes>
      <Footer />
    </div>


  );
}

export default App;
