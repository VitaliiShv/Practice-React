import { useSelector } from "react-redux";

const MyFavoriteBooksPage = () => {

    const books = useSelector(store => {
        const favoriteBooks = store.books.filter(book => book.favorite);
        return favoriteBooks;
    });
    
    const elements = books.map(({ id, title, author }) => <li key={id}>Name:{title}. Author:{author}</li>);

    return (
        <div>{elements}</div>
    )
}

export default MyFavoriteBooksPage;