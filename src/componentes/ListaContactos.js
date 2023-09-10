import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import db from '../firebase/firebaseConfig';
import {collection, onSnapshot} from 'firebase/firestore';
import Contacto from './Contacto';

const ListaContactos = () => {

    const [contactos, cambiarContactos] = useState([]);

    // al inicio o carga de primera vez de la app
    useEffect(() => {
        // coleccion a conectar y función
        onSnapshot(
            collection(db, 'usuarios'), 
            // contiene la vista de la db
            (snapshot) => {
                console.log(snapshot.docs);

                const arregloUsuarios = snapshot.docs.map((documento) => {
                    return {...documento.data(), id: documento.id};
                });
                cambiarContactos(arregloUsuarios);
            },
            // se ejecuta en caso de error
            (error) => {
                console.log(error);
            }
        );
    }, []);


    return ( 
        contactos.length > 0 && 
        <ContenedorContactos>
            {contactos.map((contacto) => (
                <Contacto 
                    key={contacto.id}
                    id={contacto.id} 
                    nombre={contacto.nombre} 
                    correo={contacto.correo}
                />
            ))}
        </ContenedorContactos>
     );
}

const ContenedorContactos = styled.div`
    margin-top: 40px;
`;
 
export default ListaContactos;