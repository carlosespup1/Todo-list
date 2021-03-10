import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  
  const AgregarTarea = () => {
    setTareas([...tareas, tarea]);
    setTarea('');
    return setTareas;
  }

  const printTarea =  tareas.map((item, index) => {
      return <ListGroup.Item key={index}>{item}</ListGroup.Item>
  });

  return (
    <Container fluid className="App mt-5">
        <Row>
            <Col>
                <input 
                onChange={
                    e => setTarea(e.target.value)
                }
                value={tarea}
                />
                <button onClick={AgregarTarea}>Agregar</button>

                <ListGroup className="list-unstyled">
                    {printTarea}
                </ListGroup>
            </Col>
        </Row>
    </Container>
  );
}

export default App;
