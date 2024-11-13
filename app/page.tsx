"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import Image from 'next/image';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Portfolio Dashboard",
      description: "Analytics dashboard for tracking investment performance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Social Media App",
      description: "Mobile-first social platform with real-time messaging",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen">
      <Hero />

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-[#081E21]"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
          <p className="text-[#F6F5FC] mb-8 text-lg leading-relaxed">
            I'm a passionate developer with over 5 years of experience in creating modern web applications. 
            My expertise spans across front-end and back-end development, with a special focus on creating 
            intuitive user experiences and scalable architectures.
          </p>
          <motion.div 
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-[#952A52] hover:bg-[#952A52]/90 text-white">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        ref={skillsRef}
        initial="hidden"
        animate={skillsInView ? "show" : "hidden"}
        variants={container}
        className="py-20 bg-[#F6F5FC]"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A484F] mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div className="bg-white p-4 rounded-lg mb-2 shadow-lg">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <span className="text-[#1A484F] font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        ref={projectsRef}
        initial="hidden"
        animate={projectsInView ? "show" : "hidden"}
        variants={container}
        className="py-20 bg-[#1A484F]"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <Card className="bg-[#081E21] border-none text-white overflow-hidden">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="relative h-48 mb-4"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </motion.div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-[#F6F5FC] mb-4">{project.description}</p>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="secondary" className="w-full bg-[#952A52] hover:bg-[#952A52]/90 text-white">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-[#081E21]"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Get in Touch</h2>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#1A484F] rounded-lg p-8"
          >
            <div className="grid gap-6">
              <motion.div whileHover={{ scale: 1.02 }}>
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#081E21] border-[#952A52] text-white"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#081E21] border-[#952A52] text-white"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-[#081E21] border-[#952A52] text-white"
                  rows={5}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="w-full bg-[#952A52] hover:bg-[#952A52]/90 text-white">
                  Send Message
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 bg-[#081E21]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-[#F6F5FC]">© 2024 John Doe. All rights reserved.</p>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="ghost" size="icon" className="text-[#F6F5FC] hover:text-white hover:bg-[#952A52]">
                    <Icon className="h-5 w-5" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}