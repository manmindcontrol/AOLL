// HomePage.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faHeart,
  faUsers,
  faBook,
  faCheckCircle,
  faArrowRight,
  faStar,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
const profileImages = [
  "/images/PP1.png",
  "/images/PP2.png",
  "/images/PP3.png",
  "/images/PP4.png",
  "/images/PP5.png",
];

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="hero" className="relative  py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-100 mb-6 leading-tight">
                The Art of{" "}
                <span className="text-fuchsia-200">Lasting Love</span>
              </h1>
              <p className="text-lg sm:text-xl text-white mb-8 leading-relaxed">
                Discover the secrets to building a relationship that stands the
                test of time. A comprehensive guide for couples at any stage.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  href="/checkout"
                  className="px-6 py-3 bg-fuchsia-200 text-black rounded-full text-base font-medium hover:bg-fuchsia-300 transition duration-300 hover:scale-110 hover:text-white shadow-xl"
                >
                  Get Your Copy Now
                </Link>
                <a
                  href="#features"
                  className="px-6 py-3 text-white border border-white rounded-full text-base font-medium transition duration-300 hover:bg-white hover:text-black hover:scale-110 shadow-xl"
                >
                  Learn More
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {profileImages.map((src, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                    >
                      <img
                        src={src}
                        alt={`Customer ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className="text-yellow-400 w-5 h-5"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-slate-100">
                    From 500+ happy readers
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-xs sm:max-w-sm md:max-w-md"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-fuchsia-200 rotate-2 scale-105 shadow-xl" />

                <div className="relative bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-xl">
                  <img
                    src="/book.png"
                    alt="E-book Cover"
                    className="w-full rounded-xl mb-5 shadow-md"
                  />

                  <div className="text-center">
                    <p className="text-sm text-slate-600 mb-3">
                      Digital E-Book • Instant Download
                    </p>

                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-2xl font-bold text-slate-800">
                        $19.99
                      </span>
                      <span className="text-base text-slate-500 line-through">
                        $29.99
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="w-4 h-4"
                      />
                      33% OFF Limited Time
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-fuchsia-100 to-pink-200"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-6">
              About This Book
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The Art of Lasting Love is a comprehensive guide that combines
              scientific research, practical advice, and timeless wisdom to help
              couples build and maintain a fulfilling relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: faBookOpen,
                title: "Research-Based",
                description:
                  "Drawing from the latest relationship psychology and decades of research on successful partnerships.",
              },
              {
                icon: faHeart,
                title: "Practical Approach",
                description:
                  "Filled with actionable exercises, conversation starters, and practical tools you can implement immediately.",
              },
              {
                icon: faMedal,
                title: "Expert Author",
                description:
                  "Written by a relationship counselor with 15+ years of experience helping thousands of couples.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/30 backdrop-blur border-1 border-white/40 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shado"
              >
                <div className="mb-4">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="h-8 w-8 text-pink-500"
                  />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              What You Will Learn
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              A powerful guide to help you build deep emotional bonds, express
              love clearly, and handle challenges like a team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                icon: faUsers,
                title: "Effective Communication",
                description:
                  "Learn how to express your needs, listen actively, and resolve conflicts constructively.",
              },
              {
                icon: faHeart,
                title: "Emotional Intimacy",
                description:
                  "Discover techniques to deepen your connection and create a safe space for vulnerability.",
              },
              {
                icon: faBook,
                title: "Love Languages",
                description:
                  "Understand how you and your partner express and receive love for more meaningful interactions.",
              },
              {
                icon: faCheckCircle,
                title: "Conflict Resolution",
                description:
                  "Transform disagreements into opportunities for growth with proven resolution strategies.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start bg-white/20 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow border border-white/30"
              >
                <div className="mr-6 mt-1 shrink-0">
                  <div className="p-4 bg-accent rounded-full shadow-md">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="h-6 w-6 text-white"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/checkout"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-semibold text-lg rounded-full shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-xl"
            >
              Get Your Copy Now
              <FontAwesomeIcon icon={faArrowRight} className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-b from-fuchsia-100 to-fuchsia-200"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
              What Readers Are Saying
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Don not just take our word for it. Here is what couples have
              experienced after reading our guide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "This book completely transformed how we communicate. We've been married for 12 years, and I wish we had found this sooner!",
                author: "Sarah & Michael",
                image: "/images/PP6.png",
              },
              {
                quote:
                  "As newlyweds, we wanted to start our marriage on the right foot. This guide gave us the tools to build a strong foundation.",
                author: "James & Emma",
                image: "/images/PP7.png",
              },
              {
                quote:
                  "The practical exercises helped us reconnect after years of growing apart. It's like we're dating again!",
                author: "David & Lisa",
                image: "/images/PP8.png",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/30 backdrop-blur border-1 border-white/40 p-8 rounded-xl shadow-lg transition duration-300 hover:scale-110"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full text-fuchsia-200 overflow-hidden border-4 border-accent">
                    <img
                      src={item.image}
                      alt={item.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-center italic">
                  &quot;{item.quote}&quot;
                </p>
                <p className="text-center font-medium text-gray-800">
                  {item.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Transform Your Relationship?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get instant access to The Art of Lasting Love e-book and start
              your journey toward a more fulfilling relationship today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/checkout"
                className="px-8 py-3 border border-white rounded-full font-medium text-lg shadow-lg transition duration-300 hover:scale-110 hover:bg-white hover:text-black"
              >
                Get Your Copy Now
              </Link>
            </div>
            <p className="mt-6 text-accent-light">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="inline-block w-5 h-5 mr-2"
              />
              30-day money-back guarantee
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
