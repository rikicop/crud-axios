//import React, { useState } from "react";
import { useState } from "react";
import EstudianteCard from "./EstudianteCard";

const CheckEstudiante = (props) => {
  const [lista, setLista] = useState([]);
  console.log("Estudiantes: ", props.contacts);

  /* const handleChange = (event) => {
    console.log(" event.target.value value is:", event.target.value);
    const filtrado = props.contacts.filter(
      (a) => a.name === event.target.value
    );
    console.log("Filtrado: ", filtrado);
    setLista(filtrado);
  }; */

  const handleChange = (event) => {
    console.log(" event.target.value value is:", event.target.value);
    const filtrado = props.contacts.filter((item) =>
      item.name.includes(event.target.value)
    );
    console.log("Filtrado: ", filtrado);
    setLista(filtrado);
  };

  console.log("setLista...", lista);

  const deleteEstudianteHandler = (id) => {
    props.getContactId(id);
  };

  const renderEstudianteList = lista?.map((contact) => {
    return (
      <EstudianteCard
        contact={contact}
        key={contact.id}
        clickHander={deleteEstudianteHandler}
      />
    );
  });

  /* const renderDefaultList = props.contacts.map((contact) => {
    return <EstudianteCard contact={contact} key={contact.id} />;
  }); */

  return (
    <div className="main">
      <h2>Consulta Estudiante</h2>
      <input
        type="text"
        id="lista"
        name="lista"
        onChange={handleChange}
      ></input>
      <div className="ui celled list">{renderEstudianteList}</div>
    </div>
  );
};

export default CheckEstudiante;
