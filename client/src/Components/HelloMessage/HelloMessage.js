import React from 'react';
import Typical from 'react-typical';

const HelloMessage = () => {

    return (
        <Typical
            steps={[
            'Hello, My name is Ryan Drachenberg 👨‍💻', 1000,
            'I am a Blockchain Engineer', 1000, 
            'I am "Google-fu" certified', 1000, 
            'I am eternally optimistic! 😎', 1000, 
            'I am a believer that the future is in development', 1000, 
            'I love to build awesome applications 🏗️', 1000,
            "Let's build something great together!🚀", 1000]} 
            loop={Infinity}
            wrapper='h1'
        />
    )
}

export default HelloMessage
