import Head from "next/head"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Navbar, NavbarBrand, Card, Button, ButtonGroup } from "react-bootstrap"
import Layout from "../components/Layout"
import Branding from "../util/banding"

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
      </Navbar>
      <section>
        <div className="container-fluid">
          <Row>
            <Col
              xs={12}
              className="align-self-center ml-auto mb-5 text-center pl-3 pr-3"
            >
              {" "}
              <h1 className="fw-600">NoSpray</h1>
              <p className="lead-2">Hypersensitive Individual Registar</p>
              <Button href="">Sign Up</Button>
            </Col>
            <Col xs={12} className="p-5">
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
        <section className="section bg-alternate overflow-hidden">
          <div className="container-fluid pb-5">
            <header className="section-header mt-5">
              <h1 className="lead-5 fw-600">Follow Your Favorate Web Apps</h1>
              <p className="lead-4">
                Developers can post DevLogs to update you on behind the scenes
                developerment.
              </p>
            </header>
            <Row className="align-items-center">
              <Col xs={12} md={4} className="pl-5">
                <h5 className="text-center text-md-left lead-5 fw-600">
                  Realtime Tracking
                </h5>
                <p className="lead-2 text-center text-md-left">
                  View in realtime where hypersentive individuals are and
                  boundries on the 500 feet distance that is required
                </p>
              </Col>
              <Col xs={12} md={8} className="text-center video-landing-small">
                <img
                  style={{
                    borderRadius: "6px",
                  }}
                  width="100%"
                  src="zone.png"
                />
              </Col>
            </Row>
            <div className="space-block" />
            <Row className="align-items-center">
              <Col xs={12} md={8} className="text-center video-landing-small">
                <img
                  style={{
                    borderRadius: "6px",
                  }}
                  width="100%"
                  src="details.png"
                />
              </Col>
              <Col xs={12} md={4} className="pl-5">
                <h5 className="text-center text-md-left lead-5 fw-600">
                  Contact
                </h5>
                <p className="lead-2 text-center text-md-left">
                  With just a single tap, you are given contact information on
                  the hypersensitive indivudal
                </p>
              </Col>
            </Row>
          </div>
        </section>
        <section>
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
          <Row>
            <Col>
              <div
                style={{
                  padding: "16px",
                  display: "block",
                }}
              >
                <img height="70px" width="130px" src="pa.png" />
                <span>Pennsylvania</span>
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
          <Row className="p-3">
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
                      <span>Contact Us</span>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <section className="section pt-5">
          <Row className="row-gap-y text-center text-default justify-content-md-center mt-5">
            <Col xs={12}>
              <h5 className="lead-3">
                <a href="https://nospray.us/signup">Sign up</a> now for a{" "}
                <strong>1 month free</strong> trial
              </h5>
            </Col>
          </Row>
        </section>
      </main>
    </Layout>
  )
}

export default Home
