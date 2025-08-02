import FavoriteStarProfile from "./FavoriteStarProfile"
import Occasion from "./Occasion"
export default function PersonalizedVideos() {
    return <div className="mt-[3rem] flex flex-col justify-center">


        <p className="text-[28px] text-center tracking-wide font-[500]">Personalized videos from your favorite stars
        </p>

        <div className=" mt-[2rem]  overflow-x-scroll flex justify-between">
            {
                Array.from({ length: 7 }, (_, i) => i + 1)
                    .map(num => <FavoriteStarProfile key={num} label={`/assets/favoriteStarProfile${num}.avif`} />)
            }

            <div className="cursor-pointer rounded-full border-2 shrink-0 sm:size-[144px] size-[104px] flex justify-center items-center">
                <p className="text-center underline">View All</p>
            </div>

        </div>

        <div className="mt-[5rem] ">

            <p className="text-[20px] text-left font-bold">
                <span className="sm:inline hidden">Personalized videos </span> 
                <span className="sm:hidden inline">A video </span> 
                for every occasion
            </p>

            <div className="mt-5 sm:flex justify-between grid grid-cols-2 gap-3 overflow-x-scroll">
                <Occasion />
                <Occasion />
                <Occasion />
                <Occasion />
            </div>
            <div>

            </div>
        </div>


    </div>
}