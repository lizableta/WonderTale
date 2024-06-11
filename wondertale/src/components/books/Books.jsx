import { useRef, useState } from "react";
import "./books.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Kate and Magic Deer",
        img: "book1.jpg",
        desc: `Written by Bertie and Read by Natasha. Katie, a young witch, lives an ordinary life with a magical twist. One evening, she visits her friend Paul, whose family has a hidden magical heritage. That night, Katie dreams of a majestic stag with golden antlers, only to find him in her garden the next morning. Join Katie as she befriends this enchanting deer and unravels the mystery of his magical appearance.`,
        audiobook: "audiobook.mp3",
    },
    {
        id: 2,
        title: "Island of Infinity",
        img: "book2.jpg",
        desc: `We’ve known the creators for years and years, and we’ve long carried their adventures about a dog called Rockford on our website. Their audio has a lot in common with ours, and we are fans, and so are many of our listeners. Now they have a new podcast called Kids Stories, Science and Secrets and our friend, Matthew Sweetapple is here to explain more.`,
        audiobook: "audiobook2.mp3",
    },
    {
        id: 3,
        title: "Helen and the Trojan War",
        img: "book3.jpg",
        desc: `In Greek mythology, Helen, the most beautiful woman and wife of Menelaus, king of Sparta, eloped with Paris, prince of Troy, leading to the ten-year Trojan War. Christopher Marlowe called her "the face that launched a thousand ships."`,
        audiobook: "audiobook3.mp3",
    },
    {
        id: 4,
        title: "The Horned Woman",
        img: "book4.jpg",
        desc:`A rich woman stayed up late carding wool when twelve horned witches entered her home. They cast a spell and demanded she make a cake. A spirit helped her by instructing her to patch a sieve and shout, "The mountain of Fenian women and the sky over it are all on fire!" The witches fled. She followed the spirit’s advice to keep them from returning. In the morning, she found a witch’s cape, kept as a memento for centuries.`,
        audiobook: "audiobook4.mp3",
    },
    {
        id: 5,
        title: "The Princess and the Pea",
        img: "book5.jpg",
        desc: `Once upon a time, a prince sought a true princess to marry. He traveled the world but couldn't find one. One stormy night, a drenched princess arrived at the palace claiming to be a true princess. To test her, the queen placed a pea under twenty mattresses and quilts for her to sleep on. In the morning, the princess complained of a terrible night’s sleep, feeling the pea.  `,
        audiobook: "audiobook5.mp3",
    },
    {
        id: 6,
        title: "Solveig's Song",
        img: "book5.webp",
        desc: `Enjoy our Peer Gynt series, based on Norway's famous fairy tale. Jana sings the haunting song of Solveig, accompanied by Grieg's original music, written for Ibsen's dramatic play about Peer Gynt. Our version, sung by Jana with guitar and music production by Bertie, offers a unique take on the operatic original.`,
        audiobook: "audiobook6.mp3",
    },
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
    });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(item.audiobook));

    const handleTogglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        {item.audiobook && (
                            <div className="audio-controls">
                                <button onClick={handleTogglePlay}>
                                    {isPlaying ? "Pause Audiobook" : "Play Audiobook"}
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Books = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Our latest books</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Books;