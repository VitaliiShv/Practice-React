import { useState } from "react";
import PropTypes from "prop-types";

import inititalState from "./initialState";

import styles from "../my-books.module.scss";

const MyBooksForm = ({onSubmit})=> {
    const [state, setState] = useState({...inititalState})

    const handleChange = ({target}) => {
        const { name, value, type, checked } = target;
        const newValue = type === 'checkbox' ? checked : value;
        setState(prevState => {
            return {...prevState, [name]: newValue}
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({...state});
        setState({...inititalState});
    }

    const {title, author, favorite} = state;

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label>Book title</label>
                <input name="title" value={title} onChange={handleChange} placeholder="Book title" />
            </div>
            <div className={styles.formGroup}>
                <label>Book author</label>
                <input name="author" value={author} onChange={handleChange} placeholder="Book author" />
            </div>
            <div>
                <label>Favorite</label>
                <input name="favorite" checked={favorite} onChange={handleChange} type='checkbox' />
            </div>
            <button type="submit">Add book</button>
        </form>
    )
}

export default MyBooksForm;

MyBooksForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
