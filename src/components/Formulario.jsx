import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

const Formulario = (setErrores) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [contraseña2, setContraseña2] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      nombre !== "" &&
      correo !== "" &&
      contraseña !== "" &&
      contraseña2 !== ""
    ) {
      if (contraseña === contraseña2) {
        Swal.fire({
          icon: "success",
          title: "EXITO...",
          text: "Formulario Exitoso",
          footer: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "error",
          text: "Contraseña no coinciden",
          footer: "",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Todos los campos son obligatorios",
        footer: "",
      });
    }
  };
  return (
    <div>
      <div className="'formulario">
        <Form onSubmit={onSubmit}>
          <input
            placeholder="Nombre"
            name="Nombre"
            className="input"
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            placeholder="Correo Electronico"
            name="Correo"
            type="email"
            className="input"
            onChange={(e) => setCorreo(e.target.value)}
          />

          <input
            placeholder="Contraseña"
            name="Contraseña"
            type="password"
            className="input"
            onChange={(e) => setContraseña(e.target.value)}
          />
          <input
            placeholder="Confirma tu contraseña"
            name="Contraseña2"
            type="password"
            className="input"
            onChange={(e) => setContraseña2(e.target.value)}
          />
          <div>
            <Button variant="primary" type="submit" className="input">
              registrarse
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Formulario;
