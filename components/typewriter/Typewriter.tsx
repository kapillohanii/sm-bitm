'use client'
import { useState, useEffect } from 'react';
import { Container, Title, Text, Button } from '@mantine/core';


const useTypewriter = (text: string, speed = 80) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = -1;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};

interface TypewriterProps {
  text: string;
  speed?: number;
}


const Typewriter = ({ text, speed }: TypewriterProps) => {
  const displayText = useTypewriter(text, speed);

  return <Text
    component="span"
    inherit
    variant="gradient"
    gradient={{ from: 'pink', to: 'yellow' }}
  >
    {displayText}
  </Text>;
};

export default Typewriter;