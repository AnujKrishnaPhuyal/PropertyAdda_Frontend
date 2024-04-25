import { createContext, useContext, useReducer, useState } from "react";
import { Globalcontext } from "../components/Apicall";
import Reducer from "./Rent_Reducer";
import { useEffect } from "react";

const Rentcontext = createContext();
const initialState = {
  filter_rent_products: [],
  new_sort_products: [],
  all_rent_products: [],
  filters: {
    text: "",
    names: "all",
  },
  suggestion: [],
  sorting_values: "All",
};
const RentAppprovider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [activeButton, setActiveButton] = useState(null);

  const { filter_Products } = Globalcontext();

  useEffect(() => {
    dispatch({ type: "ALL_RENT_PRODUCTS", payload: filter_Products });
  }, [filter_Products]);

  const Update_fields = (event) => {
    let names = event.target.name;
    // console.log("🚀 ~ RentAppprovider ~ name:", names);
    let value = event.target.value;
    let text = event.target.value;
    // console.log("🚀 ~ RentAppprovider ~ value:", value);
    setActiveButton(value);
    return dispatch({ type: "UPDATE_FILTER", payload: { names, value, text } });
  };

  const sorting = (event) => {
    let values = event.target.value;
    dispatch({ type: "SELECT_PRODUCTS", payload: values });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [filter_Products, state.filters]);
  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [filter_Products, state.sorting_values]);

  return (
    <Rentcontext.Provider
      value={{
        ...state,
        Update_fields,
        activeButton,
        setActiveButton,
        sorting,
      }}
    >
      {children}
    </Rentcontext.Provider>
  );
};

const Rent_GLobalcontext = () => {
  return useContext(Rentcontext);
};

export { RentAppprovider, Rent_GLobalcontext };
