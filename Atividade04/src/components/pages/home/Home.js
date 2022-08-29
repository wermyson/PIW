import "./Home.css";

function NavegadorSuperior() {
  return (
    <section className="nav">
      <div className="conteudoEsquerda">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
          className="logo"
        ></img>
        <div className="buttons">
          <button className="buttonNav active">Linha do tempo</button>
          <button className="buttonNav">Postar</button>
        </div>
      </div>
      <p className="nomePessoaLogada">Wermyson</p>
    </section>
  );
}

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
  return <div className="linhaDoTempo">{posts}</div>;
}

function PaginaFeed() {
  return (
    <section className="paginaFeed">
      <NavegadorSuperior></NavegadorSuperior>
      <LinhaDoTempo></LinhaDoTempo>
    </section>
  );
}

function Home() {
  return <PaginaFeed></PaginaFeed>;
}

export { Home };
