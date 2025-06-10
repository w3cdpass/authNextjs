"use client";
import Link from "next/link";
import { useState } from "react";

export default function CandidateSignUpPagination() {
  return (
    <>
      <div className="max-lg:hidden w-[60%] flex justify-center m-auto items-center mt-10">
        <div className="bg-[#008000] text-white px-5 py-2 rounded-2xl ">
          <p>Sign Up*</p>
        </div>
        <div className="bg-[#737d7338] xl:px-10 px-6 py-1.5"></div>
        <div className="bg-[#737d7338] text-white px-5 py-2 rounded-2xl ">
          <p>Basic Info*</p>
        </div>
        <div className="bg-[#737d7338] xl:px-10 px-6 py-1.5"></div>
        <div className="bg-[#737d7338] text-white px-5 py-2 rounded-2xl ">
          <p>Job Field*</p>
        </div>
        <div className="bg-[#737d7338] xl:px-10 px-6 py-1.5"></div>
        <div className="bg-[#737d7338] text-white px-5 py-2 rounded-2xl ">
          <p>Complete</p>
        </div>
      </div>
    </>
  );
}

// export function SignUpForm() {
//   return (
//     <>
//       <div className="w-[85%] m-auto ">
//         <fieldset className="border-2 rounded-tl-2xl rounded-tr-2xl max-lg:full lg:w-[60%]  mx-auto my-10 items-center mt-10  border-[#008000] p-5">
//           <legend className=" text-center font-bold text-2xl">
//             New Registration Form
//           </legend>
//           <p className="text-end">
//             <span className="text-red-800">* </span>Required
//           </p>

//           <form className="m-auto flex flex-col items-center gap-5">
//             <div className="flex flex-col gap-2">
//               <div className="px-5 py-2 rounded-2xl flex justify-between sm:flex-row flex-col sm:gap-20 gap-2">
//                 <label htmlFor="name">
//                   Name:<span className="text-red-800">* </span>
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   placeholder="Enter your Name"
//                   required
//                   className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
//                   pattern="[A-Za-z\s]+"
//                 />
//               </div>
//               <div className="px-5 py-2 rounded-2xl flex justify-between sm:flex-row flex-col sm:gap-20 gap-2">
//                 <label>
//                   Email Id:<span className="text-red-800">* </span>
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="Enter your Email Id"
//                   required
//                   className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
//                 />
//               </div>
//               <div className="px-5 py-2 rounded-2xl flex justify-between sm:flex-row flex-col sm:gap-20 gap-2">
//                 <label>
//                   Create Password:<span className="text-red-800">*</span>
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="Enter Your Password"
//                   required
//                   className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
//                 />
//               </div>
//               <div className="px-5 py-2 rounded-2xl flex justify-between sm:flex-row flex-col sm:gap-20 gap-2">
//                 <label>
//                   Confirm Password:<span className="text-red-800">*</span>
//                 </label>
//                 <input
//                   type="password"
//                   id="confirm-pass"
//                   placeholder="Re-enter Password"
//                   required
//                   className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col gap-1 my-5 items-center">
//               <button className="sm:text-2xl text-xl sm:px-10 px-5 py-2 rounded-2xl text-white bg-[#008000] cursor-pointer">
//                 Sign Up
//               </button>
//               <p>
//                 Already have account?{" "}
//                 <Link href="#" className="text-[#008000] font-bold">
//                   Sign In
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </fieldset>
//       </div>
//     </>
//   );
// }

export function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

    // Success (no API call)
    setError("");
    setSuccess("User registered successfully!");
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="w-[85%] m-auto">
      <fieldset className="border-2 rounded-2xl lg:w-[60%] mx-auto my-10 border-[#008000] p-5">
        <legend className="text-center font-bold text-2xl">
          New Registration Form
        </legend>
        <p className="text-end">
          <span className="text-red-800">* </span>Required
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex flex-col gap-2">
            <div className="px-5 py-2 rounded-2xl flex justify-between sm:flex-row flex-col sm:gap-20 gap-2">
              <label htmlFor="name">
                Name:<span className="text-red-800">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name" // ✅ added
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                required
                pattern="[A-Za-z\s]+"
                className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
              />
            </div>

            <div className="px-5 py-2 rounded-2xl flex justify-between sm:flex-row flex-col sm:gap-20 gap-2">
              <label htmlFor="email">
                Email Id:<span className="text-red-800">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email" // ✅ added
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email Id"
                required
                className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
              />
            </div>

            <div className="px-5 py-2 rounded-2xl flex justify-between sm:flex-row flex-col sm:gap-20 gap-2">
              <label htmlFor="password">
                Create Password:<span className="text-red-800">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password" // ✅ added
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
                required
                className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
              />
            </div>

            <div className="px-5 py-2 rounded-2xl flex justify-between sm:flex-row flex-col sm:gap-20 gap-2">
              <label htmlFor="confirmPassword">
                Confirm Password:<span className="text-red-800">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword" // ✅ added
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter Password"
                required
                className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
              />
            </div>
          </div>

          {error && <p className="text-red-600">{error}</p>}
          {success && <p className="text-green-600">{success}</p>}

          <div className="flex flex-col gap-1 my-5 items-center">
            <button
              type="submit"
              className="sm:text-2xl text-xl sm:px-10 px-5 py-2 rounded-2xl text-white bg-[#008000] cursor-pointer"
            >
              Sign Up
            </button>
            <p>
              Already have an account?{" "}
              <Link href="/signin" className="text-[#008000] font-bold">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </fieldset>
    </div>
  );
}
