import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import Link from "next/link";
import Image from "next/image";

const StrategyDevelopment: FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Header section with form */}
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="text-3xl mt-10 md:text-5xl font-bold">Strategy Development Services</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Crafting tailored strategies to drive your business forward and achieve long-term success.
        </p>
        <div className="mt-10 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Get a Free Strategy Consultation</h2>
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
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">What is Strategy Development?</h2>
            <p className="text-lg mb-4">
              Strategy development is the process of defining your company’s direction and making decisions on allocating resources to pursue this strategy. 
              It involves setting goals, determining actions to achieve these goals, and mobilizing resources to execute the actions.
            </p>
            <p className="text-lg mb-4">
              Simply put, it’s about knowing where your business is going and how to get there. A well-crafted strategy aligns your team’s efforts, 
              ensures everyone is working towards the same objectives, and provides a roadmap to guide your business toward long-term success.
            </p>
            <p className="text-lg">
              Our strategy development services are designed to help you clarify your vision, develop actionable plans, and navigate the challenges of achieving your goals.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/stratdev.jpg"
              alt="Strategy Development"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Why Strategy Matters Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 bg-neutral-900">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Why Strategy Development Matters?</h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          A well-defined strategy is essential for the growth and sustainability of any business. It provides a clear focus, helps in resource allocation, 
          and ensures that all efforts are aligned with the company’s long-term vision.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Clear Direction</h3>
            <p>
              A well-crafted strategy gives your business a clear direction, guiding all your decisions and actions toward achieving your goals.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Resource Allocation</h3>
            <p>
              Effective strategy development ensures that your resources are used efficiently and are directed towards the most impactful initiatives.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Long-Term Success</h3>
            <p>
              A solid strategy helps your business achieve long-term success by keeping everyone aligned and focused on the same objectives.
            </p>
          </div>
        </div>
      </div>

      {/* Our Strategy Development Services Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Our Strategy Development Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Business Strategy</h3>
            <p>
              We help you define your company’s vision, mission, and long-term objectives, ensuring that your business strategy is aligned with your goals.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Market Analysis</h3>
            <p>
              Our market analysis services provide insights into your industry, competitors, and market trends, helping you make informed strategic decisions.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Financial Planning</h3>
            <p>
              We assist in developing financial plans that support your strategic goals, ensuring your business is financially prepared for growth.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Risk Management</h3>
            <p>
              We help identify potential risks and develop strategies to mitigate them, ensuring your business is resilient and prepared for challenges.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Operational Strategy</h3>
            <p>
              Our operational strategy services focus on improving efficiency and effectiveness, ensuring that your operations are aligned with your strategic goals.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Performance Measurement</h3>
            <p>
              We develop metrics and KPIs to track your progress, ensuring that your strategy is delivering the desired results.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 text-center bg-black">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Elevate Your Business Strategy?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact us today to learn more about our strategy development services and how we can help your business succeed.
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

export default StrategyDevelopment;
