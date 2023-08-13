import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRecoilState } from "recoil";
import DarkModeToggle from "../components/DarkModeToggle";
import SvgIcon from "../components/SvgIcon";
import { testState } from "../recoilState/recoilState";

const Home: NextPage = (): JSX.Element => {
  const [state, setState] = useRecoilState(testState);
  return (
    <div className="flex min-h-screen bg-violet-100  flex-col items-center justify-center py-2 ">
      <DarkModeToggle />
      <div className=" flex flex-col relative items-center border-y-2 border-y-red-500 py-4">
        <div>Recoil state: {state.toString()}</div>
        <div className=" text-red-500 text-5xl font-kufiM">PugaMuga</div>
        <div className=" text-white text-5xl font-nablaPixel bg-slate-900 px-4 py-2 my-2">
          PugaMuga
        </div>
        <div className=" text-red-500 text-5xl font-strongItalik">PugaMuga</div>
        <div className=" text-red-500 text-5xl font-lobster">PugaMuga</div>
        <div className=" absolute top-[-13px] right-[-21px] rotate-90 hover:rotate-0 tr-700">
          <SvgIcon onClick={() => {
            setState(!state)
          }}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
