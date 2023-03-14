
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import {
  GenerateOTPFunction,
  VerifyOTPFunction,
} from "../services/LoginRegister";
import { AppAlert, AppModal } from "../components/basics";

// core components

export default function RegisterPage() {
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [mobileNumberFocus, setMobileNumberFocus] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [panNumber, setPanNumber] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [responseMessage, setResponseMessage] = React.useState("");
  const [otpFocus, setOtpFocus] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const [otp, setOtp] = React.useState("");
  //otp generate function
  const handleFormSubmit = () => {
    const payload = {
      Name: fullName,
      Email: email,
      mobile: panNumber,
      PANNO: mobileNumber,
    };
    GenerateOTPFunction(payload, setResponseMessage, setShowModal);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };
  //otp verify function
  const handleOTPVerification = () => {
    const userData = JSON.parse(localStorage.getItem("user"));

    VerifyOTPFunction(otp, userData, setResponseMessage, setShowModal);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div style={{position:'relative'}} className="content ">
            {alert  && (
              <AppAlert
                variant={"danger"}
                mesage={responseMessage}
                dismissTime={1000}
              />
            )}
            <Container>
              <Row>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div className="square square-7" id="square7" />
                  <div className="square square-8" id="square8" />
                  <Card className="card-register">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("../assets/img/square-purple-1.png")}
                      />
                      <CardTitle
                        style={{ color: "white", textTransform: "capitalize",fontSize:'50px' }}
                        className={"p-md-2 text-normal"}
                        
                      >
                        Register
                      </CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form">
                        <InputGroup
                          className={classnames({
                            "input-group-focus": fullNameFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Full Name"
                            type="text"
                            onFocus={(e) => setFullNameFocus(true)}
                            onBlur={(e) => setFullNameFocus(false)}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": emailFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="text"
                            onFocus={(e) => setEmailFocus(true)}
                            onBlur={(e) => setEmailFocus(false)}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": mobileNumberFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Mobile Number"
                            type="text"
                            onFocus={(e) => setMobileNumberFocus(true)}
                            onBlur={(e) => setMobileNumberFocus(false)}
                            onChange={(e) => setMobileNumber(e.target.value)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": passwordFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="PAN Number"
                            type="text"
                            onFocus={(e) => setPasswordFocus(true)}
                            onBlur={(e) => setPasswordFocus(false)}
                            onChange={(e) => setPanNumber(e.target.value)}
                          />
                        </InputGroup>
                        <FormGroup check className="text-left">
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />I agree to the{" "}
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              terms and conditions
                            </a>
                            .
                          </Label>
                        </FormGroup>
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="btn-round"
                        color="primary"
                        size="lg"
                        onClick={handleFormSubmit}
                      >
                        Get Started
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              <div className="register-bg" />
              <div className="square square-1" id="square1" />
              <div className="square square-2" id="square2" />
              <div className="square square-3" id="square3" />
              <div className="square square-4" id="square4" />
              <div className="square square-5" id="square5" />
              <div className="square square-6" id="square6" />
            </Container>
          </div>
        </div>
      </div>

      <AppModal
        shown={true}
        close={() => setShowModal(false)}
        modalShown={showModal}
      >
        <h4 className="text-white">Enter OTP</h4>
        <InputGroup
          className={classnames({
            "input-group-focus": otpFocus,
          })}
        >
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="tim-icons icon-lock-circle" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Enter OTP"
            type="text"
            onFocus={(e) => setOtpFocus(true)}
            onBlur={(e) => setOtpFocus(false)}
            onChange={(e) => setOtp(e.target.value)}
          />
        </InputGroup>
        <button className="btn btn-secondary" onClick={handleOTPVerification}>
          Verify
        </button>
      </AppModal>
    </>
  );
}
