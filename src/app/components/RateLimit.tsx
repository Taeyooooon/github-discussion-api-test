import React from 'react';
import getRateLimit from '@/app/service/getRateLimit';

const RateLimit = async () => {
  const {
    rateLimit: { limit, cost, remaining, resetAt },
  } = await getRateLimit();

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
    timeZone: 'Asia/Seoul',
  };

  const resetDate = new Date(resetAt).toLocaleString('ko-kr', options);
  console.log('reset limit date : ', resetDate);

  return (
    <>
      <h2>Rate Limit </h2>
      <p>{`${remaining} / ${limit}`}</p>
      <p>ResetAt : {resetDate}</p>
    </>
  );
};
export default RateLimit;
