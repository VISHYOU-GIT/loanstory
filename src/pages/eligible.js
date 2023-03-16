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

export default function Elegibility_Checker() {
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
                <div id="checkloaneligibility" className="section">
                    <Container>
                        <Row className="justify-content-between h-100">
                            <Col md="6">
                                <Row className=" d-flex justify-content-center align-items-center h-100">
                                    {/* <UncontrolledCarousel items={carouselItems} /> */}
                                    <Form className="w-100">
                                        <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Type of Loan</label>
                                                    <Input
                                                        type="select"
                                                        name="select"
                                                        id="exampleSelect1"
                                                    >
                                                        <option>Select</option>
                                                        <option>New</option>
                                                        <option>Top-up</option>
                                                        <option>Plot</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Gender</label>
                                                    {/* <Input placeholder="mike@email.com" type="email" /> */}
                                                    <Input
                                                        type="select"
                                                        name="select"
                                                        id="exampleSelect1"
                                                    >
                                                        <option>Select</option>
                                                        <option>Man</option>
                                                        <option>Woman</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Occupation</label>
                                                    <Input
                                                        type="select"
                                                        name="select"
                                                        id="exampleSelect1"
                                                    >
                                                        <option>Select</option>
                                                        <option>Police/ Army</option>
                                                        <option>Other</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Cibil Score</label>
                                                    <Input placeholder="Your cibil score" type="text" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label>ROI Value</label>
                                                    <Input
                                                        placeholder="ROI Value"
                                                        readOnly={true}
                                                        type="text"
                                                    />
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
                                            Submit
                                        </Button>
                                        <UncontrolledTooltip
                                            delay={0}
                                            placement="right"
                                            target="tooltip341148792"
                                        >
                                            Can't wait for your message
                                        </UncontrolledTooltip>
                                    </Form>
                                </Row>
                            </Col>
                            <Col md="5" className="">
                                <h1 className="profile-title text-left">Loan Eligibility</h1>
                                <h5 className="text-on-back">FREE</h5>
                                <p className="profile-description text-left">
                                    An artist of considerable range, Ryan — the name taken by
                                    Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                                    performs and records all of his own music, giving it a warm,
                                    intimate feel with a solid groove structure. An artist of
                                    considerable range.
                                </p>
                                <div className="btn-wrapper pt-3">
                                    <Button
                                        className="btn-simple"
                                        color="primary"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="tim-icons icon-book-bookmark" /> Bookmark
                                    </Button>
                                    <Button
                                        className="btn-simple"
                                        color="info"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="tim-icons icon-bulb-63" /> Check it!
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}
