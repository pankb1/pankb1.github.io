import { Mail, Phone, MapPin, Globe, Award } from 'lucide-react';
const Footer = () => {
  const quickLinks = [{
    name: 'About Us',
    href: '#about'
  }, {
    name: 'Products',
    href: '#products'
  }, {
    name: 'Export Process',
    href: '#process'
  }, {
    name: 'Certifications',
    href: '#certifications'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const products = ['Basmati Rice', 'Non-Basmati Rice', 'Jasmine Rice', 'Parboiled Rice', 'Custom Specifications'];
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Baghele Enterprises
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium Indian rice exporters specializing in high-quality rice shipments to Gulf countries. APEDA certified with valid IE Code.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Award className="h-4 w-4" />
              <span>APEDA Certified • IE Code Valid</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300 mt-2">
              <span>GST: 27BBKPB6606B1Z3</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {products.map((product, index) => <li key={index} className="text-gray-300">
                  {product}
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Dongarla, Tahsil Tumsar<br />
                  District Bhandara(441912)<br />
                  Maharashtra, India
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+919673949795" className="text-gray-300 hover:text-primary transition-colors">
                  +91 9673949795
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:bagheleenterprises@gmail.com" className="text-gray-300 hover:text-primary transition-colors">bagheleenterprises@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-gray-300 text-sm">Serving Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© 2025 Baghele Enterprises & Company. All rights reserved.</div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Quality Assured</span>
              <span>•</span>
              <span>International Standards</span>
              <span>•</span>
              <span>Trusted Exports</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
