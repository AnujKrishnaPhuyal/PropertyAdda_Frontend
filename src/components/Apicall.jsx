import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import App from "../App";
import Reducer from "../Reducer";
import { useParams } from "react-router-dom";
const Appcontext = createContext();
// const url = "http://127.0.0.1:8000/api/property/";
const url = "http://127.0.0.1:8000/api/AllData/";
const initialState = {
  is_Loading: false,
  is_Error: false,
  all_Products: [],
  single_product: {},
  filter_Products: [],
};

const AppProvider = ({ children }) => {
  // const [Datas, SetDatas] = useState([]);
  const [state, dispatch] = useReducer(Reducer, initialState);
  const getData = async (url) => {
    dispatch({ type: "Loading_Data" });
    try {
      const rsp = await axios.get(url);
      const final_data = await rsp.data;
      dispatch({ type: "Get_All_Data", payload: final_data });
    } catch (error) {
      dispatch({ type: "Error" });
    }
  };

  useEffect(() => {
    getData(url);
    // console.log(getData(url));
  }, []);

  const get_Single_Data = async (url) => {
    dispatch({ type: "Loading_Data" });
    try {
      const rsp = await axios.get(url);
      const final_data = await rsp.data;
      dispatch({ type: "Get_All_Single_Data", payload: final_data });
    } catch (error) {
      dispatch({ type: "Error" });
    }
  };

  return (
    <Appcontext.Provider value={{ ...state, get_Single_Data }}>
      {children}
    </Appcontext.Provider>
  );
};
const Globalcontext = () => {
  return useContext(Appcontext);
};

export { AppProvider, Appcontext, Globalcontext };
