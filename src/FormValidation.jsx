// import React, { useState } from "react";
// let initialData = {
//   username: "",
//   email: "",
//   password: "",
//   dob: "",
// };

// export const FormValidation = () => {
//   const [formdata, setFormDate] = useState(initialData);
//   const [formError, setFromError] = useState({ initialData });
//   const valid = (data) => {
//     let errors = {};
//     if (!data.username) {
//       errors.username = "username is required";
//     } else if (!data.username.length < 5) {
//       errors.username = "at least 5 charachter";
//     }
//     if (!data.email) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//       errors.email = "Invalid email format";
//     }

//     if (!data.password) {
//       errors.password = "Password is required";
//     } else if (data.password.length < 6) {
//       errors.password = "Password must be at least 6 characters";
//     }
//     if (!data.dob) {
//       errors.dob = "DOB is must";
//     }

//     return errors;
//   };
//   let handleChange = (e) => {
//     let { name, value } = e.target;
//     const updatedForm = {
//       ...formData,
//       [name]: value,
//     };
//     setFormData(updatedForm);
//     const errors = validate(formData);
//     setFromError(errors);
//   };

//   let handleform = (e) => {
//     e.preventDefault();
//     const errors = validate(formData);
//     setFormErrors(errors);
//      if (Object.keys(errors).length === 0) {
//     console.log("Form Submitted:", formData);

//     setFormDate(initialData);
//   };

//   // setFormDate({ ...formdata, [name]: value });

 
//   }

//   // let { username, email, password, dob } = FormData({});

//   return (
//     <div>
//       <form
//         onSubmit={handleSignup}
//         action=""
//         className="flex flex-col gap-4 w-96 mx-auto mt-10 border p-4 rounded-2xl"
//       >
//         <label htmlFor="email">UserName:</label>
//         <input
//           type="text"
//           name="username"
//           value={formData.email}
            // onChange={handleChange}
//           className="border-2 rounded-2xl h-[40px] px-3"
//         />
//         <p className="text-red-500">
//           {formError.username && formError.username}
//         </p>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           name="password"
//            value={formData.password}
            // onChange={handleChange}
//           className="border-2 rounded-2xl h-[40px] px-3"
//         />
//         <p className="text-red-500">
//           {formError.password && formError.password}
//         </p>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="text"
//           name="Email"
//           value={formdata.email}
//           id=""
//           onChange={(e) => handleChange(e.target.value)}
//           className="border-2 rounded-2xl h-[40px] px-3"
//         />
//         <p className="text-red-500">{formError.email && formError.email}</p>
//         <label htmlFor="password">Dob:</label>
//         <input
//           type="password"
//           name="dob"
//           value={formdata.dob}
//           id=""
//           onChange={(e) => handleChange(e.target.value)}
//           className="border-2 rounded-2xl h-[40px] px-3"
//         />
//         <p className="text-red-500">{formError.dob && formError.dob}</p>
//         <button className="border p-2 bg-blue-500 text-white rounded-2xl">
//           Log In
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FormValidation;


import React, { useState } from "react";
const initialFormData = {
  username: "",
  email: "",
  password: "",
};

const initialErrors = {
  username: "",
  email: "",
  password: "",
};

const SignupPro = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialErrors);

  // validation function
  const validate = (data) => {
    let errors = {};

    if (!data.username) {
      errors.username = "Username is required";
    } else if (data.username.length < 5) {
      errors.username = "Username must be at least 5 characters";
    }

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email format";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedForm = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedForm);

    // live validation
    const errors = validate(updatedForm);
    setFormErrors(errors);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const errors = validate(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form Submitted:", formData);

      setFormData(initialFormData);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSignup}
        action=""
        className="flex flex-col gap-4 w-96 mx-auto mt-10 border p-4 rounded-2xl"
      >
        <label htmlFor="email">UserName:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
            onChange={handleChange}
          className="border-2 rounded-2xl h-[40px] px-3"
        />
        <p className="text-red-500">
          {formError.username && formError.username}
        </p>

        {/* Email */}
        <label htmlFor="email">Email:</label>
//         <input
          type="text"
          name="Email"
          value={formdata.email}
          id=""
          onChange={(e) => handleChange(e.target.value)}
          className="border-2 rounded-2xl h-[40px] px-3"
        />
        <p className="text-red-500">{formError.email && formError.email}</p>
        <label htmlFor="password">Dob:</label>

        {/* Password */}
       <label htmlFor="password">Password:</label>
//         <input
          type="password"
          name="password"
           value={formData.password}
            onChange={handleChange}
          className="border-2 rounded-2xl h-[40px] px-3"
        />
        <p className="text-red-500">
          {formError.password && formError.password}
        </p>

        <button className="border p-2 rounded-lg shadow hover:shadow-2xl my-5 cursor-pointer">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPro;