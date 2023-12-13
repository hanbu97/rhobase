import { stylesWithCssVar } from "@/utils/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const StreamlinedExperience = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const textX = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-110%"]);
  const opacitySection = useTransform(scrollYProgress, [0.01, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);

  const opacityBorder = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72],
    [1, 1, 0]
  );
  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72, 0.8, 0.9],
    [0, 0, 1, 1, 0]
  );

  const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);
  const circleLineDisappear = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72],
    [1, 1, 0]
  );

  return (
    // <motion.section
    //   style={stylesWithCssVar({
    //     opacity: opacitySection,
    //     "--scale": scale,
    //     "--opacity-border": opacityBorder,
    //     zIndex: 5,
    //   })}
    //   ref={targetRef}
    //   className="mt-[30vh] flex h-[500vh] items-start justify-start"
    // >
    //   <div className="sticky top-1/2 left-1/2 min-h-[50rem] min-w-[50rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] before:border-[2.5rem] before:border-[#75FBC8] before:opacity-[var(--opacity-border)] before:rounded-full">
    //     <motion.p
    //       aria-hidden
    //       style={{ x: textX, y: "-50%" }}
    //       className="whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] text-[23rem] text-heading"
    //     >
    //       Streamlined Experience.
    //     </motion.p>
    //     <motion.p
    //       aria-hidden
    //       style={{ x: textX, y: "-50%" }}
    //       className="whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] z-[0] text-[23rem] text-transparent [-webkit-text-stroke:1px_var(--color-heading)]"
    //     >
    //       Streamlined Experience.
    //     </motion.p>

    //     <motion.p
    //       style={{
    //         opacity: finalTextOpacity,
    //         scale: finalTextScale,
    //         y: "-50%",
    //         x: "-50%",
    //       }}
    //       className="absolute left-1/2 top-1/2 text-[8.8rem] leading-tight text-white"
    //     >
    //       Streamlined
    //       <br />
    //       Experience.
    //     </motion.p>
    //     <span className="absolute left-[calc(50%*var(--scale)+50%)] top-0 z-10 h-full w-[50vw] origin-left scale-[var(--scale)] bg-background opacity-[var(--opacity-border)]" />
    //     <span className="absolute left-[calc(50%*var(--scale)+50%-(50rem*var(--scale)))] top-1/2 z-[12] h-1/2 w-[50vw] origin-left scale-[var(--scale)] border-l-[2.5rem] border-[#75FBC8] opacity-[var(--opacity-border)]" />
    //   </div>
    // </motion.section>
    <motion.section
      style={stylesWithCssVar({
        opacity: opacitySection,
        zIndex: 5,
      })}
      ref={targetRef}
      className="mt-[30vh] flex h-[480vh] items-start justify-start"
    >
      <div className="sticky top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* 缩放容器 */}
        <motion.div
          style={{
            scale: scale,
            opacity: circleLineDisappear,
            // opacity: useTransform(finalTextOpacity, (v) => 1 - v),
          }}
          className="relative flex items-center justify-center min-h-[32rem] min-w-[32rem]"
        >
          {/* Circle */}
          <div className="rounded-full border-[2.5rem] border-[#75FBC8] w-full h-full absolute"></div>

          {/* Vertical Line */}
          <div className="absolute left-0 top-3/4 h-1/2 w-[2.5rem] bg-[#75FBC8] -translate-y-1/2"></div>
        </motion.div>

        {/* 现有的动画元素 */}
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className="whitespace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] text-[12rem] text-heading z-[0]"
        >
          Web3 Innovation Web2 Simplicity.
        </motion.p>
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className="whitespace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] text-[12rem] text-red [-webkit-text-stroke:1px_var(--color-heading)] z-[11]"
        >
          Web3 Innovation Web2 Simplicity.
        </motion.p>
        <motion.p
          style={{
            opacity: finalTextOpacity,
            scale: finalTextScale,
            y: "-50%",
            x: "-50%",
          }}
          className="absolute left-1/2 top-1/2 text-[8.8rem] leading-tight text-white font-bold z-[12]"
        >
          Web3 Innovation
          <br />
          Web2 Simplicity
        </motion.p>
      </div>
    </motion.section>
  );
};
