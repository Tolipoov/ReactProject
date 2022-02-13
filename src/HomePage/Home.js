import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import Iphone from './Images/Iphone.png';
import { Container, Row } from 'reactstrap';

const home = () => {
    return (
       <Container>
           <Row>
            <div className='home'>
                <div className='main'>
                    <div className='first_side'>
                        <h3>GET THE NEW IPHONE 13 PRO</h3>
                        <p>
                            A transformative triple-camera system that
                            adds tons of capability without complexity
                        </p>
                        <div className='homeButton'>
                            <a href="#" className='homeButtonItem'> 
                            Buy Now <ShoppingBasketIcon/>
                            </a>
                            <a href="#" className='homeButtonItem'> 
                            With $599 with trade-in
                            </a>
                        </div>
                    </div>
                    <div className='second_side'>   
                            <img src={Iphone} alt="Iphone"/>
                    </div>
                </div>
            </div>
           </Row>
       </Container>
    );
};

export default home;