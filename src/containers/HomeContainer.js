import React, { Component } from 'react'
import {Carousel, Jumbotron, Button} from 'reactstrap'

// import '../App.scss';

export class HomeContainer extends Component {
    render() {
        return (
            <div class="container">
                <div class="home-header">
                    <Jumbotron>
                        <h1>Welcome</h1>
                        <p>
                            You are cordially invited to my 22nd birthday celebration weekend!
                        </p>
                        <p>
                            <Button variant="primary" href="/details">Learn more</Button>
                        </p>
                    </Jumbotron>
                </div>
            <div class="carousel carousel-fade slide" id="my-carousel">

                <ol class="carousel-indicators">
                    <li data-target="#my-carousel" data-slide-to="0"></li>
                    <li data-target="#my-carousel" data-slide-to="1"></li>
                    <li data-target="#my-carousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="item active item-1">
                        <a href="#"></a>
                    </div>
                    <div class="item item-2" >
                        <a href="#"></a>
                    </div>
                    <div class="item item-3">
                        <a href="#"></a>
                    </div>
                </div>
                <a href="#my-carousel" class="carousel-control left" data-slide="prev"></a>
                <a href="#my-carousel" class="carousel-control right" data-slide="next"></a>
                    
            </div>

        </div>
            // <div>
            //      <Carousel id="myCarousel">
            //         <Carousel.Item>
            //             <img
            //             className="d-block w-100"
            //             src="https://a0.muscache.com/im/pictures/8615ccd3-f2c9-4c94-9bb5-1666f847ea88.jpg?im_w=1200"
            //             alt="First slide"
            //             media="(min-width: 576px)"                        
            //             />
            //             <Carousel.Caption>
            //             <h3>Welcome</h3>
            //             <p>You are invited to my 22nd birthday celebration</p>
            //             </Carousel.Caption>
            //         </Carousel.Item>
            //         <Carousel.Item>
            //             <img
            //             className="d-block w-100"
            //             src="https://a0.muscache.com/im/pictures/e8233baf-02f4-47c7-b123-a8b4ae615c06.jpg?im_w=1440"
            //             alt="Second slide"
            //             />
            //             <Carousel.Caption>
            //             <h3>Grateful</h3>
            //             <p>For you, your role in my life, and all future adventures to come</p>
            //             </Carousel.Caption>
            //         </Carousel.Item>
            //         <Carousel.Item>
            //             <img
            //             className="d-block w-100"
            //             src="https://a0.muscache.com/im/pictures/2b3815f0-b2f9-4550-a4e3-82abe155932a.jpg?im_w=1440"
            //             alt="Third slide"
            //             />

            //             <Carousel.Caption>
            //             <h3>Excited</h3>
            //             <p>Beyond words to celebrate a great weekend with you!</p>
            //             </Carousel.Caption>
            //         </Carousel.Item>
            //     </Carousel>
            // </div>
        )
    }
}

export default HomeContainer

