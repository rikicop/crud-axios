import React from "react";

class AddEstudiante extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Estudiante</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Telefono</label>
            <input
              type="text"
              name="telefono"
              placeholder="Telefono"
              value={this.state.telefono}
              onChange={(e) => this.setState({ telefono: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Fecha Creación</label>
            <input
              type="text"
              name="fecha"
              placeholder="Fecha"
              value={this.state.fecha}
              onChange={(e) => this.setState({ fecha: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Id Usuario Creación</label>
            <input
              type="text"
              name="idusr"
              placeholder="Id Usuario Creación"
              value={this.state.idusr}
              onChange={(e) => this.setState({ idusr: e.target.value })}
            />
          </div>
          <button className="ui button blue">Agregar</button>
        </form>
      </div>
    );
  }
}

export default AddEstudiante;
