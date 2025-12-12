import { Zap, Shield, Layers, BarChart3, Globe, Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Zap,
    title: 'Marketing Made Smarter',
    description: 'AI-driven campaigns that target the right customers at the right time.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Shield,
    title: 'Website Creation & Optimization ',
    description: 'Sleek, mobile-friendly sites designed to convert visitors into loyal clients.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Layers,
    title: 'Ad Management & Automation',
    description: 'Smarter ads across Google, Facebook, and Instagram with real-time insights.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'AI - Phone Caller',
    description: 'Let our AI-powered phone assistant connect with your customers, answer questions, and book appointments — all while saving you time and growing your business.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Globe,
    title: 'Data-Driven Insights ',
    description: 'Actionable analytics to guide smarter decisions and maximize ROI.',
    color: 'from-sky-500 to-sky-600',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your data is yours. We never sell or share your information with third parties.',
    color: 'from-slate-500 to-slate-600',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Powerful features designed to help you work smarter and achieve more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-300"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
