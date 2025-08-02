import CameoCard from "./CameoCard"
export default function TopCameos() {
  return <div className="mt-[3rem]">

    <p className="font-bold text-[20px]">Top 10 on Cameo</p>

    <div className="mt-5 flex justify-between overflow-x-scroll">

      <CameoCard />
      <CameoCard />
      <CameoCard />
      <CameoCard />
      <CameoCard />
      <CameoCard />
      <CameoCard />
      
      
    </div>
  </div>
}