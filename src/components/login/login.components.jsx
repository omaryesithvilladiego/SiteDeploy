import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col} from "react-bootstrap";
import "../css/login.component.css";
import {isNull} from "util";
import Cookies from "universal-cookie";
import { calculaExtreaccionSesion } from '../helper/helper';
import axios from "axios";
import app from  '../app.json';
import Loading from "../loading/loading";
import { Link } from 'react-router-dom';


const cookies = new Cookies();
const {APIHOST} = app;


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: "",
      pass: "",
    };
  }

  iniciarSesion() {
     this.setState({loading: true});

    axios.post(`${APIHOST}/usuarios/login`, {
      usuario: this.state.usuario,
      pass:this.state.pass,
    })
    .then((response) => {
      if(isNull(response.data.token)){
      
        alert("invalid user or password");
       
        
      } else {
        cookies.set('_s',response.data.token, {
          path:'/',
          expires:calculaExtreaccionSesion(),
        })
        this.props.history.push(window.open('/empleados'))
      }

      this.setState({loading: false});
     
    })
    .catch((err) => {
      console.log(err);
      this.setState({loading: false});
    });


  }

  render() {
    return (
      <Container className="login-contenedor block p-6 rounded-lg shadow-lg bg-white max-w-md" id="login-container">

          <div>

       
      
        
        <Loading  show={this.state.loading} />
        <Row>
          <Col>
          <h3>Authentication</h3>
          </Col>
        </Row>

        

        <Row>
       
          <Col
            sm="12"
            xs="12"
            md={{ span: 4, offset: 4 }}
            lg={{ span: 4, offset: 4 }}
            xl={{ span: 4, offset: 4 }}
          >
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter user"
                  onChange={(e) => {
                    this.setState({ usuario: e.target.value });
                  }}
                />
                 {/* {this.state.usuario} */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => {
                    this.setState({ pass: e.target.value });
                  }}
                />
                {/* {this.state.pass} */}
                
              </Form.Group>

              <div className='register'>

                <h6>Si no te has registrado, hazlo presionando <span><Link to="/registro">clic here</Link></span></h6>

              </div>
              <Button onClick={() => {
                this.iniciarSesion();
              }} 
              variant="primary"  type="button">
                Start
              </Button>
            </Form>
          </Col>
        </Row>
        </div>
        
      </Container>
    );
  }
}



// <Container
//   className="login-contenedor"
//   id="login-container"
//   style={{ marginTop: 100 }}>
//   <Row>
//     <Col
//       sm="12"
//       xs="12"
//       md={{ span: 4, offset: 4 }}
//       lg={{ span: 4, offset: 4 }}
//       xl={{ span: 4, offset: 4 }}
//       style={{}}
//     >
//       <Form>
//         <Form.Group className="" controlId="formBasicEmail">
//           <Form.Label></Form.Label>
//           <Form.Control
//             placeholder="Telefono, usuario o correo electronico"
//             onChange={(e) => {
//               this.setState({ usuario: e.target.value });
//             }}
//           />
//           {this.state.usuario}
//         </Form.Group>

//         <Form.Group className="entrada" controlId="formBasicPassword">
//           <Form.Control
//             type="password"
//             placeholder="Contraseña"
//             onChange={(e) => {
//               this.setState({ pass: e.target.value });
//             }}
//           />
//           {this.state.pass}
//         </Form.Group>

//         <Button variant="primary" type="submit" className="button">
//           Entrar
//         </Button>
//       </Form>
//       <div className="centrado">
//       <a href="/">¿Has olvidado la contraseña?</a>
//     </div>
//     </Col>

//   </Row>
// </Container>
