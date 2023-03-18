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

export default function Cibil_Score() {
  return (
      <>
      <br/><br/><br/>
    <div id="checkcibilscore" className="d-flex justify-content-center align-items-center page-header">
    <img
      alt="..."
      className="dots"
      src={require("../assets/img/dots.png")}
    />
    <img
      alt="..."
      className="path"
      src={require("./../assets/img/path4.png")}
    />
    <Container className="align-items-center">
      <Row>
        <Col lg="6" md="6" className="">
          <h1 className="profile-title text-left">Free Cibil Score</h1>
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
</>
  )
}
