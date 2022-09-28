import React, { useState } from "react"
import { AiFillFire } from "react-icons/ai"
import Router, { useRouter } from 'next/router'
import Tetris from "../Tetris"

const TestModals = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  // const [showSecondModal, setShowSecondModal] = useState(false);

  return (
    <div className="flex items-center justify-center mt-40 md:flex-col ">
      <div className="flex gap-5 ">
        <Tetris/>
        <button
          className="flex items-center justify-center h-12 gap-2 px-6 font-bold text-white bg-blue-600 rounded-md shadow outline-none active:bg-black hover:bg-black hover:shadow-lg focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open First Modal <AiFillFire className="text-xl" />
        </button>
        {/* <button
          className="flex items-center justify-center h-12 gap-2 px-6 font-bold text-gray-800 border border-blue-100 rounded-md outline-none hover:text-white active:bg-black hover:bg-black hover:shadow-lg focus:outline-none"
          type="button"
          onClick={() => setShowSecondModal(true)}
        >
          Open Second Modal <AiFillFire className="text-xl" />
        </button> */}
      </div>
      {showModal ? (
        <div className="flex flex-col items-center justify-center h-auto p-2 mt-10 rounded-lg shadow-xl w-72">
          
          <h2 className="mx-4 mt-2 text-base font-semibold text-center text-gray-400">
            May your life be filled with success and achievements.
            Congratulations!
          </h2>
          <button
            className="w-auto h-10 px-8 my-5 font-semibold text-white bg-blue-600 rounded-md shadow hover:shadow-lg"
            onClick={() => {setShowModal(false)
            Router.push("")
            }}
          >
            Close
          </button>
        </div>
      ) : null}

      {/* second modal
      {showSecondModal ? (
        <div className="flex flex-col items-center justify-center w-1/2 h-auto p-2 mt-10 rounded-lg shadow-xl">
          <Image src={Gift} width={100} height={100} objectFit="contain" />
          <h2 className="mx-4 mt-2 text-base font-semibold text-center text-gray-400">
            Hurry! Your USD 50,00 Gift Voucher is about to expire! Shop now the
            latest Summer-Trends.
          </h2>
          <div className="flex gap-5">
            <button
              className="w-auto h-10 px-8 my-5 font-semibold text-white bg-blue-600 rounded-md shadow hover:shadow-lg"
              onClick={() => setShowSecondModal(false)}
            >
              Claim Now
            </button>
            <button
              className="w-auto h-10 px-12 my-5 font-semibold text-red-600 border border-red-100 rounded-md hover:bg-red-700 hover:text-white hover:shadow-lg"
              onClick={() => setShowSecondModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      ) : null} */}
    </div>
  )
}

export default TestModals