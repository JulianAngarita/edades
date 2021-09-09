import './App.css';
import React, { Fragment } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'
import NuevaBusqueda from './vistas/nueva-busqueda';
import ListaEdades from './vistas/lista-edades';


function App() {
  


  return (
    <Fragment>
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={NuevaBusqueda}/>
          <Route exact path="/lista-edades/:url" component={ListaEdades}/>
        </Switch>
      </HashRouter>
    </Fragment>
  );
}

export default App;