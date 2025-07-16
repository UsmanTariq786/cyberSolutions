import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import LandingPage from "@/components/landinpage"


export default function Home() {
  return (
   <div>
        <Navbar />
        <LandingPage />
      </div>
  );
}
