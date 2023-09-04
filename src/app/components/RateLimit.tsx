import React from 'react';
import getRateLimit from '@/app/service/getRateLimit';

const RateLimit = async () => {
  const {
    rateLimit: { limit, cost, remaining, resetAt },
  } = await getRateLimit();
  return (
    <>
      <h2>Rate Limit </h2>
      <p>{`${remaining} / ${limit}`}</p>
      <p>ResetAt : {resetAt}</p>
    </>
  );
};
export default RateLimit;
