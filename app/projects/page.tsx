import { Link } from "lucide-react";
import Card from "../components/card";

const projects = [
  {
    "name": "Ayoohoo Family Health Game",
    "description": "Designed and developed a gamification platform promoting healthy habits in children through interactive gameplay, including daily challenges, rewards, and habit-tracking features.Drove rapid adoption, achieving 5,000 monthly active users within the first month, showcasing its strong engagement and social impact.",
    "link": {
      "href": "https://games.ayoohoo.com",
      "label": "games.ayoohoo.com"
    },
    "technology_used": ["AngularJS", "NodeJS", "MongoDB", "TailwindCSS", "AWS"],

    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5acS7kkTdLmKD3waTYJhluCyTymyp13ZJg&s",
    "year": 2024
  },
  {
    "name": "Destination Changer",
    "description": "A Web app that allows users to shorten URLs and track the number of clicks on the shortened URL. The app also provides a QR code for the shortened URL.",
    "link": {
      "href": "https://destination-changer.vercel.app/",
      "label": "destination-changer"
    },
    "technology_used": ["Nextjs", "Nodejs", "MongoDB", "TailwindCSS", "Vercel"],

    "logo": "https://pranavtej.github.io/Pranavteja/project-logos/6.png",
    "year": 2023
  },
  {
    "name": "Health Connect",
    "description": "An essential tool for healthc are coordinators that streamlines access and ensures secure sharing of confidential patient health data, enhancing care coordination.",
    "link": {
      "href": "https://bit.ly/HealthConnect_GitRepo",
      "label": "Health Connect Project"
    },
    "technology_used": ["Python", "Flask", "IBM Cloud", "Docker", "Redhat"],

    "logo": "https://pranavtej.github.io/Pranavteja/project-logos/1.png",
    "year": 2023
  },
  {
    "name": "Bank App",
    "description": "A web-based banking application that allows users to manage their accounts,balances , administration, and view account history. The app also provides a secure login system and a user-friendly interface. this app is developed for the IFL pvt ltd .",
    "technology_used": ["Nodejs", "MongoDB", "Docker", "AWS", "EJS"],
    "link": {
      "href": "https://demo-ifl.takhsalabs.in",
      "label": "demo-ifl.takshalabs.in"
    },
    "logo": "https://pranavtej.github.io/Pranavteja/project-logos/5.png",

    "year": 2023
  },
  {
    "name": "Devjobs",
    "description": "Developed a robust web-based job search and application platform, empowering users to efficiently find and apply for relevant job opportunities. Implemented a user-friendly interface on the platform, allowing job seekers to search for positions based on their preferences and qualifications.",
    "link": {
      "href": "http://github.com/Pranavtej/devjobs",
      "label": "Devjobs Project"
    },
    "logo": "https://pranavtej.github.io/Pranavteja/project-logos/2.png",
    "technology_used": ["React.js", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "Vercel"],

    "year": 2023
  },
  {
    "name": "Cholar",
    "description": "Developed a desktop application for research scientists. Facilitates the identification and characterization of human-long non-coding RNAs.",
    "technology_used": ["Electron.js", "Node.js", "Shell Script"],
    "link": {
      "href": "http://65.0.200.229/cholar",
      "label": "Cholar Project"
    },
    "logo": "https://pranavtej.github.io/Pranavteja/project-logos/3.png",

    "year": 2022
  },
  {
    "name": "EduTrack",
    "description": "Developed a real-time tracking system for student progress in response to the Government of Maharashtra's problem statement.",
    "technology_used": ["HTML", "CSS", "JavaScript", "MariaDB", "PHP", "Ajax", "AWS", "Machine Learning", "Flutter"],
    "link": {
      "href": "http://65.0.200.229/test_1",
      "label": "EduTrack Project"
    },
    "logo": "https://pranavtej.github.io/Pranavteja/project-logos/4.png",

    "year": 2022
  },
]


export default function Projects() {
  return (
    <div className="my-20 mx-5 sm:mx-0">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <img
              src={project.logo}
              alt={`${project.name} Logo`}
              className="h-8 w-8 relative z-10 rounded-md"
            />
            <h2 className="mt-6 text-base font-semibold text-zinc-800">
              <Card.Link
                href={project.link.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {project.name}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>

            <div className="flex flex-wrap mt-4">
              {project.technology_used.map((skill, index) => (
                <span
                  key={index}
                  className="relative bg-gray-100  text-gray-600 px-2 py-1 rounded-full text-xs font-semibold mr-2 mb-2"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500">
              <Link className="h-4 w-4" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}

      </ul>
    </div>
  );
}
