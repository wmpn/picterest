import React, { useEffect } from 'react';
import Storing from "../hooks/useStorage";
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setfile }) => {
    const { url, progress } = Storing(file);

    useEffect(() => {
        if (url) {
            setfile(null);
        }
    }, [url, setfile])

    return (
        <div className="progressbar-wrapper">
            <motion.div className="progress-bar"
                initial={{ width: 0 }}
                animate={{ width: progress + '%' }}>
            </motion.div>
        </div>
    );
}


export default ProgressBar;