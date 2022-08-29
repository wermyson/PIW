import { Navegador } from "../../Common/Navegador";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Posts({ nome, mensagem, likes }) {
  return (
    <div className="post">
      <h3 className="post-nome">{nome}</h3>
      <p className="post-mensagem">{mensagem}</p>
      <div className="aligningLeft">
        <p className="post-likes">{likes} likes</p>
        <button className="darLike">Curtir</button>
      </div>
    </div>
  );
}

function LinhaDoTempo() {
  let listaPosts = [
    {
      nome: "Wermyson",
      mensagem: "Aqui, todo bonitinho",
      likes: 3,
    },
    {
      nome: "Hugo",
      mensagem: "Ficou baum msm",
      likes: 5,
    },
    {
      nome: "Joas",
      mensagem: "Ala o cara, me copiou",
      likes: 2,
    },
  ];

  let posts = listaPosts.map((post) => (
    <Posts nome={post.nome} mensagem={post.mensagem} likes={post.likes}></Posts>
  ));
  return (
    <section>
      <div className="linhaDoTempo">{posts}</div>
      <SecaoAdicionarComentario></SecaoAdicionarComentario>
    </section>
  );
}

function SecaoAdicionarComentario() {
  let navigate = useNavigate();
  return (
    <section className="adicionarComentario">
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

function PaginaFeed() {
  return (
    <section className="paginaFeed">
      <Navegador linhaDoTempoActive={true} postarActive={false}></Navegador>
      <LinhaDoTempo></LinhaDoTempo>
    </section>
  );
}

function Home() {
  return <PaginaFeed></PaginaFeed>;
}

export { Home };
