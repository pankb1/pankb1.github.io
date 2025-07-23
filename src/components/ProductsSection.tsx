import { Wheat, Star, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProductsSection = () => {
  const products = [
    {
      name: "Basmati Rice",
      description: "Premium long-grain aromatic rice, perfect for special occasions and fine dining.",
      features: ["Extra Long Grain", "Aromatic", "Aged", "Premium Quality"],
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Non-Basmati Rice", 
      description: "High-quality parboiled and raw rice varieties suitable for everyday consumption.",
      features: ["Nutritious", "Cost-Effective", "Various Grades", "Bulk Available"],
      image: "non-paraboiled_rice.jpg"
    },
    {
      name: "Paraboiled Rice",
      description: "Fragrant medium-grain rice with a subtle floral aroma and soft texture.",
      features: ["Fragrant", "Soft Texture", "Medium Grain", "Premium"],
      image: "paraboiled_rice.jpg"
    },
    {
      name: "Dal (Pulses)",
      description: "High-protein lentils and pulses, essential for healthy nutrition and traditional cooking.",
      features: ["High Protein", "Rich in Fiber", "Various Types", "Export Quality"],
      image: "dal.jpg"
    },
    {
      name: "Fresh Onions",
      description: "Premium quality onions with excellent storage life and rich flavor profile.",
      features: ["Long Storage", "Rich Flavor", "Premium Grade", "Export Quality"],
      image: "onion.jpg"
    },
    {
      name: "Fresh Oranges",
      description: "Juicy and sweet oranges packed with vitamin C and natural goodness.",
      features: ["Vitamin C Rich", "Fresh & Juicy", "Premium Grade", "Export Quality"],
      image: "orange.jpg"
    },
    {
      name: "Fresh Grapes",
      description: "Premium quality grapes with excellent sweetness and perfect texture.",
      features: ["Natural Sweet", "Premium Quality", "Fresh & Crisp", "Export Grade"],
      image: "grapes.jpg"
    },
    {
      name: "Jaggery (Gur)",
      description: "Pure and natural jaggery made from sugarcane, rich in minerals and nutrients.",
      features: ["100% Natural", "Rich in Iron", "Traditional Process", "Chemical Free"],
      image: "jaggery.jpg"
    },
    {
      name: "Premium Wheat",
      description: "High-quality wheat grains perfect for flour production and various food applications.",
      features: ["High Protein", "Premium Grade", "Clean & Sorted", "Export Quality"],
      image: "wheat"
    },
    {
      name: "Refined Sugar",
      description: "Pure white refined sugar with consistent quality and crystal structure.",
      features: ["99.9% Pure", "Crystal White", "Food Grade", "Export Quality"],
      image: "sugar"
    },
    {
      name: "Fresh Potatoes",
      description: "Premium quality potatoes with excellent storage life and cooking properties.",
      features: ["Long Storage", "Cooking Grade", "Premium Quality", "Export Grade"],
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const specifications = [
    { label: "Moisture Content", value: "Max 14%" },
    { label: "Broken Grains", value: "Max 5%" },
    { label: "Foreign Matter", value: "Max 1%" },
    { label: "Chalky Grains", value: "Max 6%" }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Product Collection</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a carefully curated selection of premium agricultural products including rice, pulses, fruits, vegetables, and other food commodities, each meeting international quality standards and tailored for Gulf market preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white">
                    <Star className="h-3 w-3 mr-1" />
                    Premium
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-900 flex items-center">
                    <Package className="h-4 w-4 mr-2" />
                    Key Features:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Specifications */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Quality Specifications</h3>
            <p className="text-gray-600">
              All our rice varieties adhere to strict international quality parameters
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specifications.map((spec, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 rounded-full p-3 w-fit mx-auto mb-3">
                  <Wheat className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{spec.label}</h4>
                <p className="text-primary font-bold text-lg">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Orders */}
        <div className="text-center mt-12 bg-primary/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Requirements?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We understand that different markets have unique preferences. Contact us to discuss custom specifications, packaging, or other rice varieties not listed above.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Request Custom Quote
            </a>
            <a 
              href="tel:+919673949795"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
            >
              Call for Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
