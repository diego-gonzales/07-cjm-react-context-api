import FooterContextAPI from "../../components/with-context-api/FooterContextAPI";
import HeaderContextAPI from "../../components/with-context-api/HeaderContextAPI";
import MainContextAPI from "../../components/with-context-api/MainContextAPI";
import { AuthProvider } from "../../context/AuthContext";
import { LanguageProvider } from "../../context/LanguageContext";
import { ThemeProvider } from "../../context/ThemeContext";

const MyPageContextAPI = () => {
  return (
    <div className="my-page">
      <AuthProvider>
        <ThemeProvider>
          <LanguageProvider>
            <HeaderContextAPI />
            <MainContextAPI />
            <FooterContextAPI />
          </LanguageProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
};

export default MyPageContextAPI;
