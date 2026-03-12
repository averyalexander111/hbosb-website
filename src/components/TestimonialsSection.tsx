import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsSection = React.memo(() => {
  const testimonials = [
    { name: "Dr. James Norris", initial: "J", industry: "Healthcare", rating: 5, text: "Heartbeat of South Bay did excellent work for my business. I will definitely use them again and refer them to other people." },
    { name: "Dominic Harris", initial: "D", industry: "Business Services", rating: 5, text: "Heartbeat of South Bay offered me a great service. Very detail-oriented and customized to the needs my company was seeking. I would refer their services to anyone who needs them within their organization." },
    { name: "Erica Wilson", initial: "E", industry: "Entrepreneur", rating: 5, text: "I loved my experience working with Avery. It was key in helping me create some important foundational items in my business. He was very responsive and attentive to the things I needed to help my business grow. I would highly recommend using his services if you want to increase your online presence and help your business grow." },
    { name: "Redondo Beach Barber", initial: "R", industry: "Local Business", rating: 4, text: "Exceptional service, very communicative. Good innovative ideas to help enhance and grow your business. Completed my project in a timely manner." },
    { name: "Dana Mason", initial: "D", industry: "Professional Services", rating: 5, text: "Working with Avery was a seamless process. His expertise, professional communication skills and patience created a top notch experience for me and my business partner. I highly recommend his company for your digital marketing needs." },
    { name: "Alfredo Garcia", initial: "A", industry: "Small Business", rating: 5, text: "A huge blessing to have met Avery. His work ethic and professionalism is way above exceptional. Response, communication, and turnaround time was definitely an A+. He has gained my business with my future projects. Thank you Avery and Heartbeat of South Bay." },
  ];

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-border"}`}
      />
    ));

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground">What Clients Are Saying</h2>
          <p className="section-subtitle mx-auto">
            Discover what our clients think about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-card rounded-2xl p-9 border border-border shadow-elegant hover:shadow-elegant-hover hover:-translate-y-1 transition-[box-shadow,transform] duration-300"
            >
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm mr-4">
                  {t.initial}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{t.name}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.industry}</p>
                  <div className="flex mt-1">{renderStars(t.rating)}</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";

export default TestimonialsSection;
