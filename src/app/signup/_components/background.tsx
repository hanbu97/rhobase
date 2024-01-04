"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, MoveDirection } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Backgroud = () => {
  const [init, setInit] = useState(false);

  const particlesLoaded = (container: Container) => {
    console.log("Particles Loaded:", container);
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          // transparent
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "grab",
          },
          onHover: {
            enable: false,
            mode: "attract",
          },
        },
        modes: {
          push: {
            quantity: 12,
          },
          repulse: {
            distance: 9000,
            duration: 0.8,
          },
        },
      },
      particles: {
        color: {
          value: ["#9041D7", "#3566B3"],
        },
        links: {
          color: "#9041D7",
          distance: 288,
          enable: true,
          opacity: 0.8,
          width: 4,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="fixed bg-black top-0 left-0 w-full h-full bg-[radial-gradient(circle, #000000, #000000 50%, #75FBC8 100%)]  -z-1">
      {init ? <Particles id="tsparticles" options={options} /> : null}
    </div>
  );
};

export default Backgroud;
