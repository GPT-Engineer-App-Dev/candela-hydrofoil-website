import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "C-8",
    description: "The world's first electric hydrofoil speedboat, perfect for day trips and water sports.",
    image: "/images/candela-c8.jpg",
  },
  {
    name: "P-12",
    description: "A revolutionary electric water taxi, designed for efficient and comfortable passenger transport.",
    image: "/images/candela-p12.jpg",
  },
  {
    name: "C-POD",
    description: "Our advanced electric boat motor, providing silent and powerful propulsion for various vessels.",
    image: "/images/candela-c-pod.jpg",
  },
];

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <CardDescription>{product.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;