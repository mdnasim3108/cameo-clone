import Image from "next/image";

type FavoriteStarProfileProps = {
  label: string;
};


export default function FavoriteStarProfile({ label }: FavoriteStarProfileProps) {
    return <div className="cursor-pointer shrink-0 mr-2">
        <div className="rounded-full border-2 relative sm:size-[144px] size-[104px]  cursor-pointer">
            <Image  src={label} fill alt="favoriteStarProfile" className="rounded-full" />
        </div>
        <p className="text-center mt-3 underline">Actors</p>
    </div>
}