import React, { Component } from 'react'
import {Accordion, Card} from 'reactstrap'
import Card from 'react-bootstrap/Card'

export class DetailContainer extends Component {
    render() {
        return (
            <div>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        Click me!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        Click me!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

export default DetailContainer
