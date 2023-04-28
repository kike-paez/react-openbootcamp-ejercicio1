import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ComponenteB(estado) {
    const [conectado, setConectado] = useState(estado);
    return (
        <div>
            <h5>
            Estado: { conectado === false ? 'Contacto no disponible' : 'Contacto en línea' }
            </h5>
            <button onClick={() => setConectado(!conectado)}>
                {conectado === false ? 'Conectar' : 'Desconectar'}
            </button>
        </div>
    );
};


ComponenteB.propTypes = {
    estado: PropTypes.bool
};


export default ComponenteB;
