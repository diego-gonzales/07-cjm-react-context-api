import { createContext, useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const CrudContext = createContext();

export const CrudProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/pokemons";

  useEffect(() => {
    setIsLoading(true);
    api.get(url).then((resp) => {
      console.log(resp);
      if (!resp.err) {
        setData(resp);
        setError(null);
      } else {
        setData(null);
        setError(resp);
      }
      setIsLoading(false);
    });
  }, []);

  const createData = (newElement) => {
    newElement.id = Date.now();

    const options = {
      body: newElement,
      // O Content-Type le indica al cliente que tipo de contenido será retornado, o no sé si el cliente le indica que tipo de contenido le estás enviando al servidor ???
      // Leer: https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Content-Type
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((resp) => {
      if (!resp.err) {
        setData([...data, resp]);
      } else {
        setError(resp);
      }
    });
  };

  const updateData = (newElement) => {
    const options = {
      body: newElement,
      headers: { "content-type": "application/json" },
    };

    api.put(`${url}/${newElement.id}`, options).then((resp) => {
      if (!resp.err) {
        const newData = data.map((element) =>
          element.id === resp.id ? resp : element
        );
        setData(newData);
      } else {
        setError(resp);
      }
    });
  };

  const deleteData = (id) => {
    const areYouSure = window.confirm("Are you sure to delete the record?");

    if (!areYouSure) return;

    const options = {
      headers: { "content-type": "application/json" },
    };

    api.del(`${url}/${id}`, options).then((resp) => {
      if (!resp.err) {
        const newData = data.filter((element) => element.id !== id);
        setData(newData);
      } else {
        setError(resp);
      }
    });
  };

  const myData = { data, dataToEdit, isLoading, error, setDataToEdit, createData, updateData, deleteData };

  return (
    <CrudContext.Provider value={myData}>
      {children}
    </CrudContext.Provider>
  )
};