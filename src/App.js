import React from 'react';
import store from './store'; //Redux
import { Provider } from 'react-redux';

import AgregarCita from './components/AgregarCita';
import ListadoCitas from './components/ListadoCitas';

function App()
{
  return (
    <Provider store={store}>
      <div className="container">
        <header>
          <h1 className="text-center">Administrador de Pacientes Veterinaria</h1>
        </header>

        <div className="row">
          <div className="col-md-6 mt-3">
            <AgregarCita />
        </div>

          <div className="col-md-6 mt-3">
            <ListadoCitas />
        </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
