'use client'

import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Headers from '../../components/Header/Header'
import TodayWorkout from '@/components/TodayWorkoutProps/TodayWorkoutProps'
import DayGrid from '@/components/DayGrid/DayGrid'


const Workout = () => {

    // const days = Array.from({ length: 30 }, (_, i) => ({
    //     day: i + 1,
    //     title: i % 2 === 0 ? "Push" : "Core",
    //     duration: "25 min",
    //     status:
    //         i < 5 ? "completed" :
    //             i === 5 ? "active" :
    //                 "locked",
    // }));

    const days = Array.from({ length: 30 }, (_, i) => ({
        day: i + 1,
        status:
            i < 5 ? "completed" :
                i === 5 ? "active" :
                    "locked",
    }));



    return (
        <div className='h-[150vh] bg-[#0a0a0a]'>
            <Headers />

            <div className='flex justify-center items-center p-10'>
                <h1 className='text-4xl font-semibold text-[#fff]'>28 days Workout Plan</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[50%]'>
                    <ProgressBar value={5} label='Progress' />
                </div>
                <div className='w-[30%] hidden'>
                    <TodayWorkout
                        day={7}
                        title="Core Strength"
                        duration="25 min"
                        difficulty="Medium"
                        exercises={[
                            "Crunches",
                            "Plank",
                            "Leg Raises",
                            "Russian Twists",
                        ]}
                    />
                </div>
                <div className='w-full flex justify-center py-20  items-center'>
                    <DayGrid
                        day={1}
                        status='completed'
                    />
                </div>
            </div>

        </div>
    )
}



export default Workout