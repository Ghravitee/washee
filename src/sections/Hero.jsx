import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "../assets/washee.jpg";
import InfiniteScroll from "../components/InfiniteScroll";
import { FaTiktok } from "react-icons/fa";
import dex from "../assets/dex-screener.png";
import { FaRegCopy } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa6";
import { useState } from "react";

const HeroSection = () => {
  // Variants for animations
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("0x000000000000000000000000000000");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <main className="">
      <div className="max-w-[65rem] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <motion.img
            src={logo}
            alt="suib"
            className="mx-auto"
            height={200}
            width={300}
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          />
        </div>
        <h1 className="uppercase font-black text-[3rem] text-center text-white">
          MR WASHEE WASHEE
        </h1>

        <div
          onClick={handleCopy}
          className="flex justify-center gap-2 items-center py-3 px-4 w-full sm:w-fit cursor-pointer mx-auto mt-10"
        >
          {hasCopied ? (
            <h2 className="text-white font-bold text-xl sm:text-2xl">
              Copied!
            </h2>
          ) : (
            <h2 className="text-xl text-white font-bold break-all pro">
              CTo9PGLX7kA3rUr6y6QgDStd1ThU2rjo8x5G6rmxpump
            </h2>
          )}

          <div>
            {hasCopied ? (
              <FaCopy className="text-2xl sm:text-3xl text-white" />
            ) : (
              <FaRegCopy className="text-2xl sm:text-3xl text-white" />
            )}
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center mt-10">
          <a href="https://x.com/mrwasheewashee0">
            <FaXTwitter
              color="white"
              className="text-6xl  bg-black p-3 flex justify-center items-center rounded-full"
            />
          </a>
          <a href="https://t.me/mr_washeewashee">
            <FaTelegramPlane
              color="white"
              className="text-6xl  bg-black p-3 flex justify-center items-center rounded-full"
            />
          </a>
          <a href="https://www.tiktok.com/@mr.washeewashee_meme">
            <FaTiktok
              color="white"
              className="text-6xl  bg-black p-3 flex justify-center items-center rounded-full"
            />
          </a>
          <a
            href="https://dexscreener.com/solana/CsCj83xWogxBY8DwM3TERsJhmueuLeYCFYVfq7UvDGqR"
            className=""
          >
            <img
              src={dex}
              alt="DEX Screener"
              width={60}
              height={60}
              className="rounded-full"
            />
          </a>
        </div>
      </div>
      <InfiniteScroll />
    </main>
  );
};

export default HeroSection;
