import React from 'react';

const testimonials = [
  {
    quote: 'Quantum has completely transformed my trading strategy. The automated arbitrage system is incredibly powerful and has consistently delivered impressive returns.',
    author: 'John Doe',
    title: 'Crypto Trader',
  },
  {
    quote: "As someone new to automated trading, I was amazed by how easy it was to get started with Quantum. The interface is intuitive, and the results speak for themselves.",
    author: 'Jane Smith',
    title: 'Retail Investor',
  },
  {
    quote: 'The speed and reliability of Quantum are unmatched. I can trust the system to execute trades flawlessly, even in the most volatile market conditions.',
    author: 'Samuel Lee',
    title: 'Institutional Trader',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">Trusted by Traders Worldwide</h2>
          <p className="mt-4 text-lg text-gray-400">
            Don't just take our word for it. Here's what our users have to say.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="p-8 rounded-2xl glassmorphism">
              <p className="text-gray-300 text-lg mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
