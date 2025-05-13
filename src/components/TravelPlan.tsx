
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Hotel, MapPin, Send } from "lucide-react";

const TravelPlan = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your AI-Generated Travel Plan</h2>
          <p className="text-lg text-gray-600">
            Based on your request: "2 week trip to Italy in June for €3000"
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="flights">Flights</TabsTrigger>
              <TabsTrigger value="hotels">Hotels</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="dining">Dining</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Trip Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843" 
                          alt="Italy" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Italian Adventure</h3>
                        <p className="text-gray-600">June 12-26, 2025</p>
                        <p className="text-brand-purple font-medium">Estimated cost: €2,980</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Itinerary</h4>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="min-w-6 mt-1">
                            <Calendar className="h-5 w-5 text-brand-purple" />
                          </div>
                          <div>
                            <p className="font-medium">June 12-15: Rome</p>
                            <p className="text-sm text-gray-600">Explore the ancient city with guided tours of the Colosseum and Vatican.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="min-w-6 mt-1">
                            <Calendar className="h-5 w-5 text-brand-purple" />
                          </div>
                          <div>
                            <p className="font-medium">June 16-19: Florence</p>
                            <p className="text-sm text-gray-600">Immerse yourself in Renaissance art and architecture.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="min-w-6 mt-1">
                            <Calendar className="h-5 w-5 text-brand-purple" />
                          </div>
                          <div>
                            <p className="font-medium">June 20-26: Amalfi Coast</p>
                            <p className="text-sm text-gray-600">Relax on beautiful beaches and explore picturesque coastal towns.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Transportation</h4>
                        <ul className="space-y-2 text-sm">
                          <li>Return flights: €650</li>
                          <li>Train transfers: €120</li>
                          <li>Local transport: €100</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Accommodation</h4>
                        <ul className="space-y-2 text-sm">
                          <li>Rome: €480 (3 nights)</li>
                          <li>Florence: €380 (4 nights)</li>
                          <li>Amalfi: €850 (6 nights)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">What's included</h4>
                      <ul className="grid grid-cols-2 gap-2 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-brand-green flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span>All accommodations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-brand-green flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span>Return flights</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-brand-green flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span>Airport transfers</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-brand-green flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span>City tours</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-brand-purple hover:bg-brand-purple-dark flex-1 flex items-center gap-2">
                        <Send className="h-4 w-4" /> Send to Email
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="flights">
              {/* Flight details would go here */}
              <Card>
                <CardHeader>
                  <CardTitle>Flight Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Flight details would be displayed here with options from multiple providers.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="hotels">
              {/* Hotel details would go here */}
              <Card>
                <CardHeader>
                  <CardTitle>Accommodation Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4 pb-4 border-b">
                      <div className="md:w-1/3">
                        <div className="h-48 rounded-lg overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945" 
                            alt="Hotel in Rome" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-lg">Hotel Artemide, Rome</h3>
                          <span className="font-semibold text-brand-purple">€160/night</span>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                          <span>★★★★★</span>
                          <span className="text-gray-600">(954 reviews)</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600 mt-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">Central Rome, 5 min from Colosseum</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Luxury hotel with excellent amenities including breakfast buffet, spa services, and exceptional customer service. Centrally located for easy access to Rome's major attractions.
                        </p>
                        <div className="mt-3">
                          <Button size="sm" variant="outline">View Details</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/3">
                        <div className="h-48 rounded-lg overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa" 
                            alt="Hotel in Florence" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-lg">Hotel Spadai, Florence</h3>
                          <span className="font-semibold text-brand-purple">€140/night</span>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                          <span>★★★★☆</span>
                          <span className="text-gray-600">(782 reviews)</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600 mt-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">Historic center, near Duomo</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Boutique hotel in the heart of Florence offering elegant rooms with modern amenities. Perfect location for exploring Renaissance architecture and art galleries.
                        </p>
                        <div className="mt-3">
                          <Button size="sm" variant="outline">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="activities">
              {/* Activities details would go here */}
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Activity recommendations would be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="dining">
              {/* Dining details would go here */}
              <Card>
                <CardHeader>
                  <CardTitle>Restaurant Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Restaurant recommendations would be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TravelPlan;
