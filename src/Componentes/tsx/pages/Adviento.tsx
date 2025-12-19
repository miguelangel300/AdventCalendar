import React, { useState } from "react";
import '../../css/AdvientoC.css';

const Adviento: React.FC = () => {
    const [gifts, setGifts] = useState<ItemGift[]>(initialGifts);
    const [confettiIndex, setConfettiIndex] = useState<number | null>(null);
    const [shakingIndex, setShakingIndex] = useState<number | null>(null);
    const handleGiftClick = (index: number) => {
        const today = new Date().getDate();

        setGifts(prev => {
            const gift = prev[index];
            const updated = gift.readyOpen(today);

            if (!updated.readyOpened) {
                setShakingIndex(index);
                setTimeout(() => setShakingIndex(null), 400);
                return prev;
            }

            const clicked = updated.clickToOpen();

            if (clicked.opened) {
                setConfettiIndex(index);
                setTimeout(() => setConfettiIndex(null), 1200);
            }

            return prev.map((g, i) =>
                i === index ? clicked : g
            );
        });
    };




    return (
        <div className="relative h-screen overflow-hidden">
            <img className="absolute inset-0 object-cover w-full h-full" src="/files/adviento/bg_arbol.jpg" alt="" />
            <div className="absolute inset-0 bg-black opacity-5"></div>
            <div className="relative z-10 h-screen p-4 overflow-y-auto">
                <h1 className="justify-center p-4 m-4 mb-10 text-4xl font-bold text-center text-white shadow-transparent-lg bg-gradient-to-r from-sky-400/5 via-blue-700/90 to-sky-400/1">
                    Calendario de Adviento
                </h1>
                <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {gifts.map((gift, i) => (
                        <div
                            key={gift.day}
                            className={`justify-center text-center  `}
                            onClick={() => handleGiftClick(i)}
                        >
                            <div
                                className={`relative flex items-center justify-center w-full h-full ${gift.opened
                                    ? ""
                                    : shakingIndex === i
                                        ? "vibrate-stop"
                                        : gift.clicks === 1
                                            ? "gift-crack-1"
                                            : gift.clicks === 2
                                                ? "gift-crack-2"
                                                : "vibrate-infinite"
                                    }`}
                            >
                                {confettiIndex === i && (
                                    <div className="confetti-container">
                                        {Array.from({ length: 25 }).map((_, j) => (
                                            <span key={j} className="confetti-piece" />
                                        ))}
                                    </div>
                                )}


                                <img
                                    src={gift.image}
                                    alt={`Día ${gift.day}`}
                                    className="object-contain  p-2 w-full max-w-[200px]"
                                />

                                {!gift.opened && (
                                    <div className="absolute inset-0 flex items-end justify-center mt-8 pointer-events-none">
                                        <span
                                            className={`text-4xl font-bold drop-shadow-lg ${gift.readyOpened ? "text-yellow-400" : "text-white"
                                                }`}
                                        >
                                            {gift.day}
                                        </span>
                                    </div>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Adviento;

export class ItemGift {
    constructor(
        public day: number,
        public image: string,
        public readyOpened: boolean = false,
        public opened: boolean = false,
        public clicks: number = 0
    ) { }

    clickToOpen(): ItemGift {
        if (!this.readyOpened || this.opened) return this;

        const newClicks = this.clicks + 1;

        if (newClicks >= 3) {
            return new ItemGift(
                this.day,
                `/files/adviento/meme${this.day}.png`,
                true,
                true,
                3
            );
        }

        return new ItemGift(
            this.day,
            this.image,
            true,
            false,
            newClicks
        );
    }

    readyOpen(currentDay: number): ItemGift {
        if (currentDay >= this.day && !this.opened) {

            const number = Math.floor(Math.random() * 7) + 1;
            return new ItemGift(
                this.day,
                `/files/adviento/regalo${number}.png`,
                true,
                false,
                this.clicks
            );
        }
        return this;
    }
}


const initialGifts: ItemGift[] = Array.from(
    { length: 24 },
    (_, i) => new ItemGift(i + 1, "/files/adviento/regalo_bloqueado.png")
);
