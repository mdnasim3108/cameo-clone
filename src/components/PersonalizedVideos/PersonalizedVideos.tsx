import FavoriteStarProfile from "./FavoriteStarProfile"
import Occasion from "./Occasion"
export default function PersonalizedVideos() {
    return <div className="mt-[3rem] flex flex-col justify-center">


        <p className="text-[28px] text-center">Personalized videos from your favorite stars
        </p>

        <div className=" mt-[2rem]  overflow-x-scroll flex justify-between">
            {
            Array.from({ length: 7 }, (_, i) => i + 1)
            .map(num=><FavoriteStarProfile key={num} label={`/assets/favoriteStarProfile${num}.avif`}/>)
            }

            <div className="cursor-pointer rounded-full border-2 shrink-0 w-[144px] h-[144px] flex justify-center items-center">
                    <p className="text-center underline">View All</p>
            </div>

        </div>

        <div className="mt-[5rem] ">

            <p className="text-[20px] text-left font-bold">Personalized videos for every occasion
            </p>

            <div className="mt-5 flex justify-between overflow-x-scroll">

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