
import { Target, Users, Award, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide premium quality Indian rice to global markets, maintaining the highest standards of excellence and customer satisfaction."
    },
    {
      icon: Users,
      title: "Customer Focus", 
      description: "Building lasting relationships with our international clients through reliable service and consistent quality delivery."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every grain of rice undergoes strict quality checks to ensure it meets international standards and customer expectations."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers worldwide with deep understanding of regional preferences and international requirements."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Baghele Enterprises</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in Dongarla, Tahsil Tumsar, District Bhandara, Maharashtra, India, we are a trusted name in premium rice exports with a commitment to quality and international standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Your Trusted Rice Export Partner
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Baghele Enterprises & Company has established itself as a reliable exporter of high-quality Indian rice to customers worldwide. With our APEDA certification and valid Import-Export Code, we ensure that every shipment meets the stringent quality standards expected by our international clients.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our deep-rooted understanding of rice cultivation, processing, and export logistics allows us to deliver consistent quality that has earned the trust of buyers worldwide. We source our rice from the finest agricultural regions of India, ensuring that each grain meets our exacting standards.
            </p>
            <div className="bg-primary/10 rounded-lg p-6 border-l-4 border-primary">
              <p className="text-primary font-semibold text-lg">
                "Quality is not just our standard—it's our promise to every customer worldwide."
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Premium quality rice grains ready for export"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
