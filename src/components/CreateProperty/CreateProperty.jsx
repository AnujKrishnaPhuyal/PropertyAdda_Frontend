import React, { useState } from "react";
import axios from "axios";
import styles from "./CreateProperty.module.css";

const CreateProperty = () => {
  const [allFormData, setallFormData] = useState({
    propertyImage1: null,
    propertyImage2: null,
    propertyImage3: null,
    propertyName: "#",
    location: "",
    propertyType: "",
    daleyName: "",
    daleyImage: null,
    daleyPhone: "",
    price: "",
    BikeParking: "#",
    CarParking: "#",
    AttachedBathroom: "#",
    Kitchen: "#",
    Bedroom: "",
  });
  const [errors, setErrors] = useState({
    propertyName: "",
    location: "",
    propertyType: "",
    daleyName: "",
    daleyImage: "",
    daleyPhone: "",
    price: "",
    BikeParking: "",
    CarParking: "",
    AttachedBathroom: "",
    Kitchen: "",
    Bedroom: "",
  });
  const [touchedFields, setTouchedFields] = useState({
    propertyName: false,
    location: false,
    propertyType: false,
    daleyName: false,
    daleyImage: false,
    daleyPhone: false,
    price: false,
    BikeParking: "",
    CarParking: "",
    AttachedBathroom: "",
    Kitchen: "",
    Bedroom: "",
  });

  const handleImageChange = (event) => {
    setallFormData({
      ...allFormData,
      daleyImage: event.target.files[0],
    });
  };
  const handleImageChange1 = (event) => {
    setallFormData({
      ...allFormData,
      propertyImage1: event.target.files[0],
    });
  };

  const handleImageChange2 = (event) => {
    setallFormData({
      ...allFormData,
      propertyImage2: event.target.files[0],
    });
  };

  const handleImageChange3 = (event) => {
    setallFormData({
      ...allFormData,
      propertyImage3: event.target.files[0],
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setallFormData({
      ...allFormData,
      [name]: value,
    });
    setTouchedFields({
      ...touchedFields,
      [name]: true,
    });
    if (value && errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!validateForm()) {
    //   return; // Exit early if validation fails
    // }
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = new FormData();
    formData.append("location", allFormData.location);
    formData.append("propertyImage1", allFormData.propertyImage1);
    formData.append("propertyImage2", allFormData.propertyImage2);
    formData.append("propertyImage3", allFormData.propertyImage3);
    formData.append("daleyPhone", allFormData.daleyPhone);
    formData.append("daleyName", allFormData.daleyName);
    formData.append("propertyType", allFormData.propertyType);
    formData.append("propertyName", allFormData.propertyName);
    formData.append("price", allFormData.price);
    formData.append("daleyImage", allFormData.daleyImage);
    formData.append("Kitchen", allFormData.Kitchen);
    formData.append("CarParking", allFormData.CarParking);
    formData.append("BikeParking", allFormData.BikeParking);
    formData.append("AttachedBathroom", allFormData.AttachedBathroom);
    formData.append("Bedroom", allFormData.Bedroom);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/create_property/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("🚀 ~ handleSubmit ~ formData:", formData);

      console.log(response.data);
      alert("you have successfully added your property");
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = () => {
    let errors = {};
    // Validate each field individually
    if (allFormData.propertyName === "#") {
      errors.propertyName = "Please select a property name";
      console.log("not trriggered property name");
    }
    if (allFormData.Kitchen === "#") {
      errors.Kitchen = "Select Avaibility of Attached Bathroom";
      console.log("not trriggered property name");
    }
    if (allFormData.AttachedBathroom === "#") {
      errors.AttachedBathroom = "Select Avaibility of Attached Bathroom";
      console.log("not trriggered property name");
    }
    if (allFormData.CarParking === "#") {
      errors.CarParking = "Please select available car parking space";
      console.log("not trriggered property name");
    }
    if (allFormData.BikeParking === "#") {
      errors.BikeParking = "Please select available Bike parking space";
      console.log("not trriggered property name");
    }
    if (!allFormData.location) {
      errors.location = "Please enter a location";
    }
    if (!allFormData.Bedroom) {
      errors.Bedroom = "Please enter Bedroom information";
    }
    if (!allFormData.propertyType) {
      errors.propertyType = "Please enter a property type";
    }
    if (!allFormData.daleyName) {
      errors.daleyName = "Please enter a Daley name";
    }
    if (!allFormData.daleyImage) {
      errors.daleyImage = "Please upload a Daley image";
    }
    if (!allFormData.daleyPhone) {
      errors.daleyPhone = "Please enter a Daley phone number";
    } else if (!/^\d{10}$/.test(allFormData.daleyPhone)) {
      errors.daleyPhone = "Please enter a valid 10-digit phone number";
    }
    if (
      !allFormData.propertyImage1 ||
      !allFormData.propertyImage2 ||
      !allFormData.propertyImage3 ||
      !allFormData.daleyImage
    ) {
      alert("please upload images");
    }

    // Price field validation
    if (!allFormData.price) {
      errors.price = "Please enter a price";
    } else if (isNaN(allFormData.price)) {
      errors.price = "Price must be a number";
    }
    // Generic error message for all fields empty
    const filledfield = Object.values(allFormData).some(
      (value) => value !== ""
    );
    if (!filledfield) {
      errors.generic = "Please fill out at least one field";
    }

    // Update touchedFields state
    const touched = { ...touchedFields };
    for (const fieldName in errors) {
      touched[fieldName] = true;
    }
    setTouchedFields(touched);

    return errors;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.name_heading}>List Your Property</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.images_container}>
          <div className={styles.property_images}>
            <label htmlFor="img1">Property image 1</label>
            <input type="file" accept="image/*" onChange={handleImageChange1} />
          </div>
          <div className={styles.property_images}>
            <label htmlFor="img2">Property image 2</label>
            <input type="file" accept="image/*" onChange={handleImageChange2} />
          </div>
          <div className={styles.property_images}>
            <label htmlFor="img3">Property image 3</label>
            <input type="file" accept="image/*" onChange={handleImageChange3} />
          </div>
        </div>

        <div>
          <select
            value={allFormData.propertyname}
            onChange={handleInputChange}
            className={styles.select}
            id="propertyName"
            name="propertyName"
          >
            <option value="#">Property Name</option>
            <option value="Flats and Apartments">Flats and Apartment</option>
            <option value="Exclusives">Exclusives</option>
            <option value="Rooms">Rooms</option>
          </select>
          {touchedFields.propertyName && errors.propertyName && (
            <p className={styles.error_message}>{errors.propertyName}</p>
          )}
        </div>
        <div className={styles.Daley_fields}>
          <label htmlFor="">location</label>
          <input
            type="text"
            onChange={handleInputChange}
            value={allFormData.location}
            name="location"
          />
          {touchedFields.location && errors.location && (
            <p className={styles.error_message}>{errors.location}</p>
          )}
          <label htmlFor=""> property type</label>
          <input
            type="text"
            name="propertyType"
            onChange={handleInputChange}
            value={allFormData.propertyType}
          />
          {touchedFields.propertyType && errors.propertyType && (
            <p className={styles.error_message}>{errors.propertyType}</p>
          )}
          <label htmlFor="">Daley Name</label>
          <input
            type="text"
            onChange={handleInputChange}
            value={allFormData.daleyName}
            name="daleyName"
          />
          {touchedFields.daleyName && errors.daleyName && (
            <p className={styles.error_message}>{errors.daleyName}</p>
          )}
          <label htmlFor="">Daley image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <label htmlFor="number">Phone</label>
          <input
            type="number"
            name="daleyPhone"
            value={allFormData.daleyPhone}
            onChange={handleInputChange}
            className={styles.price_num}
          />
          {touchedFields.daleyPhone && errors.daleyPhone && (
            <p className={styles.error_message}>{errors.daleyPhone}</p>
          )}
          <label htmlFor="number">Price</label>
          <input
            type="number"
            name="price"
            value={allFormData.price}
            onChange={handleInputChange}
            className={styles.price_num}
          />
          {touchedFields.price && errors.price && (
            <p className={styles.error_message}>{errors.price}</p>
          )}
          <label htmlFor="">Bedroom</label>
          <input
            type="text"
            onChange={handleInputChange}
            value={allFormData.Bedroom}
            name="Bedroom"
          />
          {touchedFields.Bedroom && errors.Bedroom && (
            <p className={styles.error_message}>{errors.Bedroom}</p>
          )}
        </div>

        <div>
          <label htmlFor="bathrrom">Attached Bathroom</label>
          <select
            value={allFormData.AttachedBathroom}
            onChange={handleInputChange}
            className={styles.select}
            id="AttachedBathroom"
            name="AttachedBathroom"
          >
            <option value="#">Select</option>
            <option value="Available">Available</option>
            <option value="UnAvailable">UnAvailable</option>
          </select>
          {touchedFields.AttachedBathroom && errors.AttachedBathroom && (
            <p className={styles.error_message}>{errors.AttachedBathroom}</p>
          )}
        </div>
        <div>
          <label htmlFor="Kitchen">Kitchen</label>
          <select
            value={allFormData.Kitchen}
            onChange={handleInputChange}
            className={styles.select}
            id="Kitchen"
            name="Kitchen"
          >
            <option value="#">Select</option>
            <option value="Available">Available</option>
            <option value="UnAvailable">UnAvailable</option>
          </select>
          {touchedFields.Kitchen && errors.Kitchen && (
            <p className={styles.error_message}>{errors.Kitchen}</p>
          )}
        </div>
        <div>
          <label htmlFor="CarParking">Car Parking</label>
          <select
            value={allFormData.CarParking}
            onChange={handleInputChange}
            className={styles.select}
            id="CarParking"
            name="CarParking"
          >
            <option value="#">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          {touchedFields.CarParking && errors.CarParking && (
            <p className={styles.error_message}>{errors.CarParking}</p>
          )}
        </div>
        <div>
          <label htmlFor="CarParking">Bike Parking</label>
          <select
            value={allFormData.BikeParking}
            onChange={handleInputChange}
            className={styles.select}
            id="BikeParking"
            name="BikeParking"
          >
            <option value="#">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          {touchedFields.BikeParking && errors.BikeParking && (
            <p className={styles.error_message}>{errors.BikeParking}</p>
          )}
        </div>

        <button type="submit" className={styles.submit_btn}>
          Submit
        </button>
      </form>
      <div></div>
    </div>
  );
};

export default CreateProperty;
