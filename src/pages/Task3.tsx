import CourseCard from "../components/CourseCard"
import react from "../assets/react.png"
import pencil from "../assets/pencil.png"
import likeComment from "../assets/like-comment.png"
import vue from "../assets/vue.png"
import StatsCard from "../components/StatsCard"

const Task3 = () => {
    return (
        <div className="w-full xl:h-svh flex items-center justify-center">
            <div className="2xl:w-[75%] w-full 2xl:p-0 p-6">
                <h4 className="text-neutral-800 md:text-xl sm:text-lg text-base">
                    Explore our courses and master trending skills!
                </h4>
                <h2 className="text-[var(--primary-green)] font-bold md:text-4xl text-3xl tracking-tight mt-2">
                    <span className="text-black">Dive Into&nbsp;</span>
                    What's Hot Right Now! 🔥
                </h2>

                {/* Cards */}
                <div className="flex xl:flex-row flex-col gap-8 w-full mt-6">
                    <CourseCard
                        className=""
                        label="All Courses"
                        description="courses you're powering through right now"
                        number={23}
                        href="/"
                        images={[react, likeComment, vue, pencil]}
                    />
                    <StatsCard
                        number="05"
                        label="Upcoming Courses"
                        description="exciting new courses waiting to boost your skills"
                    />
                    <StatsCard
                        number="10"
                        label="Ongoing Courses"
                        description="currently happening-don't miss out on the action!"
                    />
                </div>
            </div>
        </div>
    )
}

export default Task3