import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "James Norris",
      initial: "J",
      rating: 5,
      text: "Heartbeat of South Bay did excellent work for my business. I will definitely use them again and refer them to other people."
    },
    {
      name: "Dominic Harris", 
      initial: "D",
      rating: 5,
      text: "Heartbeat of South Bay offered me a great service. Very detail-oriented and customized to the needs my company was seeking. I would refer their services to anyone who needs them within their organization."
    },
    {
      name: "Erica Wilson",
      initial: "E", 
      rating: 5,
      text: "I loved my experience working with Avery. It was key in helping me create some important foundational items in my business. He was very responsive and attentive to the things I needed to help my business grow. I would highly recommend using his services if you want to increase your online presence and help your business grow."
    },
    {
      name: "Redondo Beach Barber",
      initial: "R",
      rating: 4,
      text: "Exceptional service, very communicative. Good innovative ideas to help enhance and grow your business. Completed my project in a timely manner."
    },
    {
      name: "Dana Mason",
      initial: "D",
      rating: 5,
      text: "Working with Avery was a seamless process. His expertise, professional communication skills and patience created a top notch experience for me and my business partner. I highly recommend his company for your digital marketing needs."
    },
    {
      name: "Alfredo Garcia",
      initial: "A",
      rating: 5,
      text: "A huge blessing to have met Avery. His work ethic and professionalism is way above exceptional. Response, communication, and turnaround time was definitely an A+. He has gained my business with my future projects. Thank you Avery and Heartbeat of South Bay."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-gray-700">
            Discover what our clients think about our service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;