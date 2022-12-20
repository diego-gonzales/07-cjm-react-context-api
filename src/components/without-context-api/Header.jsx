const Header = ({
  theme,
  handleTheme,
  texts,
  handleLanguage,
  isAuth,
  handleIsAuth
}) => {
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
          id="light"
          value="light"
          defaultChecked
        />
        <label htmlFor="light">{headerLight}</label>
        <input
          onClick={handleTheme}
          type="radio"
          name="theme"
          id="dark"
          value="dark"
        />
        <label htmlFor="dark">{headerDark}</label>
      </div>
      <div>
        <button type="button" onClick={handleIsAuth}>
          {isAuth ? buttonLogout : buttonLogin}
        </button>
      </div>
    </header>
  );
};

export default Header;
