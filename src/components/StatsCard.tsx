
interface StatsCardPropsType {
    number: number | string,
    label: string,
    description: string,
    className?: string
}

const StatsCard = ({
    number,
    label,
    description,
    className
}: StatsCardPropsType) => {
    return (
        <div className={`flex xl:flex-col flex-row-reverse xl:justify-end justify-center items-center gap-4 bg-red-50 text-[var(--primary-red)] rounded-4xl px-6 py-8 relative ${className}`}>
            <div className="xl:-rotate-90 xl:w-52 flex flex-col items-center gap-2 xl:absolute top-20">
                <h3 className="font-bold md:text-3xl text-xl">
                    {label}
                </h3>
                <p className="md:text-base text-sm font-medium">
                    {description}
                </p>
            </div>

            <h1 className="xl:text-[8rem] md:text-8xl sm:text-7xl text-6xl font-[PrimaryFont] xl:-mb-6">
                {number}
                <sup className="font-[Poppins] font-semibold">+</sup>
            </h1>
        </div>
    )
}

export default StatsCard