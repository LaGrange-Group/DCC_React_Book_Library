import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './libraryNav.css';

const LibraryNav = (props) => {
    return ( 
        <Row className="row-spacer">
            <Col style={{padding: 0}}>
                <div className="library-nav">
                    <h1>dCC Library</h1>
                </div>
            </Col>
        </Row>

     );
}
 
export default LibraryNav;