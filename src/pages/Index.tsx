
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PlannerForm from "@/components/PlannerForm";
import TravelPlan from "@/components/TravelPlan";
import BusinessFeatures from "@/components/BusinessFeatures";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <PlannerForm />
      <TravelPlan />
      <BusinessFeatures />
      <Footer />
    </div>
  );
};

export default Index;
