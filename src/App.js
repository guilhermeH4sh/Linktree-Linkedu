import Header from "./components/Header/Header";
import RedesSociais from "./components/RedesSociais/RedesSociais";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="app-content">
        <Header />
        <RedesSociais />
        <footer className="footer">
          <p>© {new Date().getFullYear()} LinkEdu — Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;

