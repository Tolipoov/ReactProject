import React from 'react';
import LogoFooter from '../Images/Tolipov.png';
import {Container, Row, Col} from 'reactstrap';

const Footer = props => {
    return (
        <div className='Footer'>
            <Container>
                <Row>
                    <Col md="5">
                        <div className='Brand'>
                            <img src={LogoFooter} width="240px" alt=""Footer Logo/>
                            <p className='BrandText'>
                            The most profitable online store in Tashkent
                            with delivery throughout Uzbekistan. 
                            Buy quickly and conveniently at low prices.
                            </p>
                        </div>
                    </Col>
                    <Col md="7" className='FooterCol'>
                        <ul className='products'>
                            <h4 className='theme'>Products</h4>
                                <li><a href='#'>Trending</a></li>
                                <li><a href='#'>My account</a></li>
                                <li><a href='#'>Vendors</a></li>
                                <li><a href='#'>Brands</a></li>
                        </ul>
                        <ul className='products'>
                            <h4 className='theme'>Legals</h4>
                                <li><a href='#'>License</a></li>
                                <li><a href='#'>Privacy</a></li>
                                <li><a href='#'>About us</a></li>
                                <li><a href='#'>Contact</a></li>
                        </ul>
                        <ul className='products'>
                            <h4 className='theme'>Contacts</h4>
                                <li><a href='sampleText'>Uzbekistan, Tashkent</a></li>
                                <li><a href='tel:+998944485398'>+99894 448 53 98</a></li>
                                <li><a href='mailto:info@gmail.com'>info@gmail.com</a></li>
                                <li><a href='mailto:info@mail.ru'>info@mail.ru</a></li>
                            </ul>   
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

Footer.propTypes = {
    
};

export default Footer;