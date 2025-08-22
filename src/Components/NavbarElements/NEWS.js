import { Col, Container, Row } from "reactstrap";

export const newsData = [
  {
    "name": "I B. Tech Orientation Programme Schedule on 25-08-2025",
    "Filename": "/news/2025orientation.PDF"
  },
  {
    "name": "I B.Tech Orientation Programme on 20-01-2021",
    "Filename": "/news/IbtechOrientation.PDF"
  },

];

const NEWS = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div
            style={{
              marginTop: 100,
              backgroundColor: "#d0efff",
              borderTop: "6px solid blue",
              padding: "10px 20px",
              marginBottom: 100
            }}
          >
            <h2 style={{ color: "blue" }}>NEWS</h2>

            <div className="news">
              {newsData.map((item, index) => (
                <a
                  key={index}
                  href={item.Filename}
                  style={{ color: "rgb(107 178 255)" }}
                >
                  <p>
                    <span style={{ fontSize: 20 }}>{index + 1}</span>.{" "}
                    {item.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NEWS;
