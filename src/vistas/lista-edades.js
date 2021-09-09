import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../componentes/header';

const ListaEdades = () => {

    const [ parametro ] = useState( useParams() )
    const [ edades, setEdades ] = useState([]) 
    const [ cargando, setCargando] = useState(false)

    useEffect(() => {
        consultarEdades()
        // eslint-disable-next-line
    }, [parametro])

    const consultarEdades = async () => {
        let nuevasEdades = edades;
        setCargando(true);
        const respuesta = await fetch(`https://api.agify.io?${parametro.url}`);
        const resultado = await respuesta.json()
        nuevasEdades.push(resultado);
        setEdades(nuevasEdades[0]);
        setCargando(false);
    }

    if(cargando) {
        return(
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
    console.log('Lista de edades',edades)
    return(
        <Fragment>
            <Header
                titulo="Lista de edades"
            />
            {
                edades.length > 0
                ?
                edades.map(i => (
                    <div className="contenedor-form" key={i.count+Math.random()}>
                        <div className="container">
                            <div className="row">
                                <div className="col m6 s12">
                                    <div  className="col s12">
                                        <div className="white">
                                            <span>
                                                {i.name} tiene: {i.age}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                :
                null
            }
        </Fragment>
    )
}

export default ListaEdades;