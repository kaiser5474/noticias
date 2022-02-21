import Formulario from "./components/Formulario";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  //hooks
  const [categoria, setCategoria] = useState("");
  const [pais, setPais] = useState("us");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=f2cddafbfa0c4cb4b53eccd47a751cdf`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setNoticias(resultado.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <>
      <Header titulo={"Buscador de noticias"} />
      <div className="container white">
        <Formulario setCategoria={setCategoria} setPais={setPais} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </>
  );
}

export default App;
