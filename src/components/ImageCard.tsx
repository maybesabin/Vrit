interface ImageCardPropsType {
    className?: string;
    image: string | any;
    alt: string;
    popup?: "text" | "video",
    videoSrc?: string | any;
}

const ImageCard = ({
    className,
    videoSrc,
    image,
    alt,
    popup
}: ImageCardPropsType) => {

    const animationClass = "transition-all duration-300 invisible scale-0 blur-md peer-hover:visible peer-hover:scale-100 peer-hover:blur-none"

    return (
        <div className={`absolute ${className} ${popup && "hover:bg-green-200 hover:shadow-lg hover:shadow-green-500/50 p-1 rounded-4xl transition-all"}`}>
            <div className="relative">
                <img
                    className="size-24 object-cover rounded-[30px] peer"
                    src={image}
                    alt={alt}
                />

                {/* Text Popup */}
                {popup === "text" && (
                    <>
                        <div className={`absolute -bottom-36 left-1/2 -translate-x-1/2 bg-white text-[10px] rounded-md w-80 shadow-lg p-4 ${animationClass}`}>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero maxime quidem officiis voluptatibus voluptatem, expedita a reprehenderit mollitia commodi odit quos beatae voluptate dignissimos enim repellat aliquid ab, iure iusto, alias exercitationem cupiditate officia possimus?
                            </p>
                            <div className="w-full text-end text-[10px]">
                                <span className="font-medium">Rajesh Dhakal</span>
                                <h6> Digital Marketing Student</h6>
                            </div>
                        </div>


                        <div style={{
                            width: 0,
                            height: 0,
                            borderLeft: "20px solid transparent",
                            borderRight: "20px solid transparent",
                            borderBottom: "20px solid white",
                        }} className={`size-6 absolute -bottom-0 left-1/2 -translate-x-1/2 ${animationClass}`} />
                    </>
                )}

                {/* Video Popup */}
                {popup === "video" && (
                    <div className={`w-52 absolute -top-[19rem] left-1/2 -translate-x-1/2 ${animationClass}`}>
                        <video
                            className={`h-72 object-cover shadow-lg border border-neutral-100 bg-white rounded-4xl p-2`}
                            autoPlay
                            muted
                            loop
                            src={videoSrc}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageCard