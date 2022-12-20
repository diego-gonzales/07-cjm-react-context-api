import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";

const MainContextAPI = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const { isAuth } = useContext(AuthContext);

  const { mainWelcome, mainHello, mainContent } = texts;

  return (
    <main className={theme}>
      {isAuth ? (
        <p className="greetings">{mainHello}</p>
      ) : (
        <p className="greetings">{mainWelcome}</p>
      )}
      <p>{mainContent}</p>
    </main>
  );
};

export default MainContextAPI;
