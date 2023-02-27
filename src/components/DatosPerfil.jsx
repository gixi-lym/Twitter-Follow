import Boton from "./Boton";

function DatosPerfil({
  follow,
  setFollow,
  nombre,
  usuario,
  img,
  onMouseOver,
  onMouseOut,
}) {
  return (
    <div className="datosperfil">
      <img src={img} alt="imagen de perfil" className="img" />
      <div className="datos">
        <h2 className="nombre">{nombre}</h2>
        <h3 className="usuario">@{usuario}</h3>
      </div>
      <div className="boton-principal">
        <Boton
          follow={follow}
          setFollow={setFollow}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        />
      </div>
    </div>
  );
};

export default DatosPerfil;
