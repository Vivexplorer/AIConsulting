import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Reduce operational costs by up to 40%',
  'Increase team productivity and collaboration',
  'Scale effortlessly with growing demands',
  'Access 24/7 priority support and resources',
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Built for Modern Businesses
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              BusinessBuilderAI empowers teams of all sizes to collaborate seamlessly, automate workflows,
              and deliver exceptional results. Our platform combines intuitive design with
              powerful functionality to help you achieve your goals faster. 
            </p>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-3xl blur-3xl opacity-30" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                  <div className="text-slate-600">Active Users</div>
                </div>
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">99.9%</div>
                  <div className="text-slate-600">Uptime SLA</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-teal-600 mb-2">150+</div>
                  <div className="text-slate-600">Integrations</div>
                </div>
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-sky-600 mb-2">4.9/5</div>
                  <div className="text-slate-600">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
