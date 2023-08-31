'use client';
import getCategoryId from '@/app/service/getCategoryId';
import getRepositoryId from '@/app/service/getRepositoryId';
import React, { useEffect, useState } from 'react';
const Test = () => {
  const [userData, setUserData] = useState(null);
  getRepositoryId().then((r) => console.log('getRepositoryId : ', r));
  getCategoryId().then((r) => console.log('getCategoryId : ', r));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.github.com/user', {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`, // 여기에 실제 토큰을 넣으세요
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, []);
  return <></>;
};
export default Test;