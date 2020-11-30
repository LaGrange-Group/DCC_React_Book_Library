import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Book from './book/book';

function BookViewer (props) {
    console.log(props);
    return ( 
        <Row className="row-spacer">
            <Col>
                <button className="center" onClick={() => props.previousBook()}>Previous Book</button>
            </Col>   
            <Col>
                <Book book={props.book}/>
            </Col>
            <Col>
                <button className="center" onClick={() => props.nextBook()}>Next Book</button>
            </Col>
        </Row>
    );
}
 
export default BookViewer;