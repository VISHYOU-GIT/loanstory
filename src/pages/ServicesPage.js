import React from "react";
// reactstrap components
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

// core components

export default function ServicesPage() {
  return (
    <>
<<<<<<< HEAD
      <div className="wrapper">
        <div id="checkcibilscore" className="d-flex justify-content-center align-items-center page-header">
=======
    
      <div className="wrapper" >
        <div id="checkcibilscore" className="page-header">
>>>>>>> 525f75b7e0cf84418982426b5c4c5580bcecf270
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
                 <br/><br/><br/><br/>
          <Container className="align-items-center mt-3">
            <Row>
              <Col lg="6" md="6" className="">
                <h1 className="profile-title text-left"> Cibil Score</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                  Offices parties lasting outward nothing age few resolve.
                  Impression to discretion understood to we interested he
                  excellence. Him remarkably use projection collecting. Going
                  about eat forty world has round miles.
                </p>
                <div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round"
                    color="twitter"
                    href="https://twitter.com/creativetim"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip639225725">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="facebook"
                    href="https://www.facebook.com/creativetim"
                    id="tooltip982846143"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip982846143">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="dribbble"
                    href="https://dribbble.com/creativetim"
                    id="tooltip951161185"
                    target="_blank"
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip951161185">
                    Follow us
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
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
              
            </Row>
          </Container>
        </div>
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
                <h5 className="text-on-back">02</h5>
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
        <section id="loanenquiry" className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Loan Enquiry</h1>
                    <h5 className="text-on-back">03</h5>
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
    </>
  );
}
