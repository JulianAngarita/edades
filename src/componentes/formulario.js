import React, {useState} from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Formulario = ({
    addPersona,
}) => {

    const [nombre, setNombre] = useState('')
    const [localizacion, setLocalizacion] = useState('')
    const [ url, setUrl ] = useState('')

    

    const addToPredicction = () => {
        if(nombre.trim() === '') {
            return null
        } else {
            let nuevaUrl = url;
            addPersona(nombre);
            nuevaUrl += `name[]=${nombre}&`
            setUrl(nuevaUrl);
            setNombre('')
        }
    }


    return (
        <Fragment>
            <div className="input-group mb3">
                <div className="input-field col s6">
                    <input
                        className="form-control"    
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <label htmlFor="name">Nombre: </label>
                </div>

            </div>
            <div className="input-field col s6">
                <select
                    name="localizacion"
                    id="localiacion"
                    value={localizacion}
                    onChange={(e) => setLocalizacion(e.target.value)}
                >
                    <option value="">--Seleccione un país--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País: </label>
            </div>
            <div className="col m8">
            <div className="input-field col m6">
                <button
                    type="button"
                    onClick= {addToPredicction}
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                >Nueva Prediccion</button>
            </div>
            <div className="input-field col m6">
                <button
                    type="button"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                >
                    <Link to={`/lista-edades/${url}${
                        localizacion === ''
                        ?
                        ''
                        :
                        'country_id='+localizacion
                    }`}>Consultar Edades</Link>
                </button>
            </div>
            </div>
            
        </Fragment>
    );
}

export default Formulario;