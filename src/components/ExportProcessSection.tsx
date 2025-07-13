
import { MessageSquare, FileText, Package, Truck, Ship, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExportProcessSection = () => {
  const processSteps = [
    {
      icon: MessageSquare,
      title: "Initial Inquiry",
      description: "Contact us with your rice requirements, quantity, and destination details.",
      time: "Day 1"
    },
    {
      icon: FileText,
      title: "Quote & Agreement",
      description: "Receive detailed quotation and finalize terms including specifications and delivery.",
      time: "Days 2-3"
    },
    {
      icon: Package,
      title: "Quality Processing",
      description: "Rice is processed, quality tested, and packaged according to your specifications.",
      time: "Days 4-7"
    },
    {
      icon: Truck,
      title: "Documentation",
      description: "All export documents prepared including certificates, invoices, and shipping papers.",
      time: "Days 8-10"
    },
    {
      icon: Ship,
      title: "Shipment",
      description: "Goods dispatched via sea freight with tracking details and estimated arrival.",
      time: "Days 11-25"
    },
    {
      icon: CheckCircle,
      title: "Delivery Confirmation",
      description: "Confirm safe delivery and provide after-sales support for future orders.",
      time: "Day 26+"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Export Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From inquiry to delivery, we ensure a smooth and transparent export process that gives you complete peace of mind.
          </p>
        </div>

        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                              {step.time}
                            </span>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden lg:block relative">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Our Export Process?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Transparent Process</h4>
              <p className="text-gray-600">Complete visibility at every step with regular updates</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-fit mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Complete Documentation</h4>
              <p className="text-gray-600">All required export documents handled professionally</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-fit mx-auto mb-4">
                <Ship className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Reliable Shipping</h4>
              <p className="text-gray-600">Trusted logistics partners ensuring safe delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportProcessSection;
