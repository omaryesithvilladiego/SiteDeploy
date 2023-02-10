import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }
  
    render() { 
        return ( <Contenedor className='enabled'>
                
                <Link className='button' to="/">
                    <h6>Home</h6></Link>
             
               
                <Link className='button' to="/about"><h6>About</h6></Link>
               
           

                <Link className='button' to="/servicios"><h6>Servicios</h6></Link>

               
                    

        </Contenedor> );
    }
}
 
const Contenedor = styled.div`
   
    height: 79.2vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    background-color: #a6ffff7f;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  


  .button {
    
    cursor: pointer;
    width: 100%;
    height: 2rem;
    background-color: #7c97af;
    text-align: center;
    justify-content: center;
    border: none;
    color: white;
    align-items: center;
    padding-top: 0.3rem;
    text-decoration: none;
    :hover {
        transform: scale(1.05);
        background-color: #88a8c4;
    }
    

    


    
  
    
  }


  ::-webkit-scrollbar {
    display: none;
  }

    @media (max-width: 1100px) {
    
        display: none;
    

}

  

    
`