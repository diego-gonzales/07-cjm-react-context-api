import "./App.css";
import { CrudProvider } from "./context/CrudContext";
import CrudAPI from "./views/crud-context-api/CrudAPI";
import MyPageContextAPI from "./views/with-context-api/MyPageContextAPI";
import MyPage from "./views/without-context-api/MyPage";

function App() {
  return (
    <div>
      <CrudProvider>
        <CrudAPI />
      </CrudProvider>
      <MyPage />
      <MyPageContextAPI />
    </div>
  );
}

export default App;
