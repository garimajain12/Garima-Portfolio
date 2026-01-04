import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1" data-aos="fade-right">
          <h1 className="text-5xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600">Garima Jain</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A passionate Full Stack Developer skilled in building dynamic, scalable, and user-friendly web applications.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
        
        <div className="flex-1" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600"
            alt="Developer"
            className="w-full rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}