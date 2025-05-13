
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const BusinessFeatures = () => {
  const features = [
    "Employee account management with SSO integration",
    "Company travel policy enforcement",
    "Approval workflows for budget exceptions",
    "CRM integration (HubSpot, Salesforce)",
    "Team & department travel analytics",
    "Slack & MS Teams integration",
    "Expense management & reporting",
    "Carbon footprint tracking",
    "Centralized billing & invoicing",
    "24/7 business travel support"
  ];

  return (
    <section id="business" className="py-20 bg-brand-gray-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Business Travel</span> Management
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Streamline your company's travel planning with AI-powered automation that enforces corporate policies while giving employees flexibility.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="min-w-6 mt-1">
                    <div className="w-5 h-5 rounded-full bg-brand-purple flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-brand-purple hover:bg-brand-purple-dark">
                Schedule Demo
              </Button>
              <Button variant="outline">
                Business Pricing
              </Button>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-xl">
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <div className="bg-brand-purple p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Business Dashboard</h3>
                  <p>Centralized travel management for teams</p>
                </div>
                
                <div className="p-6 bg-white">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-gray-900">Travel Budget</h4>
                        <span className="text-sm text-gray-500">Q2 2025</span>
                      </div>
                      <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-purple w-[65%] rounded-full"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>€65,000 used</span>
                        <span>€100,000 total</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Upcoming Business Trips</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                          <div>
                            <p className="font-medium text-sm">NYC Client Meeting</p>
                            <p className="text-xs text-gray-500">May 15-18, 2025</p>
                          </div>
                          <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-800 rounded">Approved</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                          <div>
                            <p className="font-medium text-sm">London Conference</p>
                            <p className="text-xs text-gray-500">June 5-9, 2025</p>
                          </div>
                          <span className="text-xs font-medium px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Pending</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                          <div>
                            <p className="font-medium text-sm">Berlin Team Retreat</p>
                            <p className="text-xs text-gray-500">July 21-26, 2025</p>
                          </div>
                          <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded">Planning</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button variant="outline" size="sm" className="w-full text-brand-purple">View All Trips</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessFeatures;
