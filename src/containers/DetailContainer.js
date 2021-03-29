import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export class DetailContainer extends Component {
    render() {
        return (
            <div className="details-container">
                <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    Location and Dates
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Airbnb booked in Temecula, CA (text me for exact address!) from Thursday, April 30 to Monday, May 1</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    What to Pack
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Events include: wine tasting (*see closing thoughts), a nice sunset dinner, exploring the fields, swimming, ping pong, lounging, stargazing, and stack cup</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    Food and Beverage
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>Everyone should bring drinks for the weekend! We'll be planning for stack cup and poker. For food, we'll do a big grocery run when we get there! (Does someone want to be grill master?)</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                    Costs
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>Tyler and I will cover half of the Airbnb cost and remaining will be split among attendees ($250-300pp). I would also budget about $50 for food and alcohol!</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                    Closing Thoughts
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>Since we are in wine country, it's tempting to try to do a winetasting at a nearby winery, but given how nice the airbnb is, should we all just host our own wine-tasting at home?</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </div>
        )
    }
}

export default DetailContainer
