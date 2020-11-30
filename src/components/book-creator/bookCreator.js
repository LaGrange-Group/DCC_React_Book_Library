import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import './bookCreator.css';

class BookCreator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            description: '',
            error: ''
         }

         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const book = {
            title: this.state.title,
            description: this.state.description
        }
        if(book.title !== '' && book.description !== ''){
            this.props.addNewBook(book);
            this.setState({
                error: '',
                title: '',
                description: ''
            });
        }else{
            const tempError = book.title === '' ? 'Title is a required field' : 'Description is a required field';
            this.setState({
                error: tempError
            });
        }
        
    }

    render() { 
        return ( 
            <div>
                <hr />
                <center>
                <h3>Add a new book!</h3>
                </center>
                <form onSubmit={this.handleSubmit}>
                    <Row className="col-align">
                        {this.state.error !== '' ? <h4>{this.state.error}</h4> : ''}
                        <Col >
                            <label>Title:</label>
                            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                        </Col>
                        <Col>
                            <label>Description:</label>
                            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                        </Col>
                        <Col>
                            <input type="submit" value="Create" />
                        </Col>
                    </Row>
                </form>
            </div>
         );
    }
}
 
export default BookCreator;