import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";

const ExamTimeTable = () => {
  const calendarData = [
    {
      year: "2024-2025",
      course:"B.Tech",
      file: "/academics/exam/Examinations_Schedules _2024- 2025.jpeg",
    },
    {
      year: "2023-2024",
      course:"B.Tech",
      file: "/academics/exam/Examinations_Schedules_2023- 2024.jpeg",
    },
    {
      year: "2022-2023",
      course:"B.Tech",
      file: "/academics/exam/Examinations_Schedules_2022- 2023.jpeg",
    },
    
  ];

  return (
    <Container className="timetable my-4">
      <Row>
        {calendarData.map((item, index) => (
          <Col sm="6" md="4" lg="3" key={index} className="mb-4">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Examination Schedule</CardTitle>
                <p>{item.year}</p>
                <p>{item.course}</p>
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

export default ExamTimeTable;
