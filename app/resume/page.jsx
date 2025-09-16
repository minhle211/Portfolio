"use client";

import { Description } from "@radix-ui/react-dialog";
import { LocaleRouteNormalizer } from "next/dist/server/normalizers/locale-route-normalizer";
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

//about data
const about = {
  title: 'About me',
  description: " Hi, I’m Minh Le! I love building clean, creative web applications that make life easier and more engaging. With experience in Java, JavaScript, React, and Next.js, I enjoy learning new tools and tackling challenges through problem-solving and collaboration. I’m excited to find a Summer 2026 internship where I can grow as a developer and contribute to meaningful projects.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Leo Le"
    },
    {
      fieldName: "Phone",
      fieldValue: "(959)-242-3969"
    },
    {
      fieldName: "Email",
      fieldValue: "minh.quang.le@tcu.edu"
    },
    {
      fieldName: "Personal Email",
      fieldValue: "minhle2112006@gmail.com"
    },
  ]
}

const education={
  title: "My education",
  description: 
  "Texas Christian University — B.S. in Computer Science & Mathematics (Expected May 2028) | GPA: 4.0",
  items: [
    {
      institution: "Texas Christian University",
      degree: "Bachelor",
      duration: "2024-2028"
    },
    {
      institution: "MIT xPro",
      degree: " Cybersecurity Professionals Certificate",
      duration: "2025-2026"
    }
  ]
}
const skills = {
  title: "My skills",
  descriptions: "Java | JavaScript | HTML5 | CSS3 | React | Next.js | TailwindCSS | Git | VSCode",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "Html5",
    },
    {
      icon: <FaCss3/>,
      name: "Css3",
    },
    {
      icon: <FaJs/>,
      name: "Js",
    },
    {
      icon: <FaReact/>,
      name: "React",
    },
    {
      icon: <SiNextdotjs/>,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss/>,
      name: "Tailwind.css",
    },
    {
      icon: <FaFigma/>,
      name: "Figma",
    },
  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import {ScrollArea} from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Scope_One } from "next/font/google";



const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition: {delay:2.4, duration: 0.4, ease:"EaseIn"},}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* Education */}
            <TabsContent value="education">
              <div>
                <h3 className="flex flex-col gap-[30px] text-center xl:text-left">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item,index)=>{
                      return(
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.instituion}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/80">{item.duration}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
              
            </TabsContent>  
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 skills="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.descriptions}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index)=> {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
              </TabsContent>  
            {/* About me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-8">{about.description}</p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((item,index)=> {
                        return (
                          <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                            <span className="text-white/60">{item.fieldname}</span>
                            <span className="text-xl">{item.fieldValue}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
            </TabsContent>  
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume