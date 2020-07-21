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
    // commented out the actual implementation as our service is running on localhost, so it is taking time to get these values
    // var mostTransacted
    // if (data.Data && data.Data.Matrix) {
    //     const pieChartData = [
    //         ['Task', 'Hours per Day'],
    //         ['Health', data.Data.Matrix.Health],
    //         ['Investment', data.Data.Matrix.Investment],
    //         ['Loan', data.Data.Matrix.Loan],
    //     ]
    // }

    // if (data.Data && data.Data.Matrix) {
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
    // }

    // const mostTransactedProduct = mostTransacted + "Product"

    // if (data.Data && data.Data.AccountBalances) {
    //     var bankAccount
    //     bankAccount = data.Data.AccountBalances
    // }
    const bankAccount =
        //state is by default an object
        [
            { id: '6a37fad9-d1a1-4ca4-9bf3-7e4bf0c36c8d', balance: 122420.92 },
            { id: '55b16334-bf2c-4443-92e3-29df8182ac18', balance: 28.38 },
            { id: 'b69afadd-a033-4fb6-87ba-1385b922d8b4', balance: 0.0 },
            { id: 'c60a3b00-63b5-469f-89ea-5154e26483c1', balance: 10250.0 },
            { id: 'e4fed049-a220-4cbf-b91a-ce778127ea6f', balance: 19799.26 },
        ]

    const recomendations =
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

    const recomendation = {
        'FDDeposit#101': {
            ProductName: 'RDDepositProduct',
            ProductId: 'FDDeposit#101',
            ProductType: 'Investment',
            roi: 7,
            additionalBenifits: 'additionalBenifits',
        },
        'RDDepositProduct#100': {
            ProductName: 'RDDepositProduct',
            ProductId: 'RDDepositProduct#100',
            ProductType: 'Investment',
            roi: 8,
            additionalBenifits: 'additionalBenifits',
        },
        'retirementPlanProduct#102': {
            ProductName: 'retirementPlanProduct',
            ProductId: 'retirementPlanProduct#102',
            ProductType: 'Investment',
            roi: 6,
            additionalBenifits: 'additionalBenifits',
        },
    }

    // if (data.Data && data.Data.AccountBalances) {
    //     var recomendation 
    //     recomendation  = data.Data.Recomendation.mostTransactedProduct
    // }

    const renderTableData = () => {
        // if (data.Data && data.Data.AccountBalances) {
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
                        src="http://www.iconsdb.com/icons/preview/black/square-xxl.png"
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
        // }
    }

    const renderAccordionData = () => {
        // if (data.Data && data.Data.AccountBalances) {
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
        // }
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
