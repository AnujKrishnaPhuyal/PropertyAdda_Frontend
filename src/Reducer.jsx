function Reducer(state, action) {
  switch (action.type) {
    case "Loading_Data":
      return {
        ...state,
        is_Loading: true,
      };
      break;

    case "Error":
      return {
        ...state,
        is_Loading: false,
        is_Error: true,
      };
      break;
    case "Get_All_Data":
      // const filter_flat = action.payload.filter((curr) => {
      //   return curr.name === "flats" || "apartment";
      // });
      return {
        ...state,
        is_Loading: false,
        all_Products: action.payload,
        filter_Products: action.payload,
      };
      break;
    case "Get_All_Single_Data":
      return {
        ...state,
        is_Loading: false,
        single_product: action.payload,
      };
      break;

    default:
      return state;
  }
}

export default Reducer;
