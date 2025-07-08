"use client";

import { useEffect, useState } from "react";
import TopNavbar from "@/components/TopNavbar";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Footer from "@/components/Footer";
import LightEffect from "@/components/LightEffect";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Clean up listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [leftSidebarOpen, setLeftSidebarOpen] = useState(
    isMobile ? false : true
  );
  const [rightSidebarOpen, setRightSidebarOpen] = useState(
    isMobile ? false : true
  );

  // Prevent scrolling when left or right sidebar is open
  useEffect(() => {
    if ((leftSidebarOpen || rightSidebarOpen) && isMobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [leftSidebarOpen, rightSidebarOpen, isMobile]);

  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.find((entry) => entry.isIntersecting);
        if (entry) {
          setActiveSection(entry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <TopNavbar
        onMusicClick={() => setLeftSidebarOpen(true)}
        onBarsClick={() => setRightSidebarOpen(true)}
      />
      <LightEffect />
      <div className="flex min-h-screen w-full antialiased text-foreground">
        <LeftSidebar
          open={leftSidebarOpen}
          onClose={() => setLeftSidebarOpen(false)}
        />
        <main className="w-full md:w-1/2 p-6 overflow-y-auto">{children}</main>
        <RightSidebar
          open={rightSidebarOpen}
          onClose={() => setRightSidebarOpen(false)}
          activeSection={activeSection}
          isMobile={isMobile}
        />
      </div>
      <Footer />
    </>
  );
}
