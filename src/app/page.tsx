"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { assets } from "@/utils/asset-utils";
import { type Framework, frameworks } from "@/utils/framework-utils";
import { cn } from "@/utils/tailwind-utils";
import { FrameworkRotation } from "@/components/framework-rotation";
import { CountdownTimer } from "@/components/countdown-timer";
import { Cursor } from "@/components/cursor";
import SocialFooter from "@/components/SocialFooter";

export default function Home() {
  const [currentFramework, setCurrentFramework] = useState<Framework>(frameworks[0]);
  const [showBackground, setShowBackground] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    const rotateFrameworks = () => {
      setCurrentFramework(frameworks[currentIndex]);
      currentIndex = (currentIndex + 1) % frameworks.length;
    };
    const intervalId = setInterval(rotateFrameworks, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setShowBackground(true);
  }, []);

  return (
    <div className="h-screen flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div
        className={cn(
          "fixed inset-0 transition-colors delay-100 duration-700 opacity-25",
          {
            "bg-purple-300": currentFramework === "qwik",
            "bg-sky-300": currentFramework === "safari",
            "bg-yellow-300": currentFramework === "chrome",
            "bg-teal-300": currentFramework === "tailwind",
            "bg-blue-300": currentFramework === "react",
            "bg-green-300": currentFramework === "vue",
            "bg-orange-400": currentFramework === "svelte",
            "bg-red-300": currentFramework === "mobile",
            "bg-neutral-300": currentFramework === "desktop",
          }
        )}
      />
      <div
        style={{
          backgroundSize: "30px",
          backgroundImage: `url(${assets.square})`,
        }}
        className="fixed inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,white,transparent)]"
      />
      <Image
        width={1200}
        height={1200}
        role="presentation"
        alt="gradient background"
        className="fixed inset-0 w-screen h-screen object-cover opacity-60"
        src={assets.gradient}
      />
      <div
        className={cn(
          "bg-black fixed inset-0 transition-opacity duration-1000",
          !showBackground ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
              <Image
                alt="NYXIS logo"
                className="w-20 h-auto drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                width={100}
                height={100}
                src="/svgviewer-output.png"
                priority
              />
            </div>

            {/* Heading */}
            <h1
              style={{ fontFamily: "'Lemon Milk', sans-serif" }}
              className="text-3xl md:text-5xl max-w-3xl text-center leading-snug mb-6 font-bold tracking-tight"
            >
              <span className="block mb-2 text-white/90">On A Move Your Style</span>
              <span
                className={cn("transition-colors duration-200 relative", {
                  "text-purple-300": currentFramework === "qwik",
                  "text-sky-300": currentFramework === "safari",
                  "text-yellow-300": currentFramework === "chrome",
                  "text-teal-300": currentFramework === "tailwind",
                  "text-blue-300": currentFramework === "react",
                  "text-green-300": currentFramework === "vue",
                  "text-orange-400": currentFramework === "svelte",
                  "text-red-300": currentFramework === "mobile",
                  "text-neutral-300": currentFramework === "desktop",
                })}
              >
                Define Your Future
                <span className="absolute -inset-1 bg-white/10 rounded-lg blur-xl opacity-25"></span>
              </span>
            </h1>

            {/* Sub heading */}
            <p 
              style={{ fontFamily: "'Lemon Milk', sans-serif" }}
              className="mb-8 text-center text-gray-300/90 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed"
            >
              BLUAWAY is launching with exclusive drops and top-tier designs. Don &apos t miss out—be there when the game changes! #WeGrowTheGame
            </p>

            {/* Countdown Timer */}
            <div className="mb-8 transform hover:scale-105 transition-all duration-300">
              <CountdownTimer currentFramework={currentFramework} />
            </div>

            {/* Claim ticket button */}
            <div className="mb-4 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <button
                ref={buttonRef}
                style={{ fontFamily: "'Lemon Milk', sans-serif" }}
                className={cn(
                  "relative px-6 py-3 rounded-md text-base md:text-lg font-bold transition-all duration-200 hover:scale-105 hover:shadow-xl shadow-md",
                  {
                    "bg-purple-300": currentFramework === "qwik",
                    "bg-sky-300": currentFramework === "safari",
                    "bg-yellow-300": currentFramework === "chrome",
                    "bg-teal-300": currentFramework === "tailwind",
                    "bg-blue-300": currentFramework === "react",
                    "bg-green-300": currentFramework === "vue",
                    "bg-orange-400": currentFramework === "svelte",
                    "bg-red-300": currentFramework === "mobile",
                    "bg-neutral-300": currentFramework === "desktop",
                  }
                )}
              >
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SocialFooter />
      
      {/* Cursor */}
      <Cursor buttonRef={buttonRef} />
    </div>
  );
}