import React from 'react';
import Image from 'next/image';

export const VoteCounter = ({score, setScore,typeDesktop}) => {
  return <div className={" sm:w-1/4 text-primary-moderate-blue font-semibold flex justify-center items-center"}>
  <div className={` ${typeDesktop ? "hidden sm:flex sm:flex-col space-x-0":"flex sm:hidden space-x-3"}  justify-center items-center bg-primary-moderate-blue bg-opacity-10 rounded-2xl p-3`}>
    <button onClick={() => setScore(score + 1)} aria-label="plus">
      {" "}
      <Image
        src="/images/icon-plus.svg"
        width="16"
        height="16"
        objectFit="contain"
        alt="plus"
      />
    </button>
    <span>{score}</span>
    <button onClick={() => (score > 0 ? setScore(score - 1) : null)} aria-label="minus">
      <Image src="/images/icon-minus.svg" width="16" height="4" alt="minus"/>
    </button>
  </div>
</div>;
};
