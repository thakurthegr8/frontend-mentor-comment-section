import React from "react";
import Image from "next/image";
import ReplyBox from "../ReplyBox/ReplyBox";
import { VoteCounter } from "../VoteCounter/VoteCounter";
import ReplyBtn from "../ReplyBtn/ReplyBtn";
const Thread = ({ data }) => {
  const [score, setScore] = React.useState(data.score);
  const [isReplyBox, setReplyBox] = React.useState(false);
  const [replyBoxValue, setReplyBoxValue] = React.useState(
    `@${data.user.username} `
  );
  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-neutral-white rounded-xl p-5 text-base">
        <div className="flex sm:space-x-4 justify-center items-center">
          <VoteCounter score={score} setScore={setScore} typeDesktop={true} />
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4 items-center">
                <Image src={data.user.image.png} width="32" height="32" />
                <span className="font-medium">{data.user.username}</span>
                <span className="text-neutral-grayish-blue">
                  {data.createdAt}
                </span>
              </div>
              <ReplyBtn
                isReplyBox={isReplyBox}
                setReplyBox={setReplyBox}
                typeDesktop={true}
              />
            </div>
            <p className="text-neutral-grayish-blue font-normal">
              {data.replyingTo !== undefined && (
                <span className="text-primary-moderate-blue font-medium">
                  {`@${data.replyingTo} `}
                </span>
              )}
              {data.content}
            </p>
            <div className="flex justify-between items-center">
              <VoteCounter
                score={score}
                setScore={setScore}
                typeDesktop={false}
              />
              <ReplyBtn
                isReplyBox={isReplyBox}
                setReplyBox={setReplyBox}
                typeDesktop={false}
              />
            </div>
          </div>
        </div>
      </div>
      {isReplyBox && (
        <ReplyBox
          replyBoxValue={replyBoxValue}
          setReplyBoxValue={setReplyBoxValue}
        />
      )}
    </div>
  );
};
export default Thread;
