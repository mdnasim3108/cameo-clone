import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import favoriteStarProfile from "../../../assets/favoriteStarProfile.jpg"
import Image from "next/image";
export default function CameoCard() {
    return <div className="h-[370px] shrink-0 mr-3 rounded-lg cursor-pointer">

        <div className="h-[50%] bg-gradient-to-t from-black to-transparent relative rounded-lg">

            {/* <Image src={favoriteStarProfile} alt="Profile" width={210} className="object-cover" /> */}

            <img src="/favoriteStarProfile.jpg" className="w-[210px] h-full rounded-lg"/>

            <div className="h-full w-[210px] bg-gradient-to-t from-black to-transparent absolute top-0"/>

        </div>

        <div className="h-[50%] flex flex-col justify-between bg-gradient-to-b from-black to-[rgb(196,180,170)]  rounded-b-lg">

            <div className="text-center m-auto w-[71.43%]">
                <h2 className="text-2xl font-bold">ISLAND BOYS 🏝️</h2>
                <p className="text-white/80 text-sm text-center">Rappers</p>
            </div>

            <div className="flex items-center justify-between px-2 h-[52px] bg-black/75 opacity-[0.7] ">
                        <span className="text-lg font-semibold">$75+</span>
                        <div className="flex items-center gap-1">
                            <FaStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">4.79</span>
                        </div>
            </div>
            

        </div>

    </div>
}