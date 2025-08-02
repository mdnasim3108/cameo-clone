import Image from "next/image"
export default function Occasion() {
    return <div className="rounded sm:block inline-block  shrink-0 cursor-pointer relative sm:mr-4 sm:w-[290px] sm:h-[200px] min-w-[150px] min-h-[150px]">
        <div className="relative w-full h-full">
            <Image src="/assets/birthday.jpg" alt="birthdayImage" fill className="rounded-2xl opacity-[0.5]" style={{
                objectFit: "cover",
                objectPosition: "center",
            }} />
        </div>
        <div className="absolute top-5 left-5">
            <p className="text-[14px] font-semibold">
                <span className="hidden sm:inline">Personalized </span>videos for
            </p>            
            <p className="font-bold mt-3 sm:text-[24px] text-[20px]">Birthdays</p>
        </div>
    </div>
}