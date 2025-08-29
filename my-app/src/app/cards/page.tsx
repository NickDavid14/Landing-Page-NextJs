"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
1
export default function WobbleCardDemo() {
  const stacks = [
    { name: "Quatroqueijos", icon: "/images/quatroqueijos.jpg" },
    { name: "Lasanha", icon: "/images/lasanha.jpg" },
    { name: "Pizza", icon: "/images/pizza.jpg" },
    { name: "Spaghetti", icon: "/images/spaghetti.jpg" },
    { name: "panna-cotta", icon: "/images/panna-cotta.jpg" },
    
  ];

  return (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-10">
  
    {/* Terceiro card (agora o de baixo): Stacks com carrossel */}
    <WobbleCard containerClassName="w-full col-span-1 lg:col-span-3 bg-amber-3100">

      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-center text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black font-serif mb-5">
          Pratos
        </h2>
        <InfiniteMovingCards
          items={stacks}
          direction="right"
          speed="fast"
          
        />
      </div>
    </WobbleCard>
  </div>
)}
