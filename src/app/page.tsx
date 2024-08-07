"use client";

import Image from "next/image";
import Link from "next/link";
import Avatar from "public/avatar.svg";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <motion.div>
      <div className="flex items-center md:flex-row max-lg:flex-col-reverse justify-center">
        <div className="flex flex-col max-w-md">
          <div className="px-1 py-10 flex flex-col">
            <text className="font-normal text-lg">Hello!</text>
            <text className="font-bold text-2xl py-2">I am Kamel Liao.</text>
            <text className="font-normal text-lg">
              I am passionate about computer science and currently pursuing my
              second year of graduate studies at National Taiwan University.
            </text>
          </div>
          <div className="flex gap-2">
            <Link href="/about">
              <button className="btn-secondary">about</button>
            </Link>
            <Link href="/blog">
              <button className="btn-secondary">blog</button>
            </Link>
            <Link href="/playground">
              <button className="btn-secondary">playground</button>
            </Link>
            <Link href="https://github.com/kamelliao">
              <button className="btn-secondary" aria-label="github">
                <i className="fa-brands fa-github"></i>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image src={Avatar} alt="My avatar" width={350} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
