import BookCard from "../components/bookCard/BookCard";
import Button from "../components/button/Button";
import { defaultList } from "../defaultBooksList";
import "./SelectedBookPreview.scss"

const SelectedBookPreview = (props) => {

    const bookData = props.specificBook

    const bookDataObj = {
        name: bookData.name,
        rating: bookData.rating,
        cover: bookData.cover,
        book_id: bookData.book_id
    }
    
    return (
        <div className="previewContent">
            <div className="previewWrapper"
                style={{ backgroundImage: bookData.cover ? `url(${bookData.cover})` : "url('/library-app/build//boy-1528150__480.jpg')" }}>
                <div className="previewContainer">
                    <div className="bookImage">
                        <div className="circle"></div>
                        <img src={bookData.cover ? bookData.cover : "/library-app/build//boy-1528150__480.jpg"} alt="" />
                    </div>
                    <div className="fullInfo">
                        <div className="info">
                            <div className="name">{bookData.name}</div>
                            <div className="row">Published: <span>{bookData.published_date}</span></div>
                            <div className="row">Authors: <span>{bookData.authors}</span></div>
                            <div className="row">Pages: <span>{bookData.pages}</span></div>

                            <div className="raiting">
                                <div className="icon">
                                    <img src="/library-app/build//icons/star.png" alt="" />
                                </div>
                                <div className="rate">{bookData.rating}/5</div>
                            </div>

                            <div className="row">Description: <span>{bookData.synopsis}</span></div>
                        </div>
                        <div className="buttons">
                            <Button content={'Add on shelf'} action={props.onAdd} funcParam={bookDataObj} />
                            <Button content={'Read now'} />
                            <Button content={'Mark as read'} action={props.onMarkAsRead} funcParam={bookDataObj} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="recent">
                <div className="text">Recents:</div>
                <div className="recentView">
                    {defaultList.map(book => <BookCard

                        book_id={book.book_id}
                        key={book.book_id}
                        name={book.name}
                        rating={book.rating}
                        cover={book.cover}

                        shelfItems={defaultList}
                        finishedBooks={defaultList}

                        {...props}
                    />)}
                </div>
            </div>
        </div>

    )
}

export default SelectedBookPreview