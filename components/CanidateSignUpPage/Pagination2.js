"use client";
import Link from "next/link";

export default function CandidateSignUpPagination() {
  return (
    <>
      <div className="max-lg:hidden w-[60%] flex justify-center m-auto items-center mt-10">
        <div className="bg-[#008000] text-white px-5 py-2 rounded-2xl ">
          <p>Sign Up*</p>
        </div>
        <div className="bg-[#008000] xl:px-10 px-6 py-1.5"></div>
        <div className="bg-[#008000] text-white px-5 py-2 rounded-2xl ">
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

export function SignUpForm() {
  return (
    <div className="w-[85%] m-auto">
      <fieldset className="border-2 rounded-2xl lg:w-[60%] mx-auto my-10 border-[#008000]">
        <legend className="text-center font-bold text-2xl">
          Basic Information
        </legend>
        <div className="p-5">
          <p className="text-end">
            <span className="text-red-800">* </span>Required
          </p>
          <form className="flex flex-col items-center gap-5 py-5">
            <div className="flex flex-col gap-2">
              <div className="px-5 py-2 rounded-2xl flex justify-between sm:flex-row flex-col sm:gap-20 gap-2">
                <label htmlFor="name">
                  Mobile Number:<span className="text-red-800">*</span>
                </label>
                <input
                  type="number"
                  id="mobile"
                  name="number"
                  placeholder="+91 99999-99999"
                  required
                  className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
                />
              </div>

              <div className="px-5 py-2 rounded-2xl flex justify-between sm:flex-row flex-col sm:gap-20 gap-2">
                <label htmlFor="email">
                  Date of Birth:<span className="text-red-800">*</span>
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  required
                  className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
                />
              </div>

              <div className="px-5 py-2 rounded-2xl flex justify-between sm:flex-row flex-col sm:gap-20 gap-2">
                <label htmlFor="password">
                  Gender:<span className="text-red-800">*</span>
                </label>
                <div className="flex gap-5">
                  <p>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value={"male"}
                      required
                      className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
                    />{" "}
                    Male{" "}
                  </p>
                  <p>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value={"female"}
                      required
                      className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
                    />{" "}
                    Female{" "}
                  </p>
                  <p>
                    <input
                      type="radio"
                      id="thirdgen"
                      name="gender"
                      value={"female"}
                      required
                      className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
                    />{" "}
                    Other{" "}
                  </p>
                </div>
              </div>

              <div className="px-5 py-2 rounded-2xl flex justify-between sm:flex-row flex-col sm:gap-20 gap-2">
                <label htmlFor="confirmPassword">
                  Address:<span className="text-red-800">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  required
                  className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
                />
              </div>
              <div className="text-center font-bold text-2xl py-5">
                <h2>Qualification</h2>
              </div>
              <div className="px-5 py-2 rounded-2xl flex justify-between sm:flex-row flex-col sm:gap-20 gap-2">
                <label htmlFor="confirmPassword">
                  Eduction:<span className="text-red-800">*</span>
                </label>
                <select
                  required
                  className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
                >
                  <option>Matriculation (10th)</option>
                  <option>Intermediate (12th)</option>
                  <option>Diploma </option>
                  <option>Graduation</option>
                  <option>Post Graduation</option>
                </select>
              </div>
              <div className="px-5 py-2 rounded-2xl flex justify-between sm:flex-row flex-col sm:gap-20 gap-2">
                <label htmlFor="confirmPassword">
                  Eduction Progress:<span className="text-red-800">*</span>
                </label>
                <select
                  required
                  className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
                >
                  <option>Pass Out</option>
                  <option>Pursuing</option>
                  <option>Await Result</option>
                </select>
              </div>
              <div className="px-5 py-2 rounded-2xl flex justify-between sm:flex-row flex-col sm:gap-20 gap-2">
                <label htmlFor="email">
                  Passing Year:<span className="text-red-800">*</span>
                </label>
                <input
                  type="number"
                  id="year"
                  placeholder="2025"
                  required
                  className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
                />
              </div>
            </div>
          </form>
          <div className="text-left">
            <p>
              <span>Note:</span> Basic Information helps you find relevant jobs
              near your City .
            </p>
          </div>
        </div>
        <div className="bg-[#008000] rounded-bl-xl rounded-br-xl w-full">
          <div className="flex justify-between items-center px-5 py-2">
            <div className="text-white">
              <Link href={"#"}>Skip</Link>
            </div>
            <div className="px-3 py-1 bg-white text-[#008000] rounded-xl">
              <Link href={"#"}>Next</Link>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
