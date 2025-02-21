import "../../styles/globals.css";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution for electronic products, featuring a modern UI and seamless shopping experience.",
    image:
      "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-thatguycraig000-1563356.jpg&fm=jpg",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Agency Website",
    description:
      "A dark-themed, modern agency website with dynamic animations and creative portfolio showcase.",
    image:
      "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-thatguycraig000-1563356.jpg&fm=jpg",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "Task Management App",
    description:
      "A minimal, intuitive task management mobile app with calendar integration and team collaboration features.",
    image:
      "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-thatguycraig000-1563356.jpg&fm=jpg",
    tags: ["React Native", "TypeScript", "Node.js"],
  },
];

export default function page() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-6">
        {/* Your existing projects section */}
        <section id="projects" className="py-20 bg-quaternary">
          <div className="container mx-auto px-6">
            <div className="text-center py-16 bg-primary text-black">
              <div className="text-3xl font-bold">Welcome to My Portfolio</div>
              <p className="mt-4 text-xl">
                Showcasing my best projects and skills
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index}>
                  <div className="max-w-96">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="cover rounded-md"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-[#578E7E] text-white text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
