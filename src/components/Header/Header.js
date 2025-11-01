import './Header.css';
import fotoPerfil from '../../assets/linkedu_img.png';

const Header = () => {
  return (
    <header className="perfil_conteudo">
        <img src={fotoPerfil} className="perfil_foto" alt="Foto de Perfil" url='../../assets/linkedu_img.png'/>   

      <p className="perfil_descricao">
        Aqui você encontra todos os links essenciais sobre o projeto!
      </p>
    </header>
  );
};

export default Header;
