const Rent_Reducer = (state, action) => {
  switch (action.type) {
    case "ALL_RENT_PRODUCTS":
      const allrent = action.payload;
      console.log("🚀 ~ allrent:", allrent);

      return {
        ...state,
        all_rent_products: action.payload,
        filter_rent_products: action.payload,
      };

      break;
    case "PROPERTY_FILTER_ROOM":
      let dat = action.payload;
      const roomfilterdata = dat.filter((item) => item.name === "Rooms");
      // console.log("🚀 ~ roomfilterdata:", roomfilterdata);
      return {
        ...state,
        Room_products: roomfilterdata,
        filter_Room_products: roomfilterdata,
      };

      break;
    case "PROPERTY_FILTER_APARTMENT":
      let datass = action.payload;

      const Apartmentfilterdata = datass.filter(
        (item) => item.name === "Flats and Apartments"
      );
      // console.log("🚀 ~ Apartmentfilterdata:", Apartmentfilterdata);

      return {
        ...state,
        Apartment_products: Apartmentfilterdata,
        filter_Apartment_products: Apartmentfilterdata,
      };

      break;
    case "PROPERTY_FILTER_EXCLUSIVES":
      let datas = action.payload;

      const exclusivesfilterdata = datas.filter(
        (item) => item.name === "Exclusives"
      );
      console.log("🚀 ~ exclusivesfilterdata:", exclusivesfilterdata);
      return {
        ...state,
        Exclusives_products: exclusivesfilterdata,
        filter_Exclusives_products: exclusivesfilterdata,
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
      let {
        all_rent_products,
        filter_Room_products,
        filter_Apartment_products,
        filter_Exclusives_products,
      } = state;
      let temp_filter_product = [...all_rent_products];
      let temp_room_products = [...filter_Room_products];
      let temp_flat_products = [...filter_Apartment_products];
      let temp_exclusive_products = [...filter_Exclusives_products];
      console.log("🚀 ~ temp_flat_products:", temp_flat_products);
      let temp_Exclusives_products = [state.Exclusives_products];
      let { name, text } = state.filters;
      // console.log("🚀 ~ name:", name);

      if (text) {
        temp_filter_product = temp_filter_product.filter((currr) => {
          return currr.location.toLowerCase().includes(text);
        });

        temp_flat_products = temp_flat_products.filter((currr) => {
          return currr.location.toLowerCase().includes(text);
        });
        temp_room_products = temp_room_products.filter((currr) => {
          return currr.location.toLowerCase().includes(text);
        });
        temp_exclusive_products = temp_exclusive_products.filter((currr) => {
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
        Apartment_products: temp_flat_products,
        Room_products: [...temp_room_products],
        Exclusives_products: [...temp_exclusive_products],
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
      let apartment_filter_products = state.Apartment_products;
      let room_filter_products = state.Room_products;
      let exclusives_filter_products = state.Exclusives_products;

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
          return sort_filter_products, apartment_filter_products;
        }
      };

      let filter_sort_products = sort_filter_products.sort(sorting_fun);
      let filter_Apartment = apartment_filter_products.sort(sorting_fun);
      let filter_Rooms = room_filter_products.sort(sorting_fun);
      let filter_Exclusives = exclusives_filter_products.sort(sorting_fun);
      return {
        ...state,
        filter_rent_products: filter_sort_products,
        Room_products: filter_Rooms,
        Apartment_products: filter_Apartment,
        Exclusives_products: filter_Exclusives,
        filter_Apartment_products: filter_Apartment,
      };
      break;

    default:
      return state;
  }
};

export default Rent_Reducer;
