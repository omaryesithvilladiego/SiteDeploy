import React from 'react'
import { request } from '../helper/helper';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import DataGrid from '../grid/grid';


    const columns = [
        {
            dataField:"_id",
            text:"ID",
            hidden: true,

        },
        {
            dataField:"nombre",
            text:"Nombre",
        }

    ]



export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        request
        .get(this.props.url)
        .then((response) => {
            this.setState({ rows: response.data });
        })
        .catch((error) => {
            console.log(error);
        });

    }


    render() {
        return (
        
        <Container id='empleados-buscar-container'>
            <Row>
                <h1>Buscar empleados</h1>
            </Row>
            <Row>

                <DataGrid url="/estudiantes/find" columns={ columns } />
                
          
            </Row>
        </Container>);
    }
}

const Container = styled.div`

        margin-top: 10rem;
        text-align: center;

   h1 {
    color: black;
   }
 `



