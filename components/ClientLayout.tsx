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

  // Track which section is in view
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Find the first entry that is intersecting
      const entry = entries.find((entry) => entry.isIntersecting);

      // Update the active section
      if (entry && !isLocked) {
        setActiveSection(entry.target?.id);
      }
    };

    // Create an IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: "0px 0px -40% 0px", // Check the bottom of the viewport
    });

    // Observe each section
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    // Reset isLocked after a delay
    const handleScroll = () => {
      if (isLocked) {
        // Clear existing timeout to debounce
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }

        // Set timeout to reset isLocked after delay (e.g. 300ms)
        scrollTimeout = setTimeout(() => {
          setIsLocked(false);
          scrollTimeout = null;
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);

      // If there's a pending timeout, clear it
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [children, isLocked]); // Add children and isLocked as dependencies

  const handleSidebarClosing = () => {
    if (isMobile) {
      setLeftSidebarOpen(false);
      setRightSidebarOpen(false);
    }
  };

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
          onClose={handleSidebarClosing}
          isMobile={isMobile}
        />
        <main className="w-full lg:w-1/2 px-0 lg:px-6 py-6 overflow-y-auto">
          {children}
        </main>
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
