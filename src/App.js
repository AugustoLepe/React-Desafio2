import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Boton from "./Boton";

function App() {
  const [nombre, setNombre] = useState('')
  const [pass, setPass] = useState('')
  const [mostrarAlerta, setMostrarAlerta] = useState(false)
  const [mensaje, setMensaje] = useState('')

  const validarDatos = (e) => {
    e.preventDefault();
    setMostrarAlerta(true)
    if (nombre == "ADL" && pass == "252525") {
      setMensaje('Los datos son correctos!');
    } else {
      setMensaje('Los datos son incorrectos!');
    }
  };

  return (
    <div className="App container w-50">
      <h1>Desafío Estado de los componentes y eventos</h1>

      {mostrarAlerta && <div className="alert alert-danger">{mensaje}</div>}

      <form onSubmit={validarDatos}>
        <div className="mb-3">
          <label htmlFor='name'>Nombre</label>
          <input type="text" id="name" className="form-control" defaultValue={nombre} onChange={(e) => { setNombre(e.target.value) }} />
        </div>
        <div className="mb-3">
          <label htmlFor='name'>Contraseña</label>
          <input type="password" id="password" className="form-control" defaultValue={pass} onChange={(e) => { setPass(e.target.value) }} />
        </div>
        {nombre != '' && pass != '' && <Boton text="Iniciar Sesión" />}
      </form>
    </div>
  );
}

export default App;
