import { useState, useEffect } from 'react';

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchCategories = async () => {
      try {
        // Simulated API response
        const mockCategories = [
          {
            id: 1,
            name: "Saúde",
            websiteCount: 5,
            compliance: 85
          },
          {
            id: 2,
            name: "Educação",
            websiteCount: 8,
            compliance: 92
          },
          {
            id: 3,
            name: "Finanças",
            websiteCount: 12,
            compliance: 78
          }
        ];
        
        setCategories(mockCategories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading };
}; 