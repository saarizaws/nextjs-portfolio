"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Summer Clothing Website",
    description: "Explore and Buy Clothes",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://next-ecommerce-front.vercel.app",
    previewUrl: "https://next-ecommerce-front.vercel.app",
  },
  {
    id: 2,
    title: "BookWorm Blog Website",
    description: "Read Blogs About Anything and Everything",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://bookworm-light-nextjs.vercel.app",
    previewUrl: "https://bookworm-light-nextjs.vercel.app",
  },
  {
    id: 3,
    title: "Classy Garments Shop",
    description: "Shop Classic Apparel",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://nextjs-ecommerce-two-ashen.vercel.app",
    previewUrl: "https://nextjs-ecommerce-two-ashen.vercel.app",
  },
  {
    id: 4,
    title: "E-Shopping Website",
    description: "Buy Clothes, Shoes, Accessories",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://next-e-commerce-example.vercel.app",
    previewUrl: "https://next-e-commerce-example.vercel.app",
  },
  {
    id: 5,
    title: "Breaking News Website",
    description: "Stay Aware of the World Around You",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://nextjs-news-app-ruby.vercel.app",
    previewUrl: "https://nextjs-news-app-ruby.vercel.app",
  },
  {
    id: 6,
    title: "Live News Website",
    description: "Latest and Accurate News",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://live-news-m9rkg54ur-akashkoodali9-gmailcom.vercel.app",
    previewUrl: "https://live-news-m9rkg54ur-akashkoodali9-gmailcom.vercel.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Our Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
