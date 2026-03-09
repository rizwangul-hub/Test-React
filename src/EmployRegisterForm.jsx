import React from "react";

const EmployRegisterForm = () => {
  let handleFile = (e) => {
    console.log(e.target.files);
  };
  return (
    <div>
      <form
        action=""
        className="border w-[35%] m-auto flex flex-col gap-8 px-8 py-6"
      >
        <div className=" flex flex-col gap-1 ">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="border p-2 rounded focus:outline-none"
            name="name"
            id=""
          />
        </div>
        <div className=" flex-col gap-1 flex">
          <label htmlFor="">CNIC</label>
          <input
            type="text"
            name="name"
            className="border p-2 rounded focus:outline-none"
            id=""
          />
        </div>
        <div className=" flex-col gap-1 flex">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="name"
            className="border p-2 rounded focus:outline-none"
            id=""
          />
        </div>
        <div className="flex-col gap-1 flex">
          <label htmlFor="">File</label>
          <input
            onChange={handleFile}
            type="file"
            name="name"
            className="border p-2 rounded focus:outline-none"
            id=""
          />
        </div>
        <div className=" flex-col gap-1 flex">
          <label htmlFor="">Gender</label>
          <div className="flex gap-2">
            {" "}
            <input type="radio" name="gender" id="" value={"male"} />
            Male
            <input type="radio" name="gender" id="" value={"female"} />
            female{" "}
          </div>
        </div>
        <div className="flex-col gap-1 flex">
          <label htmlFor="">Hobies</label>
          <div>
            {" "}
            <input type="checkbox" name="name" id="" />
            Sports
            <input type="checkbox" name="name" id="" />
            Traviling
            <input type="checkbox" name="name" id="" />
            Reading
          </div>
        </div>
        <div className="flex-col gap-1 flex">
          <label htmlFor="">Department</label>
          <select name="" id="">
            <option value="">HR</option>
            <option value="">Coumputer</option>
            <option value="">IT</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default EmployRegisterForm;
