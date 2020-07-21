import React from 'react'
import Chart from 'react-google-charts'
import {
    Container,
    Row,
    Col,
    Card,
    Accordion,
    Button,
    Alert,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { useDispatch, useSelector } from 'react-redux'
import {
    getAccountList,
    getAccountRecommendations,
} from '@openbanking/ui-data/lib/services/account-service'
import InfoDisplay from '@openbanking/ui-common/lib/InfoDisplay'

const SuperWealthCreator = () => {
    const data = useSelector((state) => state.app.data)
    const accountId = useSelector((state) => state.account.accountId)

    const dispatch = useDispatch()

    const mostTransacted = 'Banking'
    const PieChartData = [
        ['Task', 'Hours per Day'],
        ['Health', 11],
        ['Investment', 2],
        ['Loan', 2],
    ]

    var bankCheck = mostTransacted === 'Banking'
    return (
        <Container fluid>
            <Alert variant="success">
                <Alert.Heading>
                    <h1>Super Wealth Creator</h1>
                </Alert.Heading>
            </Alert>

            <div className="content_body">
                <h5>Hi, Customer !</h5>
                <br />
                <br />
                {/* <Row>
                <Col><p>One year Analaysis  </p></Col>
    </Row> */}
                <Row>
                    <Col>
                        {' '}
                        <Card style={{ width: '18rem' }}>
                            <Chart
                                width={'500px'}
                                height={'300px'}
                                chartType="PieChart"
                                loader={<div>Loading Chart</div>}
                                data={PieChartData}
                                options={{
                                    title: 'Your Transactions',
                                }}
                                rootProps={{ 'data-testid': '1' }}
                            />
                            <Card.Body>
                                <Card.Title>One year spend</Card.Title>
                                <Card.Text>
                                    Your most Transacted domain in last one year
                                    is <b>{mostTransacted}</b>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <p>
                            Based on Analysis we would like to offer the below
                            Proposals:
                        </p>
                        <br />
                        {console.log(bankCheck)}
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle
                                        as={Button}
                                        variant="link"
                                        eventKey="0"
                                    >
                                        Saving plan for x years
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle
                                        as={Button}
                                        variant="link"
                                        eventKey="0"
                                    >
                                        Plan 2
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        Hello! I'm another body
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default SuperWealthCreator
