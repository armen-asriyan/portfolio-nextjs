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
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(
    isMobile ? false : true
  );
  const [rightSidebarOpen, setRightSidebarOpen] = useState(
    isMobile ? false : true
  );

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      // Close sidebars when switching to mobile
      if (mobile) {
        setLeftSidebarOpen(false);
        setRightSidebarOpen(false);
      } else {
        // Open sidebars when switching to desktop
        setLeftSidebarOpen(true);
        setRightSidebarOpen(true);
      }
    };

    // Initialize on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when left or right sidebar is open
  useEffect(() => {
    if ((leftSidebarOpen || rightSidebarOpen) && isMobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [leftSidebarOpen, rightSidebarOpen, isMobile]);

  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const targetSection = document.getElementById(hash);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          setActiveSection(hash);
          setIsLocked(true);
        }
      }
    };

    // Handle initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Track which section is in view - simple approach
  useEffect(() => {
    const handleScroll = () => {
      if (isLocked) return;

      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY + 200; // Offset for better detection

      let currentSection = sections[0]?.id || null;

      // Find the section whose top is closest to current scroll position
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= scrollY) {
          currentSection = section.id;
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Initial call
    handleScroll();

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);

    // Reset isLocked after navigation
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    const handleLockReset = () => {
      if (isLocked) {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => setIsLocked(false), 300);
      }
    };

    window.addEventListener("scroll", handleLockReset);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleLockReset);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [children, isLocked, activeSection]);

  const handleSidebarClosing = () => {
    if (isMobile) {
      setLeftSidebarOpen(false);
      setRightSidebarOpen(false);
    }
  };

  return (
    <>
      {isMobile && (
        <TopNavbar
          onMusicClick={() => setLeftSidebarOpen(true)}
          onBarsClick={() => setRightSidebarOpen(true)}
        />
      )}
      <LightEffect />
      <div
        className="flex min-h-screen w-full antialiased text-foreground"
        id="main"
      >
        <main className="w-full lg:w-1/2 px-0 lg:px-6 py-6 overflow-y-auto order-2">
          {children}
        </main>
        <LeftSidebar
          open={leftSidebarOpen}
          onClose={handleSidebarClosing}
          isMobile={isMobile}
        />
        <RightSidebar
          open={rightSidebarOpen}
          onClose={handleSidebarClosing}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          setIsLocked={setIsLocked}
          isMobile={isMobile}
        />
      </div>
      <Footer setActiveSection={setActiveSection} />
    </>
  );
}
