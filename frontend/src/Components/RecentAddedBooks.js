import React, { useState, useEffect } from 'react';
import './RecentAddedBooks.css';

function RecentAddedBooks() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of the API you want to fetch data from
        const response = await fetch('http://localhost:4000/recentbooks');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        
        // Assuming the API response contains an object with a key 'books' containing an array of image URLs
        const linksArray = data.books || [];

        setPics(linksArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div className='recentaddedbooks-container'>
      <h className='recentbooks-title'>Recent Uploads</h>
      <div className='recentbooks'>
        <div className='images'>
          {pics.map((item, index) => (
            <img key={index} className='recent-book' src={item} alt='' />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentAddedBooks;
