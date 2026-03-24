import { useState, useEffect } from 'react';

export const useStatistics = () => {
  const [statistics, setStatistics] = useState({
    categoryPerformance: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchStatistics = async () => {
      try {
        // Simulated API response
        const mockStatistics = {
          categoryPerformance: [
            {
              pratices: "Alt text for images",
              praticesPerPage: 0.8,
              pages: 150,
              occurences: 120,
              level: "A"
            },
            {
              pratices: "Keyboard navigation",
              praticesPerPage: 0.9,
              pages: 150,
              occurences: 135,
              level: "AA"
            },
            {
              pratices: "Color contrast",
              praticesPerPage: 0.7,
              pages: 150,
              occurences: 105,
              level: "AAA"
            }
          ]
        };
        
        setStatistics(mockStatistics);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching statistics:', error);
        setLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  return { statistics, loading };
}; 