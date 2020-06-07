import React, { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
      // we want to complete thise animation before any children animation
      when: 'beforeChildren',
      mass: 0.4, // how difficult is to move this element
      damping: 8, // how to stop the motion
      staggerChildren: 0.4, // this allows the children animation to be subsequent to another
    },
  },
};

// we are going to use transition orquestaion in variants
const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  const [showTitle, setShowTitle] = useState(true);

  setTimeout(() => {
    setShowTitle(false);
  }, 4000);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2
        exit={{
          y: -1000,
        }}
      >
        Thank you for your order :)
      </h2>
      <motion.p
        variants={childVariants}
      >
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div
        variants={childVariants}
      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;
