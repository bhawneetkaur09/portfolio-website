import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export const useTypewriter = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
}: UseTypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const typeCharacter = useCallback(() => {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      setDisplayedText(prev => prev.slice(0, -1));
      if (displayedText === '') {
        setIsDeleting(false);
        setWordIndex(prev => (prev + 1) % words.length);
      }
    } else {
      setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      if (displayedText === currentWord) {
        setIsWaiting(true);
        setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    }
  }, [words, wordIndex, isDeleting, displayedText, delayBetweenWords]);

  useEffect(() => {
    if (isWaiting) return;

    const timeout = setTimeout(
      typeCharacter,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    isWaiting,
    typeCharacter,
    deletingSpeed,
    typingSpeed,
  ]);

  return displayedText;
};
