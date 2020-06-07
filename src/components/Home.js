import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
    transition: {
      // yoyo: 10, // it will repeat the animatio 5 times, using 10 keyframes
      yoyo: Infinity, // if you want the animation to last forever
      duration: 0.3 // you can control de duration of the animation
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 1.5,
        duration: 1.5,
      }}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;
