import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";
import { PaisesSelect } from "../Helpers";

const Formulario = ({ setCategoria, setPais }) => {
  //custom hooks
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
    { value: "sources", label: "Tecnología" },
  ];

  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);
  const [categoriaPais, SelectPais] = useSelect("us", PaisesSelect());

  //funciones
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategoria(categoria);
    setPais(categoriaPais);
  };

  return (
    <div className={`row ${styles.buscador}`}>
      <div className="col s12 m8 offset-m2">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
          <SelectNoticias />
          <SelectPais className="selectPais" />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`btn-large amber darken-2 ${styles["btn-block"]}`}
              value="buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
