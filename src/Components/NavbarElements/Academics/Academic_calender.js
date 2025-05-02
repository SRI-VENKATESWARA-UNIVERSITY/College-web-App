import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";

const Calendar = () => {
  const calendarData = [
    {
      year: "2024-2025 Btech",
      file: "https://drive.google.com/file/d/1OU7FOXdWTSs0mMs7Ntgk3zw8jamu2bk5/view?usp=sharing",
    },
    {
      year: "2023-2024 Btech",
      file: "https://drive.google.com/file/d/1eeSWTqbtXq-UTfkFXcsJkaKAW7jjDWNw/view?usp=sharing",
    },
    {
      year: "2022-2023 Btech",
      file: "https://drive.google.com/file/d/1K7n9gCNifwR_HjVKOh-Ku9W3KVqO17td/view?usp=sharing",
    },
    {
      year: "2022,2023,2024 Mtech",
      file: "https://drive.google.com/file/d/1LAN6yCx-AfsXBLvUzfvp5JIf_ftDRA_5/view?usp=sharing",
    },
  ];

  return (
    <Container className="timetable my-4">
      <Row>
        {calendarData.map((item, index) => (
          <Col sm="6" md="4" lg="3" key={index} className="mb-4">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Academic Calendar</CardTitle>
                <p>{item.year}</p>
                <a href={item.file} download>
                  Download PDF
                </a>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Calendar;
