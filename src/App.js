import React from 'react';
import styled from 'styled-components';
import FormularioAgregarContacto from './componentes/Formulario';
import ListaContactos from './componentes/ListaContactos';

const App = () => {
    return ( 
        <Contenedor>
            <Titulo>Lista de Contactos</Titulo>
            <FormularioAgregarContacto/>
            <ListaContactos/>
        </Contenedor>
     );
}
 
const Contenedor = styled.div`
    margin: 40px;
    width: 90%;
    max-width: 400px;
    background: #fff;
    padding: 40px;
    border-radius: 5px;
    text-align: center;
`;

const Titulo = styled.h2`
    margin-bottom: 10px;
`;


export default App;


