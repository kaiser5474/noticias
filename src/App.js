import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header titulo={"Buscador de noticias"} />
      <div className="container white">
        <Formulario />
      </div>
    </>
  );
}

export default App;
