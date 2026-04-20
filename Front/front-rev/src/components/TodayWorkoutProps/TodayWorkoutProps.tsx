type TodayWorkoutProps = {
    day: number;
    title: string;
    duration: string;
    difficulty: string;
    exercises: string[];
};

const TodayWorkout = ({
    day,
    title,
    duration,
    difficulty,
    exercises,
}: TodayWorkoutProps) => {
    return (
        <div className="w-full mt-6 border-[0.2px] border-[#991B1B] rounded-2xl text-white overflow-hidden shadow-lg">

            {/* HEADER */}
            <div className="bg-transparent p-5">
                <p className="text-sm opacity-80">TODAY’S WORKOUT</p>
                <h2 className="text-2xl font-bold">
                    Day {day} — {title}
                </h2>

                <div className="flex gap-4 mt-2 text-sm opacity-90">
                    <span>⏱ {duration}</span>
                    <span>🔥 {difficulty}</span>
                </div>
            </div>

            {/* BODY */}
            <div className="bg-black/80 p-5 space-y-3">

                <p className="text-white/60 text-sm">Exercises</p>

                <ul className="space-y-2">
                    {exercises.map((ex, i) => (
                        <li
                            key={i}
                            className="flex items-center gap-2 text-white/90"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                            {ex}
                        </li>
                    ))}
                </ul>

                {/* ACTION BUTTON */}
                <button className="w-full mt-4 py-3 rounded-xl border-1 border-[#991B1B] hover:bg-[#EF4444] duration-500 hover:opacity-90 transition">
                    Start Workout
                </button>

            </div>
        </div>
    );
};

export default TodayWorkout;