import "./PaginaPostar.css";
import { useNavigate } from "react-router-dom";
import { Navegador } from "../../Common/Navegador";

function SecaoPostar() {
  let navigate = useNavigate();
  return (
    <section className="secaoPostar">
      <div className="content">
        <textarea
          className="caixaDeTexto"
          type="text"
          placeholder="Escreva sua mensagem aqui..."
        ></textarea>
        <div className="buttonCaixaDeTexto">
          <button
            className="button"
            onClick={() => {
              navigate("/");
            }}
          >
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
}

function PaginaPostar() {
  return (
    <section class="paginaPostar">
      <Navegador linhaDoTempoActive={false} postarActive={true}></Navegador>
      <SecaoPostar></SecaoPostar>
    </section>
  );
}

export { PaginaPostar };
