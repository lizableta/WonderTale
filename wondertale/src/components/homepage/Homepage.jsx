import './homepage.scss';
import { motion } from 'framer-motion';


const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: { 
            duration: 2,
            repeat: Infinity
        },
    },
};

const imageVariants = {
    initial: {
        scale: 1,
    },
    animate: {
        scale: 0.5,
        rotate: 360,
        transition: {
            duration: 10,
            repeat: Infinity,
            ease: "linear"
        },
    },
};

const Homepage = () => {
    return (
        <div className='profil'>
            <div className="wrapper">
                <motion.div className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Welcome to WonderTale!</motion.h2>
                    <motion.h5 variants={textVariants}>We bring you a world of fantasy and adventure through our curated collection of books.</motion.h5>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>See the latest book</motion.button>
                        <motion.button variants={textVariants}><a href='#Contact'>Contact</a></motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src='scroll.png' />
                </motion.div>
            </div>
            
            <div className="imageContainer">
                <motion.img 
                    src="700.jpg" 
                    alt="" 
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                />
            </div>
        </div>
    );
}

export default Homepage;
