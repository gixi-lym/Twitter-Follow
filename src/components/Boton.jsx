import { useState } from "react";

function Boton({ follow, onMouseOver, onMouseOut }) {
  const [seguir, setSeguir] = useState(false);

    return (
      <>
        {seguir ? (
          <div
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onClick={() => setSeguir(!seguir)}
            className="boton-seguir"
          >
            <h4 className="h4">Seguir</h4>
          </div>
        ) : (
          <div
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onClick={() => setSeguir(!seguir)}
            className="boton-siguiendo"
          >
            <h4 className="h4">{follow ? "Dejar de seguir" : "Siguiendo"}</h4>
          </div>
        )}
      </>
    );
};

export default Boton;
