import { ArrowRight } from "lucide-react"
import like from "../assets/like.gif"
import heart from "../assets/heart.gif"
import likes from "../assets/likes.gif"
import trophy from "../assets/trophy.gif"
import person1 from "../assets/person1.png"
import person2 from "../assets/person2.png"
import person3 from "../assets/person3.png"
import person4 from "../assets/person4.png"
import person5 from "../assets/person5.png"
import person6 from "../assets/person6.png"
import ImageCard from "../components/ImageCard"
import rickroll from "../assets/Rick Rolled (Short Version).mp4"

const Task1 = () => {
    type PopupType = "text" | "video";

    const imageCards: {
        position: string;
        src: string;
        alt: string;
        popup?: PopupType;
        videoSrc?: string;
    }[] = [
            {
                position: "top-0 right-1/6",
                src: person1,
                alt: "Person Selfie",
            },
            {
                position: "top-0 left-1/6",
                src: person2,
                alt: "Like gif",
                popup: "text"
            },
            {
                position: "top-[40%] -translate-y-[40%] -right-12",
                src: person3,
                alt: "Like gif"
            },
            {
                position: "top-1/2 -translate-y-1/2 -left-12",
                src: person4,
                alt: "Like gif",
            },
            {
                position: "bottom-0 left-1/6",
                src: person5,
                alt: "Like gif",
            },
            {
                position: "bottom-0 right-1/6",
                src: person6,
                alt: "Like gif",
                popup: "video",
                videoSrc: rickroll
            },
            {
                position: "top-0 left-1/2 -translate-x-1/2",
                src: like,
                alt: "Like gif",
            },
            {
                position: "bottom-4 -left-8",
                src: heart,
                alt: "Like gif",
            },
            {
                position: "bottom-10 -right-8",
                src: likes,
                alt: "Like gif",
            },
            {
                position: "bottom-0 left-1/2 -translate-x-1/2",
                src: trophy,
                alt: "Like gif",
            },
        ];

    return (
        <div className="h-svh w-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
                <h4 className="text-neutral-800 md:text-xl sm:text-lg text-base">
                    Hear How They Level Up Their Game!
                </h4>
                <h2 className="font-bold md:text-3xl text-2xl tracking-tight mt-2 text-center w-full">
                    Skills&nbsp;
                    <span className="text-[var(--primary-green)]">Masters&nbsp;</span>
                    Unite! 🤝
                </h2>
                <button className="flex items-center gap-1 mt-2 cursor-pointer group">
                    <span className="font-medium">View all Testimonials</span>
                    <ArrowRight className="md:size-4.5 size-3.5 group-hover:ml-1" />
                </button>
            </div>

            {/* Images */}
            <div className="group cursor-pointer flex items-center gap-2 h-[350px] w-[500px] hover:h-[60svh] hover:w-[50%] transition-all duration-300 ease-in-out absolute rounded-full">
                <div className="relative w-full h-full parent">
                    {imageCards.map((item, idx) => (
                        <ImageCard
                            videoSrc={item.videoSrc}
                            popup={item.popup}
                            key={idx}
                            alt={item.alt}
                            image={item.src}
                            className={`${item.position} ${idx % 2 == 0 ? "float-animation1" : "float-animation2"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Task1