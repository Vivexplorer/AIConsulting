import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl shadow-2xl">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative px-8 py-16 sm:px-16 sm:py-24 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join thousands of teams already using BusinessBuilderAI to transform their workflow
              and achieve remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
              >
                Transform your Business Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 transition-all duration-300 text-lg px-8 py-6"
              >
                Schedule a Demo
              </Button>
            </div>
            <p className="text-blue-100 mt-8 text-sm">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
