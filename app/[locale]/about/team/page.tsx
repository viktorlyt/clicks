import { FC } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Footer from "@/components/footer";
import Block4 from "@/components/block4";
import ContactBlock from "@/components/contactBlock";
import { Metadata } from "next";
import TeamSection from "@/components/TeamSection";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Meet the Clickers Driving Success for Our Clients",
  description:
    "The Clicks team is a fusion of passion, experience, and innovation, where every 'Clicker' is not just an employee but a driving force behind success. We are professionals who aren't afraid to challenge traditional marketing approaches, creating solutions that change the game.",
};

const Team: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Main content wrapper */}
      <div className="container md:px-10 pt-32">
        {/* Header Section */}
        <div className="bg-[var(--bgnew)] pt-10">
          <div className="flex flex-col gap-8 mt-10 md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
                Meet the Clickers Driving Success for Our Clients.
              </div>
              <p className="mt-4 text-sm md:text-m font-normal text-[var(--gray-blue)] light:text-[var(--gray-40)] text-justify">
                The Clicks team is a fusion of passion, experience, and
                innovation, where every &quot;Clicker&quot; is not just an
                employee but a driving force behind success. We are
                professionals who aren&apos;t afraid to challenge traditional
                marketing approaches, creating solutions that change the game.
                Our arsenal includes cutting-edge technologies, analytical
                methods, and creative strategies that help businesses attract,
                retain, and amaze their customers. Each Clicker brings their
                unique expertise, combining efforts to create marketing
                campaigns that not only meet goals but exceed them.
              </p>
              <p className="mt-4 text-sm md:text-m font-normal text-[var(--gray-blue)] light:text-[var(--gray-40)] text-justify">
                At the heart of our work is a partnership with clients, built on
                mutual trust and understanding. We strive to ensure that every
                project is a step towards long-term success. Clickers are not
                just task executors; they are your strategic partners, helping
                to build a sustainable digital ecosystem for your business. We
                believe that together with you, we can not only keep pace with
                the times but also set trends in digital marketing.
              </p>
              <div className="mt-8 flex justify-center md:justify-start relative z-20">
                <Link
                  href="/about/careers"
                  className="inline-block bg-[var(--ocean-blue)] #bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
                >
                  Join Our Team
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center mt-24 md:mt-0 relative">
              <div className="absolute inset-0 flex justify-center items-center z-10">
                <Image
                  src="/images/team.png"
                  alt="Background Image"
                  layout="intrinsic"
                  width={600}
                  height={600}
                  objectFit="cover"
                  className="object-cover rounded-2xl w-full"
                />
              </div>
              <Image
                src="/images/happy-team.jpg"
                alt="Happy Team"
                width={500}
                height={500}
                className="rounded-2xl object-cover relative z-10"
                priority
              />
            </div>
          </div>
        </div>

        <TeamSection />

        <Block4 />

        <div className="flex justify-center mb-32">
          <Link
            href="/about/careers"
            className="inline-block bg-[var(--ocean-blue)] #bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
          >
            Our Current Job Openings
          </Link>
        </div>
      </div>

      <ContactBlock />

      <Footer />
    </div>
  );
};

export default Team;
