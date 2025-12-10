import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    content: 'Nexus has transformed how our team collaborates. The seamless integration and intuitive interface made adoption effortless.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager at Innovate',
    content: 'The analytics dashboard is a game-changer. We can now make data-driven decisions in real-time with confidence.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder at StartupHub',
    content: 'Best investment we made this year. The ROI was visible within the first month. Highly recommend for growing teams.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Loved by Teams Worldwide
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-slate-200"
            >
              <CardContent className="p-8">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
