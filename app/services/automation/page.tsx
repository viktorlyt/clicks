import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import Link from "next/link";
import Image from "next/image";

const MarketingAutomation: FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Header section with form */}
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="text-3xl mt-10 md:text-5xl font-bold">Marketing Automation Services</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Streamline your marketing processes, improve efficiency, and drive better results with our marketing automation solutions.
        </p>
        <div className="mt-10 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Get a Free Marketing Automation Consultation</h2>
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
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">What is Marketing Automation and Why Does It Matter?</h2>
            <p className="text-lg mb-4">
              Marketing automation involves using software to automate repetitive marketing tasks, such as email campaigns, social media posting, and ad management. 
              It allows businesses to nurture leads, personalize marketing messages, and efficiently manage marketing workflows.
            </p>
            <p className="text-lg mb-4">
              By automating your marketing processes, you can free up valuable time, ensure consistency across channels, and focus on more strategic initiatives 
              that drive growth and profitability.
            </p>
            <p className="text-lg">
              Our marketing automation services are designed to help you implement the right tools and strategies to streamline your marketing efforts, 
              improve customer engagement, and achieve better results.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/ma.jpg"
              alt="Marketing Automation Explanation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Why Marketing Automation Matters Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 bg-neutral-900">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Why Marketing Automation Matters?</h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Marketing automation is crucial for businesses looking to scale their marketing efforts, improve efficiency, and deliver personalized experiences at scale. 
          With the right strategy, automation can help you save time, reduce costs, and drive better results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Efficiency and Productivity</h3>
            <p>
              Marketing automation streamlines your processes, allowing your team to focus on high-impact activities that drive growth.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Personalization at Scale</h3>
            <p>
              Automation allows you to deliver personalized messages to your audience based on their behavior and preferences, improving engagement and conversions.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Better Data Management</h3>
            <p>
              Automation tools help you collect, analyze, and leverage data more effectively, leading to more informed decisions and better marketing outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Our Marketing Automation Services Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Our Marketing Automation Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Automation Strategy Development</h3>
            <p>
              We help you develop a tailored marketing automation strategy that aligns with your business goals and maximizes the impact of your marketing efforts.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Email Automation</h3>
            <p>
              We set up automated email campaigns that nurture leads, re-engage customers, and drive conversions with personalized messaging.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Lead Scoring and Nurturing</h3>
            <p>
              Our lead scoring and nurturing services ensure that your sales team focuses on the most qualified leads, improving conversion rates.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">CRM Integration</h3>
            <p>
              We integrate your marketing automation tools with your CRM to ensure seamless data flow and better alignment between sales and marketing.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Social Media Automation</h3>
            <p>
              We automate your social media posting, engagement, and monitoring to ensure consistent activity and maximize your social presence.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Analytics and Reporting</h3>
            <p>
              Our detailed reports and analytics help you track the performance of your automated campaigns and make data-driven improvements.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 text-center bg-black">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Automate Your Marketing and Drive Growth?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact us today to learn more about our marketing automation services and how we can help you streamline your processes and achieve better results.
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

export default MarketingAutomation;
