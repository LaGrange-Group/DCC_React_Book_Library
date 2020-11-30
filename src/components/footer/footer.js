import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import './footer.css';

const Footer = () => {
    return ( 
        <Row className="footer">
            <Col>
                <h4>Copyright © 2020</h4>
            </Col>
        </Row>
     );
}
 
export default Footer;