import { useContext } from "react";
import CrudForm from "../../components/crud-context-api/CrudForm";
import CrudTable from "../../components/crud-context-api/CrudTable";
import Loader from "../../components/crud-context-api/Loader";
import Message from "../../components/crud-context-api/Message";
import { CrudContext } from "../../context/CrudContext";

const CrudAPI = () => {
  const { data, isLoading, error } = useContext(CrudContext);

  return (
    <>
      <h1>CRUD API</h1>
      <section className="grid-1-2">
        <CrudForm />

        {isLoading && <Loader />}

        {error && (
          <Message
            message={`Error ${error.status}: ${error.statusText}`}
            bgColor={"#dc3545"}
          />
        )}

        {data && <CrudTable />}
      </section>
    </>
  );
};

export default CrudAPI;
