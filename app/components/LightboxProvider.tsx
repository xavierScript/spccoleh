"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import Lightbox from "./Lightbox";

interface LightboxContextType {
  openLightbox: (imageSrc: string, imageAlt: string) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(
  undefined
);

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox must be used within LightboxProvider");
  }
  return context;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [imageAlt, setImageAlt] = useState("");

  const openLightbox = (src: string, alt: string) => {
    setImageSrc(src);
    setImageAlt(alt);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}
      <Lightbox
        isOpen={isOpen}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        onClose={closeLightbox}
      />
    </LightboxContext.Provider>
  );
}
