import React from "react";
import Image from "next/image";

const ReplyBtn = ({setReplyBox, isReplyBox, typeDesktop}) => {
  return (
    <button
      onClick={() => setReplyBox(!isReplyBox)}
      className={`${typeDesktop?"hidden sm:flex":"flex sm:hidden"} justify-center items-center space-x-2 font-medium hover:bg-primary-moderate-blue active:bg-primary-moderate-blue active:bg-opacity-20 active:scale-95 transition hover:bg-opacity-10 px-2 py-1 rounded text-primary-moderate-blue`}
    >
      <Image src="/images/icon-reply.svg" width="16" height="16" />
      <span>Reply</span>
    </button>
  );
};
export default ReplyBtn;
