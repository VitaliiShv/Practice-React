import { useSelector } from "react-redux";
import { getFavoriteBooks } from "../../redux/selectors";

const MyFavoriteBooksPage = () => {

    const books = useSelector(getFavoriteBooks);
    
    const elements = books.map(({ id, title, author }) => <li key={id}>Name:{title}. Author:{author}</li>);

    return (
        <div>{elements}</div>
    )
}

export default MyFavoriteBooksPage;