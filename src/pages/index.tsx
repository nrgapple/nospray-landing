import Head from "next/head"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Navbar, NavbarBrand, Card, Button, ButtonGroup } from "react-bootstrap"
import Layout from "../components/Layout"
import Branding from "../util/banding"
import Phone from "../components/Phone"

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>NoSpray</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar className="navbar navbar-expand-md navbar-default" sticky="top">
        <NavbarBrand className="HomeNavBrand">
          <img
            className="br-6"
            height="50px"
            width="50px"
            src="no-spray-192x192.png"
          />
          <h1 className="pl-3">{Branding.storeName}</h1>
        </NavbarBrand>
        <Button variant="success" href="https://app.nospray.us">
          Hop In
        </Button>
      </Navbar>
      <section>
        <div className="container-fluid">
          <Row className="px-md-5">
            <Col
              xs={12}
              className="align-self-center ml-auto mt-5 text-center pl-3 pr-3"
            >
              {" "}
              <h2 className="p-5">
                <strong>Interactive</strong> Pesticide Hypersensitive Individual
                Registry
              </h2>
              <Button href="https://app.nospray.us/signup">Sign Up</Button>
            </Col>
            <Col xs={12} className="p-md-5 pt-5">
              <img
                style={{
                  borderRadius: "6px",
                }}
                height="100%"
                width="100%"
                src="map.png"
              />
            </Col>
          </Row>
        </div>
      </section>
      <main>
        <div className="container-fluid pb-5">
          <header className="section-header mt-5">
            <h1 className="lead-5 fw-600">
              Find Registered Hypersensitive Individuals
            </h1>
            <p className="lead-3">
              Using our intelligent map, you can easily locate hypersensitive
              individuals in <strong>realtime</strong> or right from the office.
              Our application is one of the first that can be used as either a
              website or installed natively on a mobile device.
            </p>
          </header>
          <Row className="align-items-center justify-content-md-center">
            <Col xs={12} md={4}>
              <h5 className="text-center text-md-left lead-5 fw-600">
                Realtime Tracker
              </h5>
              <p className="lead-2 text-center text-md-left">
                View in <strong>realtime</strong> where hypersensitive
                individuals are located in order to ensure a safe and secure
                spray.
              </p>
            </Col>
            <Col xs={12} md={6} className="phone-container">
              <Phone>
                <img src="zone.png" width="100%" />
              </Phone>
            </Col>
          </Row>
          <div className="space-block" />
          <Row className="align-items-center justify-content-md-center px-md-5">
            <Col xs={12} md={6}>
              <img
                style={{
                  borderRadius: "6px",
                }}
                width="100%"
                src="details.png"
              />
            </Col>
            <Col xs={12} md={6} className="pt-2">
              <h5 className="lead-5 text-center text-md-left fw-600">
                Instant Contact
              </h5>
              <p className="lead-2 text-center text-md-left">
                Tap on the data point and get access to an individuals contact
                information to notify them via phone or email.
              </p>
            </Col>
          </Row>
        </div>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "16px",
            }}
          >
            <h3>Supported States</h3>
          </Col>
        </Row>
        <Row className="px-md-5 align-items-center justify-content-md-center">
          <Col>
            <div
              style={{
                padding: "16px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div>
                <img height="70px" width="130px" src="pa.svg" />
                <div
                  style={{
                    marginLeft: "8px",
                  }}
                >
                  Pennsylvania
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "16px",
            }}
          >
            <h3>Pricing</h3>
          </Col>
        </Row>
        <Row className="p-3 px-5">
          <Col>
            <Card>
              <Card.Header>Individual</Card.Header>
              <Card.Body>
                <div
                  style={{
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <h2>$5</h2>
                  <span style={{ marginBottom: "8px" }}>/month</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Company</Card.Header>
              <Card.Body>
                <div
                  style={{
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a href="mailto:matt@progressiveapp.store">
                    <span className="lead-3">Contact Us</span>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="row-gap-y text-center text-default justify-content-md-center mt-5 mb-5">
          <Col xs={12}>
            <h5 className="lead-3">
              <a href="https://app.nospray.us/signup">Sign up</a> now for a{" "}
              <strong>1 month free</strong> trial
            </h5>
          </Col>
        </Row>
      </main>
    </Layout>
  )
}

export default Home
