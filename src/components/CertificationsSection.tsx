
import { Award, Shield, CheckCircle, FileCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CertificationsSection = () => {
  const certifications = [
    {
      icon: Award,
      title: "APEDA Certification",
      description: "Agricultural and Processed Food Products Export Development Authority approval for quality rice exports.",
      benefits: ["Government Recognition", "Quality Assurance", "International Standards", "Export Authorization"],
      status: "Active",
      color: "bg-green-500"
    },
    {
      icon: FileCheck,
      title: "Import Export Code (IEC)",
      description: "Valid Import Export Code issued by the Directorate General of Foreign Trade, Government of India.",
      benefits: ["Legal Authorization", "Customs Clearance", "International Trade", "Banking Support"],
      status: "Valid",
      color: "bg-blue-500"
    }
  ];

  const qualityStandards = [
    { standard: "ISO 22000", description: "Food Safety Management System" },
    { standard: "HACCP", description: "Hazard Analysis Critical Control Points" },
    { standard: "BRC", description: "British Retail Consortium Global Standard" },
    { standard: "Halal", description: "Halal Certification for Gulf Markets" }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality and international standards is validated through official certifications and compliance with global food safety norms.
          </p>
        </div>

        {/* Main Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`${cert.color} rounded-full p-3`}>
                      <cert.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{cert.title}</CardTitle>
                  </div>
                  <Badge className={`${cert.color} text-white`}>
                    {cert.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">{cert.description}</p>
                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-900 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Key Benefits:
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {cert.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Standards */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Quality Standards We Follow</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We adhere to international quality standards ensuring our rice meets the highest food safety and quality requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 rounded-full p-3 w-fit mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">{standard.standard}</h4>
                <p className="text-gray-600 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center bg-primary/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment as a New Business</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            As a newly established rice export business, we are passionate about bringing premium Indian rice to international markets. 
            While we may be new to the industry, our commitment to quality, transparency, and customer satisfaction drives everything we do.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-primary/10 rounded-full p-3 w-fit mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Learning & Growing</h4>
              <p className="text-gray-600 text-sm">
                We are continuously learning from industry experts and investing in knowledge to provide the best service to our clients.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-primary/10 rounded-full p-3 w-fit mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quality First</h4>
              <p className="text-gray-600 text-sm">
                Despite being new, we never compromise on quality. Every grain is carefully selected and processed to international standards.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-primary/10 rounded-full p-3 w-fit mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Building Trust</h4>
              <p className="text-gray-600 text-sm">
                We believe in transparency and building long-term relationships. Your success is our success, and we're here to grow together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
