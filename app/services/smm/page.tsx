import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import Link from "next/link";
import Image from "next/image";

const SMM: FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Header section with form */}
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="text-3xl mt-10 md:text-5xl font-bold">Social Media Marketing (SMM) Services</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Build your brand, engage with your audience, and drive traffic through our expert SMM strategies.
        </p>
        <div className="mt-10 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Get a Free SMM Consultation</h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">What is SMM and Why Does It Matter?</h2>
            <p className="text-lg mb-4">
              SMM, or Social Media Marketing, involves using social media platforms to connect with your audience, build your brand, 
              and drive traffic to your website. It’s an essential tool for businesses looking to grow their online presence.
            </p>
            <p className="text-lg mb-4">
              Social media platforms like Facebook, Instagram, Twitter, and LinkedIn are where people spend a significant amount of their time online. 
              By leveraging these platforms, you can reach your target audience, engage with them, and build strong customer relationships.
            </p>
            <p className="text-lg">
              Our SMM services are designed to create and manage top-performing social media campaigns that help you achieve your business goals.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/smm.jpg"
              alt="SMM Explanation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Why SMM Matters Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 bg-neutral-900">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Why SMM Matters?</h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Social media is one of the most powerful tools for connecting with your audience. With the right strategy, SMM can help you 
          increase brand awareness, drive website traffic, and generate leads.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Brand Awareness</h3>
            <p>
              SMM helps you build brand recognition by consistently sharing valuable content and engaging with your audience on social media platforms.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Audience Engagement</h3>
            <p>
              By engaging with your audience through social media, you can build trust, foster loyalty, and create a community around your brand.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Lead Generation</h3>
            <p>
              Our SMM strategies are designed to convert social media followers into leads, helping you grow your customer base.
            </p>
          </div>
        </div>
      </div>

      {/* Our SMM Services Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Our SMM Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Content Creation</h3>
            <p>
              We create engaging and relevant content that resonates with your audience and drives engagement on social media.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Social Media Management</h3>
            <p>
              Our team manages your social media profiles, ensuring consistent activity and engagement with your audience.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Paid Social Advertising</h3>
            <p>
              We design and manage targeted ad campaigns on social media platforms to increase your reach and drive conversions.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Community Management</h3>
            <p>
              We help build and manage online communities around your brand, fostering engagement and loyalty.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Social Media Audits</h3>
            <p>
              We conduct comprehensive audits of your social media presence, providing insights and recommendations for improvement.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Analytics & Reporting</h3>
            <p>
              Our detailed analytics and reports help you understand the performance of your social media campaigns and make data-driven decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 text-center bg-black">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Elevate Your Social Media Presence?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact us today to learn more about our SMM services and how we can help your business thrive on social media.
        </p>
        <Link
          href="/about/contact"
          className="inline-block bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
        >
          Get in Touch
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default SMM;
