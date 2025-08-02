import Image from "next/image"
export default function Occasion(){
    return <div className="rounded  shrink-0 cursor-pointer relative mr-4">
            <Image src="/assets/birthday.jpg" width={280} height={200} alt="birthdayImage" className="rounded-2xl opacity-[0.5]"/>
            <div className="absolute top-5 left-5">
                <p className="text-[14px] font-semibold">Personalized videos for</p>
                <p className="font-bold mt-3 sm:text-[24px] text-[20px]">Birthdays</p>
            </div>
    </div>
}