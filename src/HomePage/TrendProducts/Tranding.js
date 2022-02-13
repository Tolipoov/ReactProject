import React from 'react';
import TrandingJson from './Products.json';
import {Container, Row, Col, Card, CardHeader, CardBody} from 'reactstrap'

const Tranding = props => {
    return (
        <div className='TrandingBack'>
                <div className='TradingTitle'>
                    <p>TOP PRODUCTS</p>
                    <h4>TRENDING THIS WEEK</h4>
                </div>
            <Container className='TrendingCards'>
                <Row>
                    {TrandingJson.map((post) => {
                        return(
                            <Col md="3">
                                <Card>
                                    <CardHeader>
                                        <img className='Image' src={post.img} alt="Product"/>
                                    </CardHeader>
                                    <CardBody>
                                        <div className='InfoTitle'>
                                            <p className='name'>{post.name}</p>
                                            <span className='price'>{post.price}</span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Tranding;