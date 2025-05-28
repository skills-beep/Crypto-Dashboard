
import { Github, Linkedin, Mail } from "lucide-react";

const DeveloperSection = () => {
  return (
    <div className="glass-card p-6 rounded-lg mt-8">
      <div className="text-center">
        <h3 className="text-xl font-bold font-poppins mb-4 neon-text">
          Developed by Bishal Sharma
        </h3>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <a
            href="https://www.linkedin.com/in/bishal-sharma-12b7211b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neon-blue hover:text-neon-green transition-colors duration-300 hover:scale-105 transform"
          >
            <Linkedin className="h-5 w-5" />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a
            href="https://github.com/skills-beep"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neon-blue hover:text-neon-green transition-colors duration-300 hover:scale-105 transform"
          >
            <Github className="h-5 w-5" />
            <span className="font-medium">GitHub</span>
          </a>
          <a
            href="mailto:bishalsharma153@gmail.com"
            className="flex items-center gap-2 text-neon-blue hover:text-neon-green transition-colors duration-300 hover:scale-105 transform"
          >
            <Mail className="h-5 w-5" />
            <span className="font-medium">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSection;
