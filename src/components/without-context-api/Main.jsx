const Main = ({ theme, texts, isAuth }) => {
  const { mainWelcome, mainHello, mainContent } = texts;

  return (
    <main className={theme}>
      {isAuth ? <p className="greetings">{mainHello}</p> : <p className="greetings">{mainWelcome}</p>}
      <p>{mainContent}</p>
    </main>
  );
};

export default Main;
