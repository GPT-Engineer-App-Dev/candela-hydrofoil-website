import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center text-center text-white">
        <img src="/placeholder.svg" alt="Hydrofoil boat" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Experience the Future of Boating</h1>
          <p className="text-xl mb-8">Candela Hydrofoil - Innovation on Water</p>
          <Button size="lg">Learn More</Button>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['C-8', 'P-12', 'C-POD'].map((product) => (
              <Card key={product}>
                <CardHeader>
                  <CardTitle>{product}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src="/placeholder.svg" alt={product} className="w-full h-48 object-cover mb-4" />
                  <CardDescription>
                    Experience the revolutionary {product} hydrofoil boat, designed for efficiency and comfort.
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;