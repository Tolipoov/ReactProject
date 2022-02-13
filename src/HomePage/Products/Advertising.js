import React from 'react';
import { Container, Row } from 'reactstrap';

const Advertising = props => {
    return (
       <Container>
            <Row>
            <div className='advertising'>
                <div className='adv_content'>
                    <h1>Sneakers Never Run Out of Style GEt 50% Off Sitewide</h1>
                    <div className='adv_btn'>
                        <a href="#"> Start Shopping</a>    
                    </div>
                </div>
            </div>    
            </Row>           
       </Container>
    );
};

export default Advertising;