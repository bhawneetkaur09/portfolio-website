import { useEffect } from 'react';

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | Bhawneet Kaur`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
