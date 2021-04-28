import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Navbar, Nav } from 'react-bootstrap'
import html from './assets/logos/htmlLogo.png'
import css from './assets/logos/cssLogo.jpeg'
import javascript from './assets/logos/javascriptLogo.png'
import reactlogo from './assets/logos/reactLogo.png'
import postgreslogo from './assets/logos/postgresLogo.png'
import nodelogo from './assets/logos/nodeLogo.png'
import expresslogo from './assets/logos/expressLogo.png'
import pythonlogo from './assets/logos/pythonLogo.png'

function App() {
  return (
    <div className="App">
      
      <Navbar className="justify-content-end" bg="dark" variant="dark">
        <Nav className="buttoncontainer">
          <Nav.Link className="navbutton"><strong>home</strong></Nav.Link>
          <Nav.Link className="navbutton"><strong>skills</strong></Nav.Link>
          <Nav.Link className="navbutton"><strong>projects</strong></Nav.Link>
          <Nav.Link className="navbutton"><strong>about</strong></Nav.Link>
          <Nav.Link className="navbutton"><strong>contact</strong></Nav.Link>
        </Nav>
      </Navbar>

      <div className="welcomecontainer">

        <div className="welcome">
        <p>Hi I'm Ron!</p>
        <p><i>WELCOME TO MY PORTFOLIO</i></p>
        <Button id="welcomebutton">Let's Go!</Button>
        </div>
      </div>

      <div className="skills">
        
        <p id="skilltitle">Skills</p>

        <div className="skillcontainers">
          
          <div className="skillcontainer1">
          <img className="logos" src={html}/>
          <h2 className="techskill">HTML</h2>
          <img className="logos" src={css}/>
          <h2 className="techskill">CSS</h2>
          <img className="logos" src={javascript}/>
          <h2 className="techskill">Javascript</h2>
          <img className="logos" src={reactlogo}/>
          <h2 className="techskill">React</h2>
          </div>
          
          <div className="skillcontainer2">
          <img className="logos" src={postgreslogo}/>
          <h2 className="techskill">Postgres</h2>
          <img className="logos" src={nodelogo}/>
          <h2 className="techskill">Node</h2>
          <img className="logos" src={expresslogo}/>
          <h2 className="techskill">Express</h2>
          <img className="logos" src={pythonlogo}/>
          <h2 className="techskill">Python</h2>  
          </div>
        
        </div>
      </div>

      <div className="projectscontainer">

        <h1>Projects</h1>

          <Card className="actualcard">
            <Card.Img />
            <Card.Body className="cardbody">
              <Card.Title>
                Pokemon Simulator
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

          <Card className="actualcard">
            <Card.Img />
            <Card.Body className="cardbody">
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

          <Card className="actualcard">
            <Card.Img />
            <Card.Body className="cardbody">
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
      </div>

      <h1>About Me</h1>
      <div className="about">
        <p id="paragraph">I have a passion for creating solutions and building applications that have impact. I originally came from a background in Sales/Recruiting but have an inherent interest in technology, gaming, and food. Contact me so we can talk about the next greatest invention, upcoming game, or tasty dish!</p>
      </div>

      <h1>Contact</h1>
      <div className="contactcontainer">
      <a target="_blank" href="https://www.linkedin.com/in/ron-magpantay/">🔗 Linkedin 🔗</a>
      <a target="_blank" href="https://github.com/ronBP95">📧 Email 📧</a>
      <a target="_blank" href="https://github.com/ronBP95">🖥️ Github 🖥️</a>
      </div>
    </div>


  );
}

export default App;
