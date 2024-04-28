import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";


export default function Footer() {
    return (

        <div>

        <div className="flex min-h-screen text-zinc-50">
        <LocationBlock />
        <EmailListBlock />
        </div>

        <FooterBase/>
        </div>

        
      
      );
}

const Block = ({ className, ...rest }) => {
    return (
      <motion.div
        variants={{
          initial: {
            scale: 0.5,
            y: 50,
            opacity: 0,
          },
          animate: {
            scale: 1,
            y: 0,
            opacity: 1,
          },
        }}
        transition={{
          type: "spring",
          mass: 3,
          stiffness: 400,
          damping: 50,
        }}
        className={twMerge(
          "rounded-lg border border-zinc-700 bg-zinc-800 p-6",
          className
        )}
        {...rest}
      />
    );
  };


const LocationBlock = () => (
    <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
      <FiMapPin className="text-3xl" />
      <p className="text-center text-lg text-zinc-400">Cyberspace</p>
    </Block>
  );
  
const EmailListBlock = () => (
    <Block className="col-span-12 md:col-span-9">
      <p className="mb-3 text-lg">Join my mailing list</p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-2"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
        />
        <button
          type="submit"
          className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
        >
          <FiMail /> Join the list
        </button>
      </form>
    </Block>
  );

const FooterBase = () => {
    return (
      <footer className="mt-12">
        <p className="text-center text-zinc-400">
          Made with ❤️ by{" "}
          <a href="#" className="text-red-300 hover:underline">
            @tomisloading
          </a>
        </p>
      </footer>
    );
  };  
