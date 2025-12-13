import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';



const plans = [
  {
    name: 'Consultation + Demo',
    price: '0',
    description: 'Perfect for all businesses',
    features: [
      'Full Introduction to BusinessBuilderAI',
      'Consultation on AI marketing products for your business',
    ],
    popular: false,
  },
  {
    name: 'Full AI Start Up',
    price: '2,000',
    description: 'For growing teams and businesses',
    features: [
      'Full Tailored Website',
      'Ad Creation Set Up',
      'Phone Caller'
    ],
    popular: true,
  },
  {
    name: 'Monthly Marketing',
    price: '100',
    description: 'For large organizations',
    features: [
      'U',
      'Unlimited storage',
    ],
    popular: true,
  },

  
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-2xl transition-all duration-300 ${
                plan.popular
                  ? 'border-blue-500 border-2 scale-105'
                  : 'border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-5xl font-bold text-slate-900">
                    ${plan.price}
                  </span>
                  <span className="text-slate-600"></span>
                </div>
              </CardHeader>
              <CardContent className="pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  

                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}