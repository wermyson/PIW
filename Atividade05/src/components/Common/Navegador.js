import "./Navegador.css";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

function Navegador({ linhaDoTempoActive, postarActive }) {
  let navigate = useNavigate();
  let classesLinhaDoTempo = classNames("buttonNav", {
    active: linhaDoTempoActive === true,
  });
  let classesPost = classNames("buttonNav", {
    active: postarActive === true,
  });

  return (
    <section className="nav">
      <div className="conteudoEsquerda">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
          className="logo"
        ></img>
        <div className="buttons">
          <button
            className={classesLinhaDoTempo}
            onClick={() => {
              navigate("/");
            }}
          >
            Linha do tempo
          </button>
          <button
            className={classesPost}
            onClick={() => {
              navigate("/postar");
            }}
          >
            Postar
          </button>
        </div>
      </div>
      <p className="nomePessoaLogada">Wermyson</p>
    </section>
  );
}

export { Navegador };
