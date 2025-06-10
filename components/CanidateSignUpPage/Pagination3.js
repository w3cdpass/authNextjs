"use client";
import Link from "next/link";

export default function CandidateSignUpPagination() {
  return (
    <>

      <div className="max-lg:hidden w-[60%] flex justify-center m-auto items-center mt-10">
        <div className="bg-[#008000] text-white px-5 py-2 rounded-2xl">
          <p>Sign Up*</p>
        </div>
        <div className="bg-[#008000] xl:px-10 px-6 py-1.5"></div>
        <div className="bg-[#008000] text-white px-5 py-2 rounded-2xl">
          <p>Basic Info*</p>
        </div>
        <div className="bg-[#008000] xl:px-10 px-6 py-1.5"></div>
        <div className="bg-[#008000] text-white px-5 py-2 rounded-2xl">
          <p>Job Field*</p>
        </div>
        <div className="bg-[#737d7338] xl:px-10 px-6 py-1.5"></div>
        <div className="bg-[#737d7338] text-white px-5 py-2 rounded-2xl">
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
        <div className="flex flex-col items-center gap-5 py-5">
          <div className="p-5">
            <div className="pb-5">
              <p>What kind of work would you like to do?</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="px-5 py-2 rounded-2xl flex items-center justify-between sm:flex-row flex-col sm:gap-20 gap-2">
                <label htmlFor="jobtext">
                  {"I'm"} Locking for:<span className="text-red-800">*</span>
                </label>
                <input
                  type="text"
                  id="jobtext"
                  name="text"
                  placeholder="Eg. Computer Operator, Data Entry"
                  className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
                />
              </div>
              <div className="px-5 py-2 rounded-2xl flex items-center justify-between sm:flex-row flex-col sm:gap-20 gap-2">
                <label>
                  Are you Experienced:
                  <span className="text-red-800">*</span>
                </label>
                <div className="flex gap-5">
                  <p>
                    <input
                      type="radio"
                      id="yes"
                      name="option"
                      value={"Yes"}
                      className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
                    />{" "}
                    Yes
                  </p>
                  <p>
                    <input
                      type="radio"
                      id="no"
                      name="option"
                      value={"No"}
                      className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
                    />{" "}
                    No
                  </p>
                </div>
              </div>
              <div className="px-5 py-2 rounded-2xl flex items-center justify-between sm:flex-row flex-col sm:gap-20 gap-2">
                <label htmlFor="file">
                  Uplode Resume:<span className="text-red-800">*</span>
                </label>
                <input
                  type="file"
                  id="file"
                  className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#008000] rounded-bl-xl rounded-br-xl w-full">
          <div className="flex justify-between items-center px-5 py-2">
            <div className="text-white">
              <Link href={"#"}>Skip</Link>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1 bg-white text-[#008000] rounded-xl">
                <button>
                  <Link href={""}>Prev</Link>
                </button>
              </div>
              <div className="px-3 py-1 bg-white text-[#008000] rounded-xl">
                <button>
                  <Link href={""}>Next</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
