
import './App.css';
import Footer from './components/footer.component';
import AppRoutes from './components/router/router';
import { OffCanvas } from "./components/offCanvas/Offcanvas";
import Sidebar from "./components/sidebar";
import styled from 'styled-components';
function App() {

  
  return (
    <div className="App contenedor">

   
    <div className="box-1">
    <OffCanvas />
    <Divider />
    
    
    </div>
    
   
        <div className="box-2">
        <Sidebar />
        </div>
       

<div className="box-3 body">
<AppRoutes />
  
</div>
   <Footer />
  </div>
  );
}


const Divider = styled.div`

  height: 1px;
  width: 100%;
  background: rgb(230, 230, 230);
  margin: 0 0 0 0;
  box-shadow: 2px 2px 5px #999;

  @media (min-width: 1100px) {
    .disabled {
        display: none;
        width: 0;
        height: 0;
        margin: 0;
    }
  
}

.box-3 {
    height: 30vh;
}


    
`;

export default App;
