
import React from "react";
import { Calendar, Hotel, MapPin, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Calendar className="h-10 w-10 text-brand-purple" />,
      title: "Smart Calendar Analysis",
      description: "Our AI analyzes your available dates and suggests the optimal travel times considering seasonal factors and pricing."
    },
    {
      icon: <Hotel className="h-10 w-10 text-brand-purple" />,
      title: "Personalized Accommodation",
      description: "Get hotel recommendations that match your preferences for location, style, and budget constraints."
    },
    {
      icon: <MapPin className="h-10 w-10 text-brand-purple" />,
      title: "Local Experiences",
      description: "Discover curated activities and restaurant recommendations based on your interests."
    },
    {
      icon: <Users className="h-10 w-10 text-brand-purple" />,
      title: "Preference Learning",
      description: "Our system learns from your past trips and feedback to make increasingly personalized suggestions."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Advanced AI Travel Planning
          </h2>
          <p className="text-lg text-gray-600">
            Tripmind combines artificial intelligence with travel expertise to create
            comprehensive trip plans that consider all your preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm card-hover"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Integration logos */}
        <div className="mt-20">
          <p className="text-center text-gray-500 mb-8">Integrates with your favorite services</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="h-8 w-32 bg-gray-200 rounded flex items-center justify-center">Skyscanner</div>
            <div className="h-8 w-32 bg-gray-200 rounded flex items-center justify-center">Booking.com</div>
            <div className="h-8 w-32 bg-gray-200 rounded flex items-center justify-center">Google Calendar</div>
            <div className="h-8 w-32 bg-gray-200 rounded flex items-center justify-center">Viator</div>
            <div className="h-8 w-32 bg-gray-200 rounded flex items-center justify-center">GetYourGuide</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
