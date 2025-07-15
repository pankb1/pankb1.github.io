import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    productInterest: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Create email body with form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Country: ${formData.country || 'Not specified'}
Product Interest: ${formData.productInterest || 'Not specified'}

Message:
${formData.message}
    `.trim();

    // Redirect to email client
    const mailtoLink = `mailto:bagheleenterprise@gmail.com?subject=Rice Export Inquiry from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    toast({
      title: "Redirecting to Email",
      description: "Your email client will open with the inquiry details."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      country: '',
      productInterest: '',
      message: ''
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: Mail,
    title: "Email",
    value: "bagheleenterprise@gmail.com",
    link: "mailto:bagheleenterprise@gmail.com",
    color: "text-blue-600"
  }, {
    icon: Phone,
    title: "Phone / WhatsApp",
    value: "+91 9673949795",
    link: "tel:+919673949795",
    color: "text-green-600"
  }, {
    icon: MapPin,
    title: "Location",
    value: "Dongarla, Tahsil Tumsar\nDistrict Bhandara, Maharashtra, India",
    link: "#",
    color: "text-purple-600"
  }];
  return <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to explore premium Indian rice for your market? Contact us for quotes, samples, or any questions about our export services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => <div key={index} className="flex items-start space-x-4">
                    <div className={`${info.color} bg-gray-50 rounded-full p-3`}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <a href={info.link} className={`${info.color} hover:underline whitespace-pre-line`}>
                        {info.value}
                      </a>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Sunday</span>
                    <span className="font-medium">9:00 AM - 10:00 PM</span>
                  </div>
                  
                  
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  <Globe className="h-4 w-4 inline mr-1" />
                  Available for international calls via WhatsApp 24/7
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Your Inquiry</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll respond within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <Input type="text" name="country" value={formData.country} onChange={handleInputChange} placeholder="Your country" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Interest
                      </label>
                      <Input type="text" name="productInterest" value={formData.productInterest} onChange={handleInputChange} placeholder="e.g., Basmati Rice, Non-Basmati Rice" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Please provide details about your requirements, quantity, destination, etc." rows={6} required />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <a href="https://wa.me/919673949795" target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <a href="mailto:bagheleenterprise@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Email Direct
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;