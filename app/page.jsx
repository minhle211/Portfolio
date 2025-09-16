
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between 
          xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none spec-font">
              <span>Software Engineer</span>
              <h1 className="h1"> Hello I'm <br/> <span className="text-accent">Leo Le</span></h1>
              <p className="max-w-[500px] mb-9 text-white/80">I’m Minh Le, a Computer Science and Mathematics student at TCU (GPA 4.0) with experience in Java, JavaScript, React, and Next.js. I enjoy building clean, user-focused web applications and thrive in collaborative settings where problem-solving and creativity meet. I’m seeking a Summer 2026 internship to apply my skills and contribute to impactful projects.</p>
              {/* Button and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a variant="outline" download href="/LeoLe-Resume.docx" size="lg" className="bg-accent text-primary-foreground shadow-xs hover:bg-accent-hover h-[56px] px-8 text-sm uppercase tracking-[2px] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold transition-colors ring-offset-white border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary">
                  <span>Download CV</span>
                  <FiDownload className="Text-xl"/>
                </a>
                <div className="mb-8 xl:mb-0">
                    <Social 
                      containerStyles="flex gap-6" 
                      iconStyles="w-9 h-9 border border-accent 
                      rounded-full flex justify-center items-center 
                      text-accent text-base hover:bg-accent hover:text-primary
                       hover:transition-all duration-500"/>
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo/>
            </div>
          </div>
        </div>
        <Stats/>
    </section>
  );
};

export default Home