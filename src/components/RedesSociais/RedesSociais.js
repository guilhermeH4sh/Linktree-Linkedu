import './RedesSociais.css';

const RedesSociais = () => {
  const ListaRedes = [
    { id: 1, urlNome: 'Banner', url: 'https://www.banner.com' },
    { id: 2, urlNome: 'Instagram', url: 'https://www.instagram.com' },
    { id: 3, urlNome: 'Documentação', url: 'https://www.banner.com' },
    { id: 4, urlNome: 'Vídeo Pitch', url: 'https://www.banner.com' },
    { id: 5, urlNome: 'Artigo', url: 'https://www.banner.com' },
    { id: 6, urlNome: 'Resultados', url: 'https://www.banner.com' },
    { id: 7, urlNome: 'LinkedIn do Guilherme', url: 'https://www.linkedin.com/in/guilhermeff45' }
  ];

  return (
    <div className="links_container">
      {ListaRedes.map((props) => (
        <a
          key={props.id}
          href={props.url}
          className="link_botao"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.urlNome}
        </a>
      ))}
    </div>
  );
};

export default RedesSociais;
