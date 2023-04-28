import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class'
import ComponenteB from './componenteB';


function ComponenteA({ contacto }) {

    return (
        <div>
        <h2>Nombre: {contacto.nombre}</h2>
        <h3>Apellido: {contacto.apellido}</h3>
        <h4>Email: {contacto.email}</h4>
        <ComponenteB estado={ true }></ComponenteB>
        </div>
    );
};


ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteA;
