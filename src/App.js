import './App.css';
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"

function App() {
  return (
    <div className="App">
      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href = "/about" eventKey="/about">About Us</Nav.Link>
        </Nav.Item>
      </Nav>
      <h1>Bootstrap Website</h1>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email Adress</Form.Label>
          <Form.Control type="email" placeholder='Enter Email'></Form.Control>
          <Form.Text className="text-muted">We Will Never Share Your Email</Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"></Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicCheckBox">
          <Form.Check type="checkbox" label="Check Me Out!" required="true"></Form.Check>
        </Form.Group>
        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </div>
  );
}

export default App;
