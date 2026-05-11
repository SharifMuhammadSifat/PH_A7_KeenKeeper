import Image from "next/image";
import Navbar from "../Components/Navbar/Navbar";
import { GoPlus } from "react-icons/go";
import friendCard from "../Components/friendCard/Friendcard";
import Friendcard from "../Components/friendCard/Friendcard";

export default async function Home() {

  const res = await fetch("http://localhost:3000/friends.json")
  const friends = await res.json();
  
  const totalFriends = friends.length;
  const onTrackFriends = friends.filter(friend => friend.status === "on-track").length;
  const needAttentionFriends = totalFriends - onTrackFriends;
   

  

  return (
    <section className="px-61.25 py-20 bg-[#F8FAFC]">
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

      <div className="grid grid-cols-4 gap-6">
         <div className="p-8 mt-12 bg-white rounded-lg shadow-md flex flex-col items-center gap-2">
          <h1 className="font-semibold text-[32px] text-[#244D3F]">{totalFriends}</h1> <p className=" text-center text-[#64748B] font-normal text-[18px]">Total Friends</p>
        </div>
        <div className="p-8 mt-12 bg-white rounded-lg shadow-md flex flex-col items-center gap-2">
          <h1 className="font-semibold text-[32px] text-[#244D3F]">{onTrackFriends}</h1> <p className=" text-center text-[#64748B] font-normal text-[18px]">On Track Friends</p>
        </div>
        <div className="p-8 mt-12 bg-white rounded-lg shadow-md flex flex-col items-center gap-2">
          <h1 className="font-semibold text-[32px] text-[#244D3F]">{needAttentionFriends}</h1> <p className=" text-center text-[#64748B] font-normal text-[18px]" >Need Attention Friends</p>
        </div>
        <div className="p-8 mt-12 bg-white rounded-lg shadow-md flex flex-col items-center gap-2">
          <h1 className="font-semibold text-[32px] text-[#244D3F]">12</h1> <p className=" text-center text-[#64748B] font-normal text-[18px ]">Interactions this month</p>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <Friendcard key={friend.id} friend={friend} />
        ))}
      </div>

    </section>
  );
}
