import React from "react";
import { Card, Col, Container, Image, Media, Row } from "react-bootstrap";
import PageLayout from "../components/Pages/PageLayout";

const Home = () => {
  return (
    <Container>
      <PageLayout />
      <div className="blog-detail-page">
        <Row>
          <Col md="8">
            {/* AUTHOR INTRO STARTS */}
            <Media className="mb-4 admin-intro">
              <Image
                roundedCircle
                width={64}
                height={64}
                className="mr-3"
                src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/49064844_993570907497559_4261191346766741504_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=xc_K7NFLp68AX_XV4km&_nc_ht=scontent-dfw5-1.xx&oh=6fd6ec43839df5ca5819b0d82431b728&oe=6006E016"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
                <p className="welcome-text">
                  My name is Amir Pahadi and I am an aspiring full-stack web
                  developer and mobile applications developer and and this is my
                  blog page.
                </p>
              </Media.Body>
            </Media>
            {/* AUTHOR INTRO ENDS */}
          </Col>
        </Row>
        <hr />
        {/* className from props */}
        <div className={`page-wrapper`}>
          <Row className="mb-5">
            <Col md="10">
              {/* CardListItem STARTS */}
              <Card className={`fj-card fj-card-list`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <img
                      src={"https://via.placeholder.com/150"}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Placeholder Author
                      </Card.Title>
                      <Card.Text className="card-date">
                        Placeholder Date
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Placeholder Title
                    </Card.Title>
                    <Card.Text>Placehodler Subtitle</Card.Text>
                  </Card.Body>
                </div>
                <a href="#" className="card-button">
                  Read More
                </a>
              </Card>
              {/* CardListItem ENDS */}
            </Col>

            <Col md="4">
              <Card className={`fj-card`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <img
                      src={"https://via.placeholder.com/150"}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Placeholder Author
                      </Card.Title>
                      <Card.Text className="card-date">
                        Placeholder Date
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img
                      src="https://via.placeholder.com/250"
                      alt="Card image cap"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Placeholder Title
                    </Card.Title>
                    <Card.Text>Placehodler Subtitle</Card.Text>
                  </Card.Body>
                </div>
                <a className="card-button">Read More</a>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <footer className="page-footer">
        <div>
          {/* <a href="#">courses</a>
			{' | '}
			<a href="#">github</a>
			{' | '}
			<a href="#">facebook</a> */}
        </div>
      </footer>
    </Container>
  );
};

export default Home;
