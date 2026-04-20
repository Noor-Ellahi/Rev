import { FaLock } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiBiceps } from "react-icons/gi";


type Day = {
    day: number;
    //   title?: string;
    //   duration?: string;
    status?: "locked" | "active" | "completed";
};

// type DayGridProps = {
//   days: Day[];
//   onSelectDay: (day: Day) => void;
// }; { days, onSelectDay }: DayGridProps

const DayGrid = ({ day, status }: Day) => {
    return (

        <div className="w-[72%] flex grid grid-cols-7">

            {/* <div className="relative h-50 bg-blue-500 w-45 p-4 rounded-2xl bg-white/5">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl text-white/60 font-bold">Day 1</h3>
                        <span className="text-sm text-[#991B1B] hidden">{'(Completed)'}</span>
                    </div>
                    <div className="text-sm pt-2 flex flex-col gap-2 text-white/30 px-2">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#991B1B]" />{"Workout"}</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#991B1B]" />{"Treadmill"} </li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#991B1B]" />{"20 min"}</li>
                    </div>

                    <div className="absolute top-4 right-4 flex hidden items-center justify-center bg-black/40 rounded-2xl">
                        <FaLock className="text-sm text-white/50" />
                    </div>
                    <div className="w-full pt-5">
                        <button className="w-full text-white/50 border-1 border-[#991B1B] hover:border-[#EF4444] hover:bg-[#EF4444] transition duration-500 hover:text-white/100 rounded-sm py-1 ">
                            Start
                        </button>
                    </div>

                </div> */}
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28].map((item ,index) => {
                    return (
                        <div key={index} className="relative h-50 bg-blue-500 w-45 p-4 my-2 rounded-2xl bg-white/5">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl text-white/60 font-bold">Day {item}</h3>
                                <span className="text-sm text-[#991B1B] hidden">{'(Completed)'}</span>
                            </div>
                            <div className="text-sm pt-2 flex flex-col gap-2 text-white/30 px-2">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#991B1B]" />{"Workout"}</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#991B1B]" />{"Treadmill"} </li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#991B1B]" />{"20 min"}</li>
                            </div>

                            <div className="absolute top-4 right-4 flex hidden items-center justify-center bg-black/40 rounded-2xl">
                                <FaLock className="text-sm text-white/50" />
                            </div>
                            <div className="w-full pt-5">
                                <button className="w-full text-white/50 border-1 border-[#991B1B] hover:border-[#EF4444] hover:bg-[#EF4444] transition duration-500 hover:text-white/100 rounded-sm py-1 ">
                                    Start
                                </button>
                            </div>

                        </div>
                    )
                })
            }
        </div>

    );
};

export default DayGrid;