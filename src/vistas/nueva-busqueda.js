import React, {Fragment, useState} from 'react';
import Formulario from '../componentes/formulario';
import Header from '../componentes/header';

const NuevaBusqueda = () => {

    const [ prediccion, setPrediccion ] = useState(Object.assign([]))
    const [ mostrar, setMostrar] = useState(false);
  
    const nuevaPrediccion = persona => {
      let prediccionArray = prediccion; 
      prediccionArray.push(persona);
      setPrediccion(prediccionArray);
      setMostrar(!mostrar);
    }

    return (
        <Fragment>
            <Header 
              titulo='Predecir edad' 
            />
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <div className="col m12 s12">
                          <Formulario 
                            addPersona={(value) => nuevaPrediccion(value)}
                            predicciones={prediccion}
                          />
                        </div>
                        <div className="col m12 s12">
                            {
                              mostrar || !mostrar?
                              prediccion.map((i) => (
                                <div key={i} className="white col s12">
                                    <div className="black-text">
                                        <p>
                                            { i }
                                        </p>
                                    </div>
                                </div>
                              ))
                              : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default NuevaBusqueda;