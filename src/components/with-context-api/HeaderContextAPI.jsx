import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";

const HeaderContextAPI = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { texts, handleLanguage} = useContext(LanguageContext);
  const { isAuth, handleIsAuth } = useContext(AuthContext);

  const {
    headerTitle,
    headerSubtitle,
    headerLight,
    headerDark,
    buttonLogin,
    buttonLogout
  } = texts;

  return (
    <header className={theme}>
      <h2>{headerTitle}</h2>
      <h3>{headerSubtitle}</h3>
      <div>
        <select name="language" onChange={handleLanguage}>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </div>
      <div>
        <input
          onClick={handleTheme}
          type="radio"
          name="theme"
          id="light-context"
          value="light"
          defaultChecked
        />
        <label htmlFor="light-context">{headerLight}</label>
        <input
          onClick={handleTheme}
          type="radio"
          name="theme"
          id="dark-context"
          value="dark"
        />
        <label htmlFor="dark-context">{headerDark}</label>
      </div>
      <div>
        <button type="button" onClick={handleIsAuth}>
          {isAuth ? buttonLogout : buttonLogin}
        </button>
      </div>
    </header>
  );
};

export default HeaderContextAPI;
