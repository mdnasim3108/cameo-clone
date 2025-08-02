import NavBar from "@/components/Navbar/Navbar"
import PersonalizedVideos from "@/components/PersonalizedVideos/PersonalizedVideos"
import TopCameos from "@/components/TopCameos/TopCameos"
export default function LandingPage() {
   return <div className="bg-black flex p-5 flex-col items-center w-full">

      <div className="xl:w-[1280px] w-full">

         <NavBar/>
         <PersonalizedVideos/>
         <TopCameos/>

      </div>
            
   </div>
}
