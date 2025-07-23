import { ArrowRight, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
    }}>
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-50">
              Baghele Enterprises
              <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">
                & Company
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
            Premium Indian Rice Exports
            <span className="block mt-2 text-lg opacity-80">
              Quality • Trust • Global Reach
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              <Globe className="mr-2 h-5 w-5" />
              View Products
            </Button>
            
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Award className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">APEDA Certified</h3>
              <p className="text-sm opacity-90">Government approved quality standards</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Globe className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Worldwide</h3>
              <p className="text-sm opacity-90">Dedicated service to Worldwide</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <ArrowRight className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">IE Code Valid</h3>
              <p className="text-sm opacity-90">Licensed for international trade</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default HeroSection;