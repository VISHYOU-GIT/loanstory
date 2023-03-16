import React from 'react'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";
export default function EnquiryForm() {
    return (
        <div className="wrapper">
            <div id="checkcibilscore" className="d-flex justify-content-center align-items-center page-header">
                <img
                    alt="..."
                    className="dots"
                    src={require("../assets/img/dots.png")}
                />
                <img
                    alt="..."
                    className="path"
                    src={require("../assets/img/path4.png")}
                />
                <section id="loanenquiry" className="section">
                    <Container>
                        <Row>
                            <Col md="6">
                                <Card className="card-plain">
                                    <CardHeader>
                                        <h1 className="profile-title text-left">Loan Enquiry</h1>
                                        <h5 className="text-on-back">🔎</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <Form>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <label>Your Name</label>
                                                        <Input defaultValue="Mike" type="text" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <label>Email address</label>
                                                        <Input placeholder="mike@email.com" type="email" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <label>Phone</label>
                                                        <Input defaultValue="001-12321345" type="text" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <label>Company</label>
                                                        <Input defaultValue="CreativeTim" type="text" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label>Message</label>
                                                        <Input placeholder="Hello there!" type="text" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Button
                                                className="btn-round float-right"
                                                color="primary"
                                                data-placement="right"
                                                id="tooltip341148792"
                                                type="button"
                                            >
                                                Send text
                                            </Button>
                                            <UncontrolledTooltip
                                                delay={0}
                                                placement="right"
                                                target="tooltip341148792"
                                            >
                                                Can't wait for your message
                                            </UncontrolledTooltip>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="ml-auto" md="4">
                                <div className="info info-horizontal">
                                    <div className="icon icon-primary">
                                        <i className="tim-icons icon-square-pin" />
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Find us at the office</h4>
                                        <p>
                                            Bld Mihail Kogalniceanu, nr. 8, <br />
                                            7652 Bucharest, <br />
                                            Romania
                                        </p>
                                    </div>
                                </div>
                                <div className="info info-horizontal">
                                    <div className="icon icon-primary">
                                        <i className="tim-icons icon-mobile" />
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Give us a ring</h4>
                                        <p>
                                            Michael Jordan <br />
                                            +40 762 321 762 <br />
                                            Mon - Fri, 8:00-22:00
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </div>
    )
}
