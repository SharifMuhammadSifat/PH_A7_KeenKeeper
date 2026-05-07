import Image from "next/image";
import Navbar from "../Components/Navbar/Navbar";
import { GoPlus } from "react-icons/go";


export default function Home() {



  return (
    <section className="px-61.25 py-20">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 text-center">
          Friends to keep close in your life
        </h1>
        <p className="text-[16px] text-[#64748B] font-normal mb-8 text-center">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
          relationships that matter most.
        </p>
        <button className="w-fit bg-[#244D3F] text-white px-4 py-3 rounded-md hover:bg-[#1a3a2d] transition duration-300 flex items-center gap-2">
          <GoPlus /> Add a friend
        </button>
      </div>


    </section>
  );
}
