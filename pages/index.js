import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Thread from "../components/thread/Thread";
import data from "../public/data.json";
import ReplyBox from "../components/ReplyBox/ReplyBox";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&family=Rubik:wght@400;500;700&display=swap"
        />
      </Head>
      <main className="bg-neutral-light-gray px-2 h-full">
        <div className="mx-auto container max-w-2xl">
          <div className="pb-44 pt-8 space-y-4 overflow-y-scroll h-screen relative">
            {data.comments.map((item, index) => (
              <div key={index}>
                <Thread key={index} data={item} />
                {item.replies.length > 0 && (
                  <div className="ml-2 sm:ml-4 lg:ml-12 border-l-2 pl-4 lg:pl-8 border-gray-300 space-y-4 mt-4 flex flex-col justify-end">
                    {item.replies.map((it, i) => (
                      <Thread key={i} data={it} />
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* your replies */}
            <div className="fixed sm:left-[50%] sm:w-[42rem] sm:translate-x-[-50%] left-2 right-2 bottom-2 ">
              <ReplyBox />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
