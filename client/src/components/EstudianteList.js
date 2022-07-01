import React from "react";
import { Link } from "react-router-dom";
import EstudianteCard from "./EstudianteCard";

const EstudianteList = (props) => {
  //const [consultar, setConsultar] = useState();
  //const filtrado = props.contacts.filter((a) => a.name === "Jupiter");
  console.log("Estudiantes: ", props.contacts);

  //console.log("Filtrado: ", filtrado);

  const deleteEstudianteHandler = (id) => {
    props.getContactId(id);
  };

  const renderEstudianteList = props.contacts.map((contact) => {
    return (
      <EstudianteCard
        contact={contact}
        clickHander={deleteEstudianteHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Lista de Estudiantes
        <Link to="/add">
          <button className="ui button blue right">Agregar Estudiante</button>
        </Link>
        <Link to="/check">
          <button className="ui button blue right">
            Consultar Estudiante Por Nombre
          </button>
        </Link>
      </h2>
      <div className="ui celled list">{renderEstudianteList}</div>
    </div>
  );
};

export default EstudianteList;
