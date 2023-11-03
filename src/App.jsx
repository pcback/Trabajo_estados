import { useState } from "react";
import Titulo from "./components/Titulo";
import Iconos from "./components/Iconos";
import Formulario from "./components/Formulario";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="contenedor">
        <Titulo />
        <Iconos />
        <Formulario />
      </div>
    </>
  );
}
export default App;
