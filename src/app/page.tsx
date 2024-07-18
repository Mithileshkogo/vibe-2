import { Navbar } from "@/components/Navbar/navbar";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col items-start justify-start bg-white relative overflow-x-hidden">
        <Sidebar />
        <div className="grow lg:pt-[110px] lg:ml-[90px] ml-0 px-[20px] pt-[100px] min-h-screen">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
      </main>
    </>
  );
}
