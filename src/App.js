import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Navbar, Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Nav>
          <Nav.Link className="navbutton"><strong>skills</strong></Nav.Link>
          <Nav.Link className="navbutton"><strong>projects</strong></Nav.Link>
          <Nav.Link className="navbutton"><strong>about</strong></Nav.Link>
        </Nav>
      </Navbar>

      <div className="container1">
        <h1>Hi I'm Ron!</h1>
        <h2>Welcome to my portfolio!</h2>
      </div>
      <div className="skills">
        <h1>😎skill 1</h1>
        <h1>😎skill 2</h1>
        <h1>😎skill 3</h1>
        <h1>😎skill 4</h1>
      </div>

      <div className="topcards">
        <Card>
          <Card.Img />
          <Card.Body>
            <Card.Title>
              Pokemon
            </Card.Title>
            <Card.Text>
              Battle Simulator built in Vanilla JS
            </Card.Text>
            <div className="cardcontainer">
            <Button className="carditem">Frontend</Button>
            <Button className="carditem">Backend</Button>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img />
          <Card.Body>
            <Card.Title>
              Country Companion
            </Card.Title>
            <Card.Text>
              Country Data and Currency built with Express
            </Card.Text>
            <div className="cardcontainer">
            <Button className="carditem">Frontend</Button>
            <Button className="carditem">Backend</Button>
            </div>
          </Card.Body>
        </Card>

      </div>

        <Card id="bottomcard">
          <Card.Img />
          <Card.Body>
            <Card.Title>
              React 1UP
            </Card.Title>
            <Card.Text>
              Productivity App built in React
            </Card.Text>
            <div className="cardcontainer">
            <Button className="carditem">Frontend</Button>
            <Button className="carditem">Backend</Button>
            </div>
          </Card.Body>
        </Card>


      <div className="about">
        <h2>About Me Information goes down here</h2>
      </div>
    </div>
  );
}

export default App;
