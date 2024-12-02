import { motion } from 'framer-motion';
import React from 'react';

const FloatingComponent = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>
    );
};

export default FloatingComponent;
