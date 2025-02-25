export default function About() {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">About Me</h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8" data-aos="fade-up">
          <p className="text-lg text-gray-700 mb-6">
           I'm a full-stack developer with experience in both backend and frontend technologies. My journey in software development began with a strong foundation in C# and .NET, where I built scalable and efficient backend solutions. Over time, I expanded my expertise to frontend development with React.js, creating dynamic and user-friendly web applications.
          </p>
          
          <p className="text-lg text-gray-700">
            I specialize in ASP.NET Core, MVC architecture, React.js, and SQL, ensuring seamless integration between frontend and backend. I'm passionate about building performant applications, writing clean and maintainable code, and continuously learning to stay updated with modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-right">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">Bachelor in Computer Science</h4>
                <p className="text-gray-600">Poornima College of Engineering</p>
                <p className="text-gray-500">2019 - 2023</p>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-left">
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">Software Engineer</h4>
                <p className="text-gray-600">Nirvana Solutions</p>
                <p className="text-gray-500">Jan-2023 to Sept-2024</p>
              </li>
              <li>
                <h4 className="font-semibold">Frontend Developer</h4>
                <p className="text-gray-600">ThoughtStream Innovation Pvt. Ltd. </p>
                <p className="text-gray-500">July-2022 to Sept-2019</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
