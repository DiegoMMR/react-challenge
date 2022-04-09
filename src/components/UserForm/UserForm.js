import React, { useState } from "react";

import "../../styles/components.scss";
import "../../styles/UserForm.scss";

function UserForm({ title, user, setUser, submitForm }) {
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const fieldName = event.target.name;
    const newState = { ...user, [fieldName]: event.target.value };

    if (fieldName === "email") {
      if (!validateEmail(newState[fieldName])) {
        addError(fieldName, "Email is not valid");
      } else {
        addError(fieldName, false);
      }
    }

    return setUser(newState);
  };

  const addError = (field, message) => {
    const newErrors = { ...errors, [field]: message };
    setErrors(newErrors);
  };

  const validateEmail = (email) => {
    const emailTest =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (emailTest.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const validRequired = (value) => {
    if (value && value.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const validateForm = () => {
    const fields = ["name", "email", "phone", "country"];
    let isValid = true;
    let errors = {};

    setErrors({});

    fields.forEach((field) => {
      const isValidRequired = validRequired(user[field]);

      if (!isValidRequired) {
        errors = { ...errors, [field]: "This field is required" };
        isValid = false;
      } else if (field === "email") {
        const isValidFormat = validateEmail(user[field]);
        if (!isValidFormat) {
          errors = { ...errors, [field]: "Email is not valid" };
          isValid = false;
        }
      }
    });

    setErrors(errors);

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      submitForm();
    } else {
      console.log("UserForm: handleSubmit", "invalid form");
    }
  };

  return (
    <form aria-label="form" onSubmit={handleSubmit} className="centered">
      <h2>{title}</h2>
      <div>
        <label htmlFor="name" className="label">
          Name
        </label>
        <input placeholder="Name" name="name" type="text" value={user.name} onChange={handleInputChange} />
        {errors.name && <p className="text-error">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input placeholder="Email" name="email" type="text" value={user.email} onChange={handleInputChange} />
        {errors.email && <p className="text-error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="label">
          Phone
        </label>
        <input placeholder="Phone" name="phone" type="text" value={user.phone} onChange={handleInputChange} />
        {errors.phone && <p className="text-error">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="country" className="label">
          Country
        </label>
        <input placeholder="Country" name="country" type="text" value={user.country} onChange={handleInputChange} />
        {errors.country && <p className="text-error">{errors.country}</p>}
      </div>
      <div>
        <input id="submit" className="button" type="submit" value="Aceptar" />
      </div>
    </form>
  );
}

export default UserForm;
