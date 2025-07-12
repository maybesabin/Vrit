import { useEffect, useState } from "react";

const Task4 = () => {
    const ROWS = 9;
    const COLUMNS = 26;
    const TOTAL = ROWS * COLUMNS;

    const [pinkBoxes, setPinkBoxes] = useState<number[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newPink = Array.from({ length: 20 }, () =>
                Math.floor(Math.random() * TOTAL) //generates num between 0-TOTAL
            );
            setPinkBoxes(newPink);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen w-screen">
            <div
                className="grid h-full w-full"
                style={{
                    gridTemplateColumns: `repeat(${COLUMNS}, 1fr)`,
                    gridTemplateRows: `repeat(${ROWS}, 1fr)`,
                }}
            >
                {Array.from({ length: TOTAL }).map((_, idx) => (
                    <div
                        key={idx}
                        className={`border border-neutral-200 transition-colors duration-500 ${pinkBoxes.includes(idx) ? "bg-purple-800" : "bg-white"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Task4;
