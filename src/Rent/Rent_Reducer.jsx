const Rent_Reducer = (state, action) => {
  switch (action.type) {
    case "ALL_RENT_PRODUCTS":
      return {
        ...state,
        all_rent_products: action.payload,
        filter_rent_products: action.payload,
      };

      break;
    case "UPDATE_FILTER":
      let { names, value } = action.payload;
      // console.log("update fields is fired", names, value);
      return {
        ...state,
        filters: {
          ...state.filters, // Spread the existing filter properties
          [names]: value, // Update the property specified by the 'name' variable
          // Update the property specified by the 'name' variable
          // Update the property specified by the 'name' variable
          // Update the property specified by the 'name' variable
        },
      };
      break;

    case "FILTER_PRODUCTS":
      // console.log("state is", state);
      let { all_rent_products } = state;
      let temp_filter_product = [...all_rent_products];
      let { name, text } = state.filters;
      // console.log("🚀 ~ name:", name);

      if (text) {
        temp_filter_product = temp_filter_product.filter((currr) => {
          return currr.location.toLowerCase().includes(text);
        });
      }
      if (name) {
        if (name !== "All") {
          temp_filter_product = temp_filter_product.filter((currentelem) => {
            const currentNameUpper = currentelem.name.toUpperCase();
            const filterNameUpper = name.toUpperCase();

            // console.log("current element name is", currentNameUpper);
            // console.log("received name is", filterNameUpper);

            return currentNameUpper === filterNameUpper;
          });
        }
      }
      return {
        ...state,
        filter_rent_products: temp_filter_product,
        suggestion: temp_filter_product,
      };
      break;

    case "SELECT_PRODUCTS":
      let values = action.payload;
      // console.log("our sort value is", values);
      return {
        ...state,
        sorting_values: values,
      };
      break;

    case "SORTING_PRODUCTS":
      // console.log("sorting values ko state change vayo yrr");
      let valuess = state.sorting_values;
      // let sort_filter_products = action.payload;
      let sort_filter_products = state.filter_rent_products;

      // if (action.payload) {
      //   return (valuess = "lowest");
      // }

      const sorting_fun = (a, b) => {
        if (valuess === "highest") {
          return b.price - a.price;
        }

        if (valuess === "lowest") {
          return a.price - b.price;
        }
        if (valuess === "a-z") {
          return a.location.localeCompare(b.location);
        }
        if (valuess === "z-a") {
          return b.location.localeCompare(a.location);
        }
        if (valuess === "All") {
          return sort_filter_products;
        }
      };

      let filter_sort_products = sort_filter_products.sort(sorting_fun);
      return {
        ...state,
        filter_rent_products: filter_sort_products,
      };
      break;

    default:
      return state;
  }
};

export default Rent_Reducer;
