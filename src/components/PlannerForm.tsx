
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const PlannerForm = () => {
  const [loading, setLoading] = useState(false);
  const [planReady, setPlanReady] = useState(false);
  const [inputValue, setInputValue] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    setLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setLoading(false);
      setPlanReady(true);
    }, 3000);
  };

  return (
    <section id="planner" className="py-20 bg-brand-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try Tripmind Assist
          </h2>
          <p className="text-lg text-gray-600">
            Describe your travel needs in a single sentence and our AI will generate a complete travel plan.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-lg border-0">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="travel-prompt" className="block text-sm font-medium text-gray-700 mb-2">
                  Your travel request
                </label>
                <Textarea
                  id="travel-prompt"
                  placeholder="E.g., 'I want a 2-week beach holiday in Europe in July for €2500' or 'Business trip to New York, 3 days in September, close to Manhattan'"
                  className="h-32 mb-2"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <p className="text-xs text-gray-500">
                  Include details like destination, budget, dates, preferences, or special requirements
                </p>
              </div>
              
              <div className="flex flex-col space-y-2">
                <Button 
                  type="submit" 
                  className="bg-brand-purple hover:bg-brand-purple-dark w-full"
                  disabled={loading || !inputValue.trim()}
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating your plan...
                    </div>
                  ) : "Generate Travel Plan"}
                </Button>
                
                <div className="text-center">
                  <p className="text-xs text-gray-500 mt-2">
                    This is a demo version. In a real implementation, we'd connect to travel APIs.
                  </p>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PlannerForm;
