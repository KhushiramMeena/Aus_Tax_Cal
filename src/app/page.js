"use client";
import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Section1_header from "../components/Section1_header";
import Section2_tax from "@/components/Section2_tax";
import Section3_email from "@/components/Section3_email";
import Section4_footer from "@/components/Section4_footer";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(targetRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div ref={targetRef}>
      {isVisible && (
        <div>
          {/* Your content goes here */}
          <Section1_header />
          <Section2_tax />
          <Section3_email />
          <Section4_footer />
        </div>
      )}
    </div>
  );
};

export default Home;
