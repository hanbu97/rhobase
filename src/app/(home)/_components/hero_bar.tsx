"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroBar = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const checkHover = (e: MouseEvent) => {
      setShowHeader(e.clientY < 200); // Show header when mouse is near the top
    };

    const checkScroll = () => {
      setIsTop(window.scrollY === 0); // 当页面滚动到顶部时更新状态
    };

    window.addEventListener("mousemove", checkHover);
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("scroll", checkScroll); // 移除事件监听器
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // <motion.div
    //   animate={{
    //     y: showHeader || isTop ? "0%" : "-400%", // 根据 showHeader 或页面是否在顶部显示/隐藏
    //   }}
    //   transition={{ ease: "linear", duration: 0.3 }}
    //   className="fixed top-0 left-0 right-0 bg-transpartent text-white z-50"
    //   style={{ padding: "10px" }}
    // >
    //   <div className="fixed left-1/4 right-1/4 bg-white/20 py-5 px-6 rounded-3xl shadow-2xl backdrop-blur-xl">
    //     <nav className="flex items-center justify-between">
    //       <div className="flex space-x-4">
    //         {/* 导航项 */}
    //         <a href="#" className="text-white font-semibold hover:underline">
    //           Products
    //         </a>
    //         <a href="#" className="text-white font-semibold hover:underline">
    //           Developer
    //         </a>
    //         <a href="#" className="text-white font-semibold hover:underline">
    //           Roadmap
    //         </a>
    //       </div>
    //       <div className="text-white font-bold text-2xl">Rhobase</div>
    //       <div className="flex items-center space-x-4">
    //         <a
    //           href="#"
    //           className="text-white font-semibold hover:underline self-center"
    //         >
    //           Log In
    //         </a>
    //         <a
    //           href="#"
    //           className="bg-[#66e4b8] text-white px-5 py-2 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-[#67e2c2]"
    //         >
    //           Sign up
    //         </a>
    //       </div>
    //     </nav>
    //   </div>
    // </motion.div>
    <motion.div
      animate={{
        y: showHeader || isTop ? "0%" : "-400%", // 根据 showHeader 或页面是否在顶部显示/隐藏
      }}
      transition={{ ease: "linear", duration: 0.3 }}
      className="fixed top-0 left-0 right-0 bg-transparent text-white z-50"
      style={{ padding: "10px" }}
    >
      <div className="fixed left-1/4 right-1/4 bg-white/20 py-5 px-6 rounded-3xl shadow-2xl backdrop-blur-xl">
        <nav className="flex items-center justify-between">
          <div className="flex-1 flex items-center justify-start space-x-4">
            {/* 导航项 */}
            <a href="#" className="text-white font-semibold hover:underline">
              Products
            </a>
            {/* <a href="#" className="text-white font-semibold hover:underline">
              Developer
            </a> */}
            <a href="https://rhobase.odoo.com/en/my/projects/1?access_token=f455b6c6-5617-40f4-91c0-5fced0e7717d" className="text-white font-semibold hover:underline">
              Roadmap
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <a
              onClick={scrollToTop}
              className="text-white font-bold text-2xl cursor-pointer"
            >
              Rhobase
            </a>
          </div>
          <div className="flex-1 flex items-center justify-end space-x-4">
            {/* <a
              href="#"
              className="text-white font-semibold hover:underline self-center"
            >
              Log In
            </a> */}
            <a
              href="/signup"
              className="bg-[#66e4b8] text-white font-bold px-5 py-2 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-[#67e2c2]"
            >
              Buidl Now
            </a>
          </div>
        </nav>
      </div>
    </motion.div>
  );
};
