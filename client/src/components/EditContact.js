import React from "react";

class EditEstudiante extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email, telefono, fecha, idusr } =
      props.location.state.contact;
    this.state = {
      id,
      name,
      email,
      telefono,
      fecha,
      idusr,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.update}>
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
            <label>Fecha</label>
            <input
              type="text"
              name="fecha"
              placeholder="Fecha"
              value={this.state.fecha}
              onChange={(e) => this.setState({ fecha: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Id Usuario</label>
            <input
              type="text"
              name="idusr"
              placeholder="Id Usuario"
              value={this.state.idusr}
              onChange={(e) => this.setState({ idusr: e.target.value })}
            />
          </div>
          <button className="ui button blue">Actualizar</button>
        </form>
      </div>
    );
  }
}

export default EditEstudiante;
