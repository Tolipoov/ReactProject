import React from 'react';
import { Container, Row, Col, Card, CardBody, CardFooter } from 'reactstrap';
import Air from './Images/Air.png';
import Airbuds from './Images/Airbuds.png';
import Airpods from './Images/Airpods.png';
import Iwatch from './Images/Iwatch.png';
import Ipad from './Images/Ipad.png';

const NewCollection = props => {
    return (
        <div className='newCollection'>
            <Container>
                <Row>
                    <Col className='ColText' md="12">
                        <p>Stright From Apple</p>
                        <h4>NEW COLLECTION</h4>
                    </Col>
                    <Col className='cardsArea' lg="6" md="12">
                        <Row>
                          <Col className='cards' lg="6" md="6">
                                <Card>
                                    <CardBody>
                                        <img src={Air} alt="Air"/>
                                    </CardBody>
                                    <CardFooter>
                                        <div className='CardText'>
                                            <p>AirPods Max</p>
                                            <span>$960</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                          </Col>    
                          <Col className='cards' lg="6" md="6">
                                <Card>
                                    <CardBody>
                                        <img src={Iwatch} alt="Iwatch 7"/>
                                    </CardBody>
                                    <CardFooter>
                                        <div className='CardText'>
                                            <p>Iwatch 7</p>
                                            <span>$720</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                          </Col>  
                          <Col className='cards' lg="6" md="6">
                                <Card>
                                    <CardBody>
                                        <img src={Airpods} alt="Airpods"/>
                                    </CardBody>
                                    <CardFooter>
                                        <div className='CardText'>
                                            <p>Airpods</p>
                                            <span>$560</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                          </Col>  
                          <Col className='cards' lg="6" md="6">
                                <Card>
                                    <CardBody>
                                        <img src={Airbuds} alt="Airbuds"/>
                                    </CardBody>
                                    <CardFooter>
                                        <div className='CardText'>
                                            <p>Airbuds</p>
                                            <span>$480</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                          </Col>  
                        </Row>    
                    </Col>
                     <Col lg="6" md="12">
                         <Card>
                             <CardBody>
                                 <div className='productPrice'>
                                         <span>SALE -50%</span>
                                         <span>$660</span>
                                 </div>
                                 <img classname='ImageIpad' src={Ipad} alt="Ipad"/>
                             </CardBody>
                             <CardFooter className='leftcardFooter'>
                                 <h4 className='productName'>Ipad Pro</h4>
                                 <p  className='productBrand'>Brand: Apple</p>
                             </CardFooter>
                         </Card>
                     </Col>
                     <Col cmd="12" className='buttonArea'>
                        <a href="#" className='exploreBtn'>Explore Other Products</a>
                     </Col>
                </Row>
            </Container>
        </div>
    );
};


export default NewCollection;