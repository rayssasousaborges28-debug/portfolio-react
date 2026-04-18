function Contato() {
  return (
    <section id="contato" className="section">
      <h2>Contato</h2>

      <form className="form">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu email" required />
        <textarea placeholder="Sua mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contato;