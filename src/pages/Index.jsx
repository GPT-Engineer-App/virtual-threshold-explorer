import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cat } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          <Cat className="mr-2" /> All About Cats
        </h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Feline Friends</CardTitle>
            <CardDescription>Discover the world of cats</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Cats are fascinating creatures that have been domesticated for thousands of years. 
              Known for their independence, agility, and affectionate nature, cats make wonderful companions.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba" 
              alt="Cute cat" 
              className="mx-auto object-cover w-full h-[400px] rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Cat Characteristics</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Excellent hunters with keen senses</li>
              <li>Flexible bodies and sharp retractable claws</li>
              <li>Independent yet affectionate with their owners</li>
              <li>Average lifespan of 12-18 years</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Popular Cat Breeds</h2>
            <ul className="list-disc list-inside">
              <li>Siamese</li>
              <li>Maine Coon</li>
              <li>Persian</li>
              <li>Bengal</li>
              <li>Scottish Fold</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
