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
        <div className="bg-[#008000] xl:px-10 px-6 py-1.5"></div>
        <div className="bg-[#008000] text-white px-5 py-2 rounded-2xl ">
          <p>Job Field*</p>
        </div>
        <div className="bg-[#008000] xl:px-10 px-6 py-1.5"></div>
        <div className="bg-[#008000] text-white px-5 py-2 rounded-2xl ">
          <p>Complete</p>
        </div>
      </div>
    </>
  );
}

export function SignUpForm() {
  return (
    <>
      <div className="w-[85%] m-auto ">
        <div className="w-[100%] mx-auto my-10 items-center mt-10 border-2 border-[#008000] p-5">
          <p className="text-end">
            <span className="text-red-800">* </span>Required
          </p>
          <form className="max-lg:full lg:w-[60%] m-auto flex flex-col items-center gap-5">
            <h2>New Registration Form</h2>
            <div className="flex flex-col items-end gap-2">
              <div className="px-5 py-2 rounded-2xl flex sm:flex-row flex-col sm:gap-20 gap-2">
                <label htmlFor="name">
                  Name:<span className="text-red-800">* </span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required={true}
                  className="sm:px-5 px-3 py-2 bg-green-700 text-white rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="px-5 py-2 rounded-2xl flex sm:flex-row flex-col sm:gap-20 gap-2">
                <label>
                  Email Id: <span className="text-red-800">* </span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email Id"
                  required
                  className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
                />
              </div>
              <div className="px-5 py-2 rounded-2xl flex sm:flex-row flex-col sm:gap-20 gap-2">
                <label>
                  Create Password: <span className="text-red-800">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                  required
                  className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
                />
              </div>
              <div className="px-5 py-2 rounded-2xl flex sm:flex-row flex-col sm:gap-20 gap-2">
                <label>
                  Confirm Password: <span className="text-red-800">*</span>
                </label>
                <input
                  type="password"
                  id="confirm-pass"
                  placeholder="Re-enter Password"
                  required
                  className="sm:px-5 px-3 py-2 bg-[#008000] text-white rounded-2xl"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 my-5 items-center">
              <button className="sm:text-2xl text-xl sm:px-10 px-5 py-2 rounded-2xl text-white bg-[#008000] cursor-pointer">
                Sign Up
              </button>
              <p>
                Already have account?{" "}
                <Link href="#" className="text-[#008000] font-bold">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
