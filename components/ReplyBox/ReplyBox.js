import React from "react";
import Image from "next/image";
import { currentUser } from "../../public/data.json";
const Button = ({ typeDesktop }) => {
  return (
    <button
      className={`${
        typeDesktop ? "hidden sm:flex" : "flex sm:hidden"
      } justify-center items-center space-x-2 font-medium bg-primary-moderate-blue px-2 py-1 rounded text-neutral-white`}
    >
      Send
    </button>
  );
};
const Avatar = ({ typeDesktop }) => {
  return (
    <div className={`${typeDesktop ? "hidden sm:flex" : "flex sm:hidden"}`}>
      <Image
        src={currentUser.image.png}
        width="32"
        height="32"
        objectFit="contain"
      />
    </div>
  );
};
const ReplyBox = ({ replyBoxValue = undefined, setReplyBoxValue = undefined }) => {
  return (
    <div className="bg-neutral-white rounded-xl p-5 text-base space-y-2 sm:space-y-0">
      <div className="flex sm:space-x-4 items-start">
        <Avatar typeDesktop={true} />
        <textarea
          placeholder="Add a comment..."
          className="flex-1 border-2 p-2 focus:border-primary-moderate-blue focus:outline-none rounded-xl text-neutral-grayish-blue"
          value={replyBoxValue === undefined ? null:replyBoxValue}
          onChange={(e) => setReplyBoxValue !== undefined ? setReplyBoxValue(e.target.value):null}
        />
        <Button typeDesktop={true} />
      </div>
      <div className="flex justify-between items-center">
        <Avatar typeDesktop={false} />
        <Button typeDesktop={false} />
      </div>
    </div>
  );
};
export default ReplyBox;
