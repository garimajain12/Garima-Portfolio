
import store from '../assets/store.jpg'
import snake from '../assets/snake.jpg'
import blog from '../assets/blog.jpg'

const projects = [
 
  {
    title: 'Electronics Store',
    description: 'Built a secure e-commerce platform using MongoDB, Express.js, React.js, and Node.js, featuring JWT authentication, debounced search, an admin panel with CRUD operations, and Stripe payment integration. Designed with MVC architecture and styled using Bootstrap for a responsive UI.',
    image: store,
    technologies: ['HTML5', 'CSS3', 'JavaScript','React.js','MERN'],
    demoUrl: 'https://electronicsstore-frontend.netlify.app/',
    githubUrl: 'https://github.com/garimajain12/Electronic-Store',
  },
  {
    title: 'Snake Game',
    description: 'Developed a Snake game using HTML, CSS, and JavaScript. Used the DOM and animation frames for smooth gameplay. Implemented keyboard controls to move the snake and a growth mechanic when consuming food.',
    image: snake,
    technologies: ['HTML5', 'CSS3', 'Bootstrap','JavaScript'],
    demoUrl: 'https://reversingsnake.netlify.app/',
    githubUrl: 'https://github.com/garimajain12/Snake_Game',
  },
  {
    title: 'My Blogs',
    description: 'Developed a feature-rich blogging platform using React.js and Redux for efficient state management. Enabled users to create, edit, delete, and like posts, with real-time updates for an interactive user experience. Optimized for both desktop and mobile, ensuring seamless accessibility and responsiveness.',
    image: blog,
    technologies: ['HTML5', 'CSS3', 'JavaScript','React.js','Redux'],
    demoUrl: 'https://my-blogs-12.netlify.app/',
    githubUrl: 'https://github.com/garimajain12/Myblogs',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
/* becodewala */