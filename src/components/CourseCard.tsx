import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

interface CourseCardPropsType {
    number: number,
    label: string,
    description: string,
    href?: string,
    images?: string[];
    className?: string
}

const CourseCard = ({
    number,
    label,
    description,
    href,
    images,
    className
}: CourseCardPropsType) => {
    return (
        <div
            className={`flex flex-col items-center gap-12 bg-[var(--primary-red)] text-white rounded-4xl px-12 py-8 ${className}`}
        >
            {/* Link to the course */}
            {href &&
                <Link
                    className="flex items-center justify-end w-full gap-2 md:text-base sm:text-sm text-xs text-neutral-100"
                    to={`${href.toLowerCase().split(" ").join('')}`}
                >
                    View all Courses
                    <ArrowRight className="md:size-4.5 size-3.5" />
                </Link>
            }

            {/* Icons */}
            {images && images.length > 0 &&
                <div className="flex items-center justify-center md:gap-16 gap-10">
                    {images?.map((image, idx) => (
                        <img
                            className={`md:size-20 size-12 ${idx % 2 == 0 ? "rotate-[-10deg]" : "rotate-[5deg]"}`}
                            key={idx}
                            src={image}
                        />
                    ))}
                </div>
            }

            {/* Texts */}
            <div className="flex items-center justify-center xl:gap-18 gap-4 xl:mt-12 w-full">
                <h1 className="xl:-mb-6 xl:text-[8rem] md:text-8xl sm:text-7xl text-6xl font-[PrimaryFont] xl:w-44">
                    {number}
                    <sup className="font-[Poppins] font-semibold">+</sup>
                </h1>
                <div className="xl:w-72 xl:ml-6">
                    <h3 className="md:text-3xl sm:text-xl text-lg font-semibold -mt-4">
                        {label}
                    </h3>
                    <p className="w-full text-neutral-100 lg:text-base md:text-sm text-xs mt-2 break-words">
                        {description}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default CourseCard