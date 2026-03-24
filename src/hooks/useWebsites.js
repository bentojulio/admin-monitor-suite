import { useState, useEffect } from 'react';

export const useWebsites = () => {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchWebsites = async () => {
      try {
        // Mock data
        const mockWebsites = [
          {
            id: 1,
            name: 'Website 1',
            pages: [
              { id: 1, name: 'Page 1' },
              { id: 2, name: 'Page 2' }
            ]
          },
          {
            id: 2,
            name: 'Website 2',
            pages: [
              { id: 3, name: 'Page 3' },
              { id: 4, name: 'Page 4' }
            ]
          }
        ];

        setWebsites(mockWebsites);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching websites:', error);
        setLoading(false);
      }
    };

    fetchWebsites();
  }, []);

  return { websites, loading };
}; 