function Projetos() {

  const projetos = [
    {
      nome: "Página de Apresentação",
      descricao: "Projeto com HTML e CSS",
      link: "https://github.com/seuusuario/projeto1"
    },
    {
      nome: "Calculadora",
      descricao: "Projeto com JavaScript",
      link: "https://github.com/seuusuario/projeto2"
    }
  ];

  return (
    <section id="projetos" className="section">
      <h2>Meus Projetos</h2>

      <div className="grid">
        {projetos.map((projeto, index) => (
          <div className="card" key={index}>
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank">Ver no GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;