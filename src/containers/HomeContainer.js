import React, { Component } from 'react'
// import Carousel from 'react-bootstrap/Carousel'
import { Jumbotron} from 'reactstrap';
import Button from 'react-bootstrap/Button';

// import '../App.scss';

export class HomeContainer extends Component {
    render() {
        return (
            <div class="container">
                <div class="home-header">
                    <Jumbotron>
                        <h1>Welcome</h1>
                        <p>
                            You are cordially invited to my 22nd birthday celebration weekend (April 30 - May 2). Please RSVP with me as soon as you can via text! 😊
                        </p>
                        <br/>
                        <p>
                            <Button variant="secondary" href="/details">Learn more</Button>
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
        )
    }
}

export default HomeContainer;

