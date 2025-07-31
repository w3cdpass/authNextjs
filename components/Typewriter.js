import React, { useState, useEffect } from 'react';

const Typewriter = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const textsToType = [
        "Find your Career",
        "Find Jobs in Tricity",
        "Jobs for Smart People",
        "Work n' Apply Smarter",
    ];

    useEffect(() => {
        const currentText = textsToType[loopNum % textsToType.length];

        let timeout;

        if (isDeleting) {
            timeout = setTimeout(() => {
                setText(prev => prev.substring(0, prev.length - 1));
                setTypingSpeed(50);
            }, typingSpeed);
        } else {
            timeout = setTimeout(() => {
                setText(prev => currentText.substring(0, prev.length + 1));
                setTypingSpeed(150);
            }, typingSpeed);
        }

        if (!isDeleting && text === currentText) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 1000);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setLoopNum(prev => prev + 1);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, loopNum, typingSpeed, textsToType]);

    return <span className='absolute -my-17 typewriter'>{text}</span>;
};

export default Typewriter;