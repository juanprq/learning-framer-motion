import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {
        showModal && (
          <motion.div
            className="backdrop"
            initial="hidden"
            animate={"visible"}
            variants={backdropVariants}
          >
          </motion.div>
        )
      }
    </AnimatePresence>
  );
};

export default Modal;
