import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./assets/scss/blk-design-system-react.scss";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import reportWebVitals from "./reportWebVitals";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Elegibility_Checker from "./pages/eligible.js";
import EnquiryForm from "./pages/enquiry.js";
import Cibil_Score from "./pages/cibil.js";
import {
  ContactPage,
  HowItWorks,
  InfoPage,
  LandingPage,
  RegisterPage,
  ServicesPage,
  SmartBorrowers,
} from "./pages";
import { MainNavbar } from "./components/Navbar";
import { MainFooter } from "./components/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
// Create a client
// const queryClient = new QueryClient();
root.render(
  <>
    {/* <QueryClientProvider client={queryClient}> */}
      <BrowserRouter>
        <MainNavbar />
        <Switch>
          <Route
            path="/services"
            render={(props) => <ServicesPage {...props} />}
          />
          <Route
            path="/smart-borrower"
            render={(props) => <SmartBorrowers {...props} />}
          />
          <Route
            path="/contact"
            render={(props) => <ContactPage {...props} />}
          />
          <Route path="/info" render={(props) => <InfoPage {...props} />} />
          <Route
            path="/register"
            render={(props) => <RegisterPage {...props} />}
          />
          <Route
            path="/howitworks"
            render={(props) => <HowItWorks {...props} />}
          />
          <Route
            exact
            path="/eligibility"
          render={(props) => <Elegibility_Checker {...props} />}
          />
          <Route
            exact
            path="/enquiry"
          render={(props) => <EnquiryForm {...props} />}
          />
          <Route
            exact
            path="/analysis"
          render={(props) => <Cibil_Score {...props} />}
          />
          <Route
            exact
            path="/"
            render={(props) => <LandingPage {...props} />}
          />
        </Switch>
        <MainFooter />
      </BrowserRouter>
    {/* </QueryClientProvider> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
