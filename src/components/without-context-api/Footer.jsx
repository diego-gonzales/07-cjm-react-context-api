const Footer = ({ theme, texts }) => {
  const { footerTitle } = texts;
  return (
    <footer className={theme}>
      <h4>{footerTitle}</h4>
    </footer>
  );
};

export default Footer;
