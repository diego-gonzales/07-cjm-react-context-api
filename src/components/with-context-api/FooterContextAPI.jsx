import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";

const FooterContextAPI = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  const { footerTitle } = texts;

  return (
    <footer className={theme}>
      <h4>{footerTitle}</h4>
    </footer>
  );
};

export default FooterContextAPI;
