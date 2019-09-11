import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Book(props) {
    return (
        <div className="col-md-6">
            <div className="card  h-100">
                <img src={props.imageLink} alt={""}></img>
                <div className="card-body">
                    <h3>{props.title}</h3>
                    <h5>Price: $50</h5>
                    <input type='button' value='add to cart' />
                </div>
            </div>
        </div>
        );    
}

export default Book;