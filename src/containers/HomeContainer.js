import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'


export class HomeContainer extends Component {
    render() {
        return (
            <div>
                 <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://a0.muscache.com/im/pictures/8615ccd3-f2c9-4c94-9bb5-1666f847ea88.jpg?im_w=1200"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://a0.muscache.com/im/pictures/e8233baf-02f4-47c7-b123-a8b4ae615c06.jpg?im_w=1440"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://a0.muscache.com/im/pictures/7930a7b9-abc6-4d35-989e-c231a70a8b95.jpg?im_w=1440"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default HomeContainer
