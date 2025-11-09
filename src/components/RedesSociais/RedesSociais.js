import './RedesSociais.css';

const RedesSociais = () => {
  const ListaRedes = [
    { id: 1, urlNome: 'Vídeo Pitch', url: 'https://youtube.com/shorts/RGIExyxHXPQ' },
    { id: 2, urlNome: 'Trello', url: 'https://trello.com/b/GyndirEf/upx-3' },
    { id: 3, urlNome: 'GitHub', url: 'https://github.com/LinkEdu-AI/LinkEdu' }
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
