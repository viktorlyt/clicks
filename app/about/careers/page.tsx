import { FC } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/footer";
import Form from "@/components/form";

const Careers: FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Header Section */}
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="text-4xl mt-10 md:text-6xl font-bold">Join Our Team</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          We&apos;re always looking for talented and passionate individuals to join our team. Explore our current job openings and find out more about life at The Clicks.
        </p>
      </div>

      {/* Open Positions Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Current Job Openings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Example Job Position */}
          <div className="bg-neutral-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold">Frontend Developer</h3>
            <p className="mt-2 text-lg text-neutral-300">
              We are looking for a talented frontend developer who is passionate about building scalable web applications. 
              Join our team and help us create amazing digital experiences.
            </p>
            <Link 
              href="/careers/frontend-developer"
              className="inline-block mt-4 bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Repeat for other positions */}
          <div className="bg-neutral-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold">Digital Marketing Specialist</h3>
            <p className="mt-2 text-lg text-neutral-300">
              Help us craft and implement effective marketing strategies to elevate our clients&apos; brands. 
              We&apos;re looking for a creative and data-driven marketing expert.
            </p>
            <Link 
              href="/careers/digital-marketing-specialist"
              className="inline-block mt-4 bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Add more job positions as needed */}
        </div>
      </div>

      {/* Life at The Clicks Section */}
      <div className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">Life at The Clicks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <Image
                src="/images/team.jpg"
                alt="Life at The Clicks"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg text-neutral-300">
                At The Clicks, we believe that our people are our greatest asset. We foster a collaborative, inclusive, and dynamic work environment where creativity and innovation thrive. 
                Whether you’re working on a challenging project or celebrating a team milestone, life at The Clicks is both rewarding and fulfilling.
              </p>
              <p className="mt-4 text-lg text-neutral-300">
                We invest in our employees’ growth and provide opportunities for continuous learning, professional development, and career advancement. Join us, and let&apos;s build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Our Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-neutral-800 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold">Health & Wellness</h3>
            <p className="mt-2 text-neutral-300">
              Comprehensive health and wellness plans to keep you and your family healthy.
            </p>
          </div>
          <div className="bg-neutral-800 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold">Career Growth</h3>
            <p className="mt-2 text-neutral-300">
              Opportunities for professional development and career advancement.
            </p>
          </div>
          <div className="bg-neutral-800 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold">Work-Life Balance</h3>
            <p className="mt-2 text-neutral-300">
              Flexible work hours and remote work options to support your work-life balance.
            </p>
          </div>
          {/* Add more benefits as needed */}
        </div>
      </div>

      {/* Contact Form Section */}
      <Form />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Careers;