import { Star } from "lucide-react";

export default function RatingSummary() {
  const ratings = [
    { stars: 5, percent: 67 },
    { stars: 4, percent: 15 },
    { stars: 3, percent: 6 },
    { stars: 2, percent: 3 },
    { stars: 1, percent: 9 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* LEFT */}
      <div className="flex flex-col items-center justify-end ">
        <div className="flex flex-col items-start">
          <span className="text-[#020202] font-[600px] text-[24px]">Rating & Reviews</span>
          <span className="header-span block w-10  bg-[#BE968E] rounded-full text-[#BE968E]">.</span>
        </div>
        <div className="flex  items-baseline w-[200px] justify-center gap-2">
            <h2 className="flex items-end text-[#020202] font-[600] text-[120px]">4,5</h2>
            <span className="text-[#B0B0B0] font-[500px] text-[24px]">/5</span>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="flex flex-col gap-3">
        {ratings.map((rate) => (
          <div key={rate.stars} className="flex items-center gap-3">
            <Star size={20} className="text-[#BE968E] fill-[#BE968E]" />
            <span className="font-[500] font-poppins text-[20px] text-[#545454]">{rate.stars}</span>

            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#BE968E]"
                style={{ width: `${rate.percent}%` }}
              />
            </div>

            <span className="font-[500] font-poppins text-[20px] text-[#545454]">
              %{rate.percent}
            </span>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-center justify-center gap-[14px] ">
        <div className="flex flex-col items-center">
            <span className="font-[400] font-poppins text-[16px] text-[#545454]">Total Reviews</span>
            <h3 className="text-[60px] font-[600] text-[#020202] font-poppins">3.0k</h3>
        </div>
        
       <div className="h-[56px] w-[186px] flex justify-center items-center gap-[8px] bg-[#BE968E] rounded-[12px] hover:opacity-80 transition-opacity">
            <button className=" text-white  transition-colors font-[500] text-[16px] font-poppins ">
                Add Comment
            </button>
            <img
                src="/icons/chaticon.png"
                alt="chat icon"
                className="h-10 w-10 object-contain"
            />
        </div>


        
      </div>
    </div>
  );
}
