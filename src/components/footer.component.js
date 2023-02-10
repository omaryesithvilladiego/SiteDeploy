import React from 'react';
import styled from 'styled-components';

function Footer() {
    return ( 
        <Contenedor>
            
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">

    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 TransDigitalCoop. Todos los derechos reservados.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 text-reset  md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 text-reset hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 text-reset text-resethover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="text-reset">Contact</a>
        </li>
    </ul>
</footer>
</Contenedor> );
}

const Contenedor = styled.div`

  html{
    min-height: 100%;
  position: relative;
  }

  body {
  margin: 0;
  margin-bottom: 40px;
}


  background-color: transparent;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 14vh;
  color: white;
 




`

export default Footer;