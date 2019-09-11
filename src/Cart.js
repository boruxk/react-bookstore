import Book from "./Book";
import React from 'react';
import { connect } from "react-redux";

const Cart = (props) => {
    const { boughtBooks } = props;
    console.log(props);

    return (
        <>
            {boughtBooks.map((book, i) => (
                <Book {...book} key={i} />
            ))}
        </>
    );
};

//get data from redux store
const mapStateToProps = (state) => {
    return { 
        boughtBooks: state.boughtBooks
    }
}

export default connect(mapStateToProps)(Cart);