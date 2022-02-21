import Formulario from "./components/Formulario";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  //hooks
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=f2cddafbfa0c4cb4b53eccd47a751cdf`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <>
      <Header titulo={"Buscador de noticias"} />
      <div className="container white">
        <Formulario setCategoria={setCategoria} />
      </div>
    </>
  );
}

export default App;
