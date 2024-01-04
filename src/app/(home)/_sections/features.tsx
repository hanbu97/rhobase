import { stylesWithCssVar } from "@/utils/motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Features = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9, 1], [0.8, 0.8, 1]);
  const x = useTransform(scrollYProgress, [0.3, 1], ["50%", "0%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.85, 0.9],
    [1, 1, 0.4, 0.4, 1]
  );

  const text1Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.45, 0.5],
    [0, 1, 1, 0]
  );
  const text1Y = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    ["30px", "0px", "-30px"]
  );

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.65, 0.7],
    [0, 1, 1, 0]
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    ["30px", "0px", "-30px"]
  );

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.75, 0.85, 0.9],
    [0, 1, 1, 0]
  );
  const text3Y = useTransform(
    scrollYProgress,
    [0.7, 80., 0.9],
    ["30px", "0px", "-30px"]
  );

  const buttonOpacity = useTransform(scrollYProgress, [0.9, 1.0], [0, 1]);

  return (
    <section
      ref={targetRef}
      className="flex h-[500vh] flex-col items-center justify-start"
    >
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] text-white [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div style={{ x, scale }} className="relative h-full">
          <motion.figure style={{ opacity }} className="h-full">
            <img src="/main-screen.svg" className="h-full w-auto" />
          </motion.figure>
          <motion.figure style={{ opacity: text2Opacity }}>
            <img
              src="/command-palette.svg"
              className="absolute inset-0 h-full w-auto"
            />
          </motion.figure>
          <motion.figure style={{ opacity: text3Opacity }}>
            <img
              src="/devtools.svg"
              className="absolute inset-0 h-full w-auto"
            />
          </motion.figure>
        </motion.div>
        <motion.p
          style={stylesWithCssVar({
            opacity: text1Opacity,
            "--y": text1Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-0 text-2xl"
        >
          <span className="text-primary text-4xl font-bold text-customCyan block mb-4">Decentralized Identity</span>
          <span className="text-white leading-8">Establish and manage your digital identity, protect your online privacy and security.</span>
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text2Opacity,
            "--y": text2Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-0"
        >
          <span className="text-primary text-4xl font-bold text-customCyan block mb-4">Payment Solutions</span>
          <span className="text-white leading-8">Focusing on privacy and user experience, guarantees secure, smooth transactions.</span>
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text3Opacity,
            "--y": text3Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-0"
        >
          <span className="text-primary text-4xl font-bold text-customCyan block mb-4">Development Tools</span>
          <span className="text-white leading-8">Easy-to-use developer toolkit for building scalable decentralized applications</span>
        </motion.p>
      </div>
      <motion.button
        style={{ opacity: buttonOpacity }}
        transition={{ duration: 0.5 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-customCyan font-bold text-black py-3 px-6 rounded"
      >
        BUIDL NOW
      </motion.button>
    </section >
  );
};
