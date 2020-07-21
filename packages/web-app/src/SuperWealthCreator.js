import React, { useEffect } from 'react'
import Chart from 'react-google-charts'
import {
    Container,
    Row,
    Col,
    Card,
    Accordion,
    Button,
    Alert,
    Carousel,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SuperWealthCreator.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const SuperWealthCreator = () => {
    //var result = {}
    const [data, setData] = React.useState('')

    useEffect(async () => {
        const result = await axios(
            'http://localhost:8080/open-banking/v3.1/aisp/accounts/recommendations'
        )

        setData(result.data)
    }, [])
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     // document.title = `You clicked ${count} times`;
    //     axios
    //         .get(
    //             `http://localhost:8080/open-banking/v3/aisp/accounts/recommendation`
    //         )
    //         .then((res) => {
    //             responseData = res.data
    //             setResponseData(response.data.translation)
    // }, [setResponseData])
    //         })
    // }, [])
    console.log('account', data)

    // if(data){
    //     console.log('parsed',JSON.parse(data));
    // }
    //console.log('parsed',JSON.parse(data));

    // const data = useSelector((state) => state.app.data)
    // const accountId = useSelector((state) => state.account.accountId)

    // const dispatch = useDispatch()

    var mostTransacted
    const pieChartData = [
        ['Task', 'Hours per Day'],
        ['Health', 11],
        ['Investment', 21],
        ['Loan', 2],
    ]
    const mostTransactedData = Math.max(
        pieChartData[1][1],
        pieChartData[2][1],
        pieChartData[3][1]
    )
    if (mostTransactedData == pieChartData[1][1]) {
        mostTransacted = pieChartData[1][0]
    } else if (mostTransactedData == pieChartData[2][1]) {
        mostTransacted = pieChartData[2][0]
    } else {
        mostTransacted = pieChartData[3][0]
    }

    const bankAccount =
        //state is by default an object
        [
            { id: 1, balance: 10 },
            { id: 2, balance: 20 },
            { id: 3, balance: 30 },
            { id: 4, balance: 40 },
            { id: 5, balance: 50 },
        ]

    const recomendation =
        //state is by default an object
        {
            'Covid19#100': {
                ProductName: 'covid19Product',
                ProductId: 'Covid19#100',
                ProductType: 'Health',
                roi: 3.14,
                additionalBenifits: 'additionalBenifits',
            },
            'CancerTreatment#100': {
                ProductName: 'CancerTreatmentProduct',
                ProductId: 'CancerTreatment#100',
                ProductType: 'Health',
                roi: 3.5,
                additionalBenifits: 'additionalBenifits',
            },
            'HeartTreatment#100': {
                ProductName: 'HeartTreatmentProduct',
                ProductId: 'HeartTreatment#100',
                ProductType: 'Health',
                roi: 4.5,
                additionalBenifits: 'additionalBenifits',
            },
        }

    const renderTableData = () => {
        return bankAccount.map((bankAccount, index) => {
            const { id, balance } = bankAccount //destructuring
            return (
                //   <tr key={id}>
                //      <td>{id}</td>
                //      <td>{balance}</td>
                //   </tr>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.iconsdb.com/icons/preview/black/square-xxl.png"
                        alt="First slide"
                        class="tales"
                    />
                    <Carousel.Caption>
                        <h3>Bank account - {id}</h3>
                        <p>Balance- {balance}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
    }

    const renderAccordionData = () => {
        return Object.keys(recomendation).map((key, index) => {
            if (recomendation.hasOwnProperty(key)) {
                const { ProductName, ProductId, roi } = recomendation[key]
                return (
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey={index + 1}
                            >
                                {ProductName}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={index + 1}>
                            <Card.Body>
                                Hello! Know more and opt for {ProductName} with
                                id = {ProductId} having ROI = {roi}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )
            }
        })
    }

    // var bankCheck = mostTransacted === 'Banking'

    return (
        <Container fluid>
            <Alert variant="success">
                <Alert.Heading>
                    <h1>Super Wealth Creator</h1>
                </Alert.Heading>
            </Alert>

            <div className="content_body">
                <h5>Hi, 123456789012 !</h5>
                <br />
                <Carousel>{renderTableData()}</Carousel>
                <br />

                <Row>
                    <Col>
                        {' '}
                        <Card style={{ width: '18rem' }}>
                            <Chart
                                width={'500px'}
                                height={'300px'}
                                chartType="PieChart"
                                loader={<div>Loading Chart</div>}
                                data={pieChartData}
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
                        <Alert variant="info">
                            Based on Analysis we would like to offer the below
                            Proposals:
                        </Alert>
                        {/*                             
                        {console.log(bankCheck)} */}
                        <Accordion>{renderAccordionData()}</Accordion>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default SuperWealthCreator
