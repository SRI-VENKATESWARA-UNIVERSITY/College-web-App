
import { Col, Container, Table, Row } from "reactstrap";
const principal = () => {
  return (
    <Container>
      <Row>
        <h2 style={{ color: "orange", marginLeft: 100 }}>SRI VENKATESWARA UNIVERSITY COLLEGE OF ENGINEERING</h2>
      </Row>
      <Row>
        <Col>
          <div style={{ marginLeft: 100 }}><img style={{ width: 250, height: 250 }} src="https://svuniversity.edu.in/storage/2021/12/DR.G.SREENIVASULU-e1667287667349.jpg" />
            <p><strong>    Prof. G. Srinivasulu</strong></p>
          </div>
        </Col>
        <Col>
          <div style={{ marginTop: 100 }}>
            <h2 style={{ color: '' }}>Prof. G. Srinivasulu</h2>
            <h4>Professor of E.C.E</h4>
            <h4>M.Tech., Ph.D</h4>
            <h4><span>Email - </span>gunapatieee@rediffmail.com
            </h4>
            <h6>For Details  <a href="/EceFiles/ECE_Prof_GSrinivasulu.pdf">Click Here</a></h6>
          </div>

        </Col>

      </Row>
      <Row>
        <p style={{ marginTop: 50 }}>
          <b>Prof. G. Srinivasulu</b>  Received a Ph.D. degree in process control from the S V University, Tirupati, A.P in 2007.Currently, working as a professor in the Dept. Of ECE, SV University,Tirupati.He has 29 years of teaching experience in the dept. Of ECE, SV University, Tirupati. He published 29 papers in reputed journals, he guided 45 PG and 07 Ph.D. projects. He is a Life Member of ISTE (MISTE) and a Fellow of IETE (FIETE) & Fellow member of IE, Kolkata.<br />
          <br />
          His research interests include Neural networks and Fuzzy logic applications in process control, Process Instrumentation,Analog Electronics, Digital electronics.
        </p>
      </Row>
      <br />
      <br />
      <br />

    </Container>
  )
}
export default principal;

