import { useState } from "react";
import Footer from "../../components/without-context-api/Footer";
import Header from "../../components/without-context-api/Header";
import Main from "../../components/without-context-api/Main";

const initialTheme = "light";
const initialLanguage = "es";
const initialIsAuth = null;
const translations = {
  es: {
    headerTitle: "Mi aplicación SIN Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página"
  },
  en: {
    headerTitle: "My application without Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer"
  }
};

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [isAuth, setIsAuth] = useState(initialIsAuth);

  const handleTheme = (e) => {
    setTheme(e.target.value);
  };

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
    setTexts(translations[e.target.value]);
  };

  const handleIsAuth = (e) => {
    if (isAuth) setIsAuth(null);
    else setIsAuth(true);
  };

  return (
    <div className="my-page">
      <Header
        theme={theme}
        handleTheme={handleTheme}
        texts={texts}
        handleLanguage={handleLanguage}
        isAuth={isAuth}
        handleIsAuth={handleIsAuth}
      />
      <Main theme={theme} texts={texts} isAuth={isAuth} />
      <Footer theme={theme} texts={texts} />
    </div>
  );
};

export default MyPage;
