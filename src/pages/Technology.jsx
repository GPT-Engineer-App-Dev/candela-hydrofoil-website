import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Technology = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Technology</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Hydrofoil Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Candela's hydrofoil technology allows our boats to lift above the water surface, 
                reducing drag and increasing efficiency. This innovative approach results in a 
                smoother ride, extended range, and significantly reduced energy consumption 
                compared to traditional boats.
              </p>
              <p className="mt-4">
                Our computer-controlled foil system continuously adjusts to waves and wind, 
                ensuring stability and comfort in various conditions. Combined with our 
                electric propulsion system, Candela hydrofoils represent the cutting edge 
                of sustainable marine transportation.
              </p>
            </CardContent>
          </Card>
        </div>
        <div>
          <img src="/images/hydrofoil-technology.jpg" alt="Hydrofoil Technology" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Technology;