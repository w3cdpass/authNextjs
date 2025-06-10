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
    <div className="w-[85%] m-auto">
      <fieldset className="border-2 rounded-2xl lg:w-[60%] mx-auto my-10 border-[#008000]">
        <legend className="text-center font-bold text-2xl">
          Check Your Details is Correct
        </legend>
        <div className="flex flex-col px-40 gap-5 py-5">
            <p>Name:</p>
            <p>Your Email id:</p>
            <p>Mobile Number:</p>
            <p>Date of Birth:</p>
            <p>Gender:</p>
            <p>Address:</p>
            <p>Education:</p>
            <p>Education Status:</p>
            <p>Passing Year:</p>
            <p>Appled Job:</p>
            <p>Experienced:</p>
        </div>
        <div className="px-4"><label htmlFor="readcheck">I Understand that the information provided above is correct and complete.</label></div>
        <div className="bg-[#008000] rounded-bl-xl rounded-br-xl w-full">
          <div className="flex justify-between items-center px-5 py-2">
            <div className="text-white">
              <p><input type="checkbox" id="readcheck" required /></p>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1 bg-white text-[#008000] rounded-xl">
                <button type="submit">
                  <Link href={""}>Prev</Link>
                </button>
              </div>
              <div className="px-3 py-1 bg-white text-[#008000] rounded-xl">
                <button type="sumbit">
                  <Link href={""}>Final Sumbit</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
