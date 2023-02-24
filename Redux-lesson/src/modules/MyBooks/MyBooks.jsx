import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import MyBooksForm from "./MyBooksForm/MyBooksForm";
import MyBookList from "./MyBookList/MyBookList";
import MyBooksFilter from "./MyBooksFilter/MyBooksFilter";

import { addBook, deleteBook,setFilter } from "../../redux/actions";
import { getAllBooks, getFilteredbooks, getFilter } from "../../redux/selectors";

import styles from "./my-books.module.scss";

const MyBooks = () => {
    const allBooks = useSelector(getAllBooks);
    const filteredBooks = useSelector(getFilteredbooks);
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    const isDublicate = (title, author) => {
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();
        const result = allBooks.find(({ title, author }) => {
            return (title.toLowerCase() === normalizedTitle && author.toLowerCase() === normalizedAuthor)
        })

        return Boolean(result)
    }



    const onAddBook = ({ title, author, favorite }) => {
        if (isDublicate(title, author)) {
            alert(`${title}. Author: ${author} is already ixist`);
            return false;
        }

        const action = addBook({ title, author, favorite });
        dispatch(action);
    }

    const onRemoveBook = (id) => {
        const action = deleteBook(id);
        dispatch(action);
    }

    const handleFilter = ({ target }) => dispatch(setFilter(target.value));

    
    const isBooks = Boolean(filteredBooks.length);

    return (
        <div>
            <h3>My Books</h3>
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <h4>Add book</h4>
                    <MyBooksForm onSubmit={onAddBook} />
                </div>
                <div className={styles.block}>
                    <MyBooksFilter value={filter} handleChange={handleFilter} />
                    {isBooks && <MyBookList removeBook={onRemoveBook} items={filteredBooks} />}
                    {!isBooks && <p>No books in list</p>}
                </div>
            </div>
        </div>
    )
}

export default MyBooks;

