import { useState } from "react";
import DatosPerfil from "./components/DatosPerfil";

function App() {
  const [follow, setFollow] = useState(false);
  const handleMouseOver = (index) => setFollow(index);
  const handleMouseOut = () => setFollow(false);
  const personas = [
    {
      nombre: "Nate Gentile",
      usuario: "nategentile7",
      img: "../src/img/nate.jpg",
    },
    {
      nombre: "Shakira",
      usuario: "shakiralaputa",
      img: "../src/img/shakira.jfif",
    },
    {
      nombre: "Carlos Tevez",
      usuario: "carlitostevez10",
      img: "../src/img/tevez.jfif",
    },
  ];

  return (
    <div className="App">
      
      <div className="contenedor">
        <h1 className="h1">A quién seguir</h1>
        {personas.map((persona, index) => (
          <DatosPerfil
            key={index}
            nombre={persona.nombre}
            usuario={persona.usuario}
            img={persona.img}
            follow={follow === index}
            setFollow={setFollow}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
