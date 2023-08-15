"use client";

import Image from "next/image";
import Link from "next/link";
import Avatar from "public/avatar_404.svg";
import { motion } from "framer-motion";
import Layout from "../components/layout";

export default function NotFound() {
  return (
    <Layout title="404 Not Found">
      <div className="flex items-center md:flex-row max-lg:flex-col-reverse justify-center">
        <div className="flex flex-col max-w-md">
          <div className="py-10 flex flex-col">
            <text className="font-normal text-lg"></text>
            <text className="font-bold text-2xl py-2">404</text>
            <text className="font-normal text-lg">
              哎呀！沒有找到你想要的東西。但你可以在這裡休息一下，喝口水，然後再去其他地方看看吧！:)
            </text>
          </div>
          <div className="flex gap-2">
            <Link href="/">
              <button className="btn-secondary">回首頁</button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image src={Avatar} alt="My avatar" width={260} />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
