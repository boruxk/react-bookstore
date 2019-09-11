import Book from "./Book";
import React, {useState} from 'react';

const BookList = (props) => {
    const [books, setBooks] = useState([]);

    fetch(`books.json`)
        .then(res => res.json())
        .then(booksData => {
            setBooks(booksData);
        });

    return (
        <>
            {books.slice(0, props.value).map((book, i) => (
                <Book {...book} key={i}/>
            ))}
        </>
    );
};

export default BookList;