import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: 200,
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = ({ showModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {
        showModal && (
          <motion.div
            className="backdrop"
            initial="hidden"
            exit="hidden"
            animate="visible"
            variants={backdropVariants}
          >
            <motion.div
              className="modal"
              variants={modalVariants}
            >
              <p>
                Want to make another pizza
              </p>
              <Link to="/">
                <button>Start Again</button>
              </Link>
            </motion.div>
          </motion.div>
        )
      }
    </AnimatePresence>
  );
};

export default Modal;
