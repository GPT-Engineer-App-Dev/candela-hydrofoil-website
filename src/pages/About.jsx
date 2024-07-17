import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                At Candela Hydrofoil, we're on a mission to revolutionize marine transportation. 
                We combine cutting-edge technology with sustainable design to create electric 
                boats that glide effortlessly above the water, providing a smooth, efficient, 
                and eco-friendly boating experience.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="md:w-1/2">
          <img src="/images/candela-c8.jpg" alt="Candela C-8 Hydrofoil" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default About;