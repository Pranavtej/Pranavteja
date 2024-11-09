import { Link } from "lucide-react";
import Card from "../components/card";

const projects = [
  {
    name: "Inncircles",
    role : "Product Developer",
    description:
      "Contributing to the scalable microservices with Node.js, automated CI/CD pipelines, and built client onboarding platform. Contributed to mobile app development with React Native and core product modules, improving system efficiency and client experience.",
    link: { href: "https://inncirclesarena.com", label: "inncirclesarena.com" },
    from : "July 2024",
    to : "Present",
    logo: "https://inncircles.com/favicon.ico"  
   },
  {
    name: "Catalog.fi (Ren Protocol)",
    role : "Software Developer Intern",
    description:
      "Contributed to the advancement of the crypto wallet through React.js, TypeScript,Nodejs, Tailwind CSS.",
    link: { href: "https://catalog.fi", label: "catalog.fi" },
    from : "Oct 2023",
    to : "Mar 2024",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA/FBMVEVd/9YcHSFd/tYaHiF0+9ld/dcOGBoqa10dHCFf/9YfTENz684UGR0dHSJOoY4ZGyAAJiIAFRdpzbVw/todHR8NEBg4iHUfUUcYHyEOFxwfGyEVICEfHB8cGR9a/9Nh+9UhGiJKlIR999gkGR8AEBAAGxcAIxpr4MIAGRgSVENz279XtJ8aICYHOjAAHB0AEg187dQTIScTIh8hSkUkc2IuZ10qa1tQu6MABQwAKyBo8s9p5sYhWExHmoQRST1YsJl73chRlIkaICtDgHJFl4QhX1EmFyINJCF9xrVcn4+K9dx1o5tikIggMTMrQEAAJRiR4sw9XlczoYQyi3KpLAWxAAAK8UlEQVR4nO2cDXvTthbHbctOZRLHpA7UleKXpkmbpqGEXuggt+vKgG7s7sI2vv93uedIeTGN8waOW3rP73kYa0lk/aVj/c+RlRgGQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRD3mHiMERixkSR33Z3iQE1fkyiF87//UbGSxFF/T1EKLVT6MLAcHZHuVKH6pRE7D0UhSrS++kUMag0nNqwFb/jRsCy73bZtG/9oAvgF/Cp5KAqT45evXu1c7My4gB/gVz89lCi1d48qTyqVSm1/AvzQqzx5XQ/uumsF4e6+kZyFrMm9MWEozwdiv/5Q5tDZfex7zOSeOYEBZtR4MHM4p5D5oNHjpPDHgRT++JDCHx9SuIA7Tlp18RrHI8ieY9dyHF0T5bK5QgcadZzEsfA/hhJrlVxqxXhJyzXixImD4+MAr75Q4sYKoWSG4spwqrttEDlu2nG2pCWfWJW1cM0kdvp7l/1AlbcLXvxtChNr9L57OgKlIBBipOyoVQLxsu6/L5/sXx4HS66/qULLxagMRj93a0c/jRsueQbxiigQLhscn/SE6F1dB4u3lTZUCMEAIZK0nz4PmTz6xR5LLHvh0QKToL9X8XzTlM+OAxc7ltePzRTCsEE7Qftdz+TMR4mJWmlKj1JUmNj9k96hkGHKeyd9Oy5EoWoiGB40QhE1m758fNrGl5U9hTEuLI59fdmrHTbPm61I9vb6gZs/0t+w0gzfNl5wAS8U/ouxxJLBzVzXvt7rmR4Lm60Wk2nlBAI1d6w3Vpi0Dxq/DkTKpJmmA5hF292unBnT7oMBxkn/qsJVj7mq2ivPrgMrCeZdYx2FaplSm8Xgg+13HTNSzao/4eO6HRvJOFatrS+r6gpgWCCwG2b2JXzWu+oHuPd7W+Lac6gzI1hFuyGftmz6TH7+JVB7rmr0rC0rtHQeZcAqKuHaM4VmNDiDe3HcjW9RCGMHnuBUD55Lz2RZieefT9swsJBGwRhsedFR2QWQ9C97POWZSeRp6unl5jZrKrS0J7QPOoMoMmctm6bnyaNTe9zYlhdVFaKxmsGG75lcTKOpZZriRpzlWf9aCl1H+akDRj9IwQibM33QsgiPTtuJ7sF2JeLNEBtgE1dSmOeS30y6wVssDKN0cJZj/esohFR0bPRdGQkWstZk7MA04KdIHn3U1u8sLmKKUYidsa8fQYia8pwdTke6FcrQTCNWmbf+tRRicFij4UEn9CIWyplCU5hSNptsYv0lpG9o9BXmiRaHacsspiGK8P3KnPWvFaW4hgTDtx3GVWPNWZQCTVDIwjdK4vYFWnb/shF5YShuDtlv005DJLVa0A92M2f9666lTvvg9SAyVQqRUchM0WqGIfNfvDnNWceKF2jZ9ecvfJg+6EeLZfqh3BmEmJVnUC9CPI/jyUkWK8wYPTT87jX39b2XsUM1dk24HhO9i1F+1lQsTlD92A19fPTAmq1MVyZE3tkVVP2T2nz1HGqjh1W0K3Oa0/GPShuv+sm82xaMi3d60q73JONfrwezDnlibP3QG3cNhcroLat60JEhi+YVwhom4c2sczEcOerV25WIlp/YB0dSRBA4zfkOgZTUa+z1IVseG+NyhdrondH7Tgotzg8Z+JAMuRg09qoBiHMcZ8urKUaJm7TfP94XEctTCKsN19bvove7KxTithpWE2j0Imv0XzUI6dKHa0xMy1Cog8Sun9UE13fIrQ6BMYrUU1W/oYxxiUJl9JYy+gHMIFT18wpDSGm8s1fHgZ5u3IXbskK9hrTrXci88xVKEySi9bvquMUSheqmsuzh0+csjeB9rfn2GOj2Gzt9VbRYZbiFChK8F993ZS1nyPHxLiz3YBqw3Kg7cVmUYpo5NnpcnpvzUcokY70P1QRrC1QYG9s8SeVOonTkxEb74HkmpZkNOdoX+NfU+uOJH/LZa3DJnaylcA82foV6Ht6XtR9tsAxeHHb2hiAQE1cXFMZlbdm4iV3vvgCLbmJOJdnXPVOSa1D1477j7pEvwFqmEiEVOmzKsFMP7HFFLyb1fGYUcKRC0Jd2Lqqq+i1J2ESf64IvgvXzyMNhzgvXyKtc9XHwd98wnKPZJEpxyKQPChMjqWJF7+W8HTQyCF00ehXNZSvE7CIYwnIDuT+snjn3D+ST6IuBhadN0maYDVPRYix9XU/ipHrQg0wmZ4CU0Udg9DvXtjPdWigN3DWBdTBoK+tXZ2XmJeKKqqwfFELynFEoBEwpKnQgk/HTKEehNvp00AOjt8ow+jmFDu6ZOIn9c7cmINXKd+ooReu38cRQq8l5tuQ7ZylEqTZ6c1HmkPoNMHq9QVOywulhUQesf18IPt9FjmEWofVf//4mhDmcbXlwwc7PQ7/z8Q+o6CGTyQtyzP4E+GBV7+njpcoVaODOCmZc2vrzchFUyLjwKnv/+Q2MLjOHnKNCs/Hn2w5knFDC593Goen5vZ1jnbqWtiM8U2doczIcFagybzHEmi70Pe6f/TfkuPDMFEK+B94uP/VwV4DlZvC4koLR4z2ojaLkE9OYW6hLjiCZQuufbn5nFDZ10W8OPKEVTgNYcKieue+nmNqin2YVcu2nTBk93Or6OHgclz+PE7T1owSUlN3n1ElJDhiwyt/nV2AYF6EGJsV70Nr+Hv5qfRPrh2QTc9KcNWMjcEIhdE02NvrSnX5e4dT6oT7Hqv/7BHLcdAK/NDsXfdsx7sAkbpO1ftzoNPN2bjZSaIZQXvrK6K1463sW6yjMWr/Itf6NgPeDiTY+DPXxmW1vPK3D5DMUdh03Nr5bIQgUfmenGpRtD8vQ1p+060fSz18714eFPmYyx0l8P+YvY/2Jg6aRW/VvplAbvTMx+jvnlvVjAvdt06jredPUFb2hT7GhxFKMXj8TxZ0S9xa4c+KqTmBqDIHaHaQReIa4uUk3EwjmD+9Lb1RF7+L8ua4SaN2+pmtoBynySaJqaUXMqH/Ge1GIyPNwLjadRO4PIIuFRUbfg0uvpf51Gx/us5agBnbUrvdCLxVQVsjVojJg/oq7rN2L4ciK1XPQxejOFPrxRdddrdBSu33gi5/POT7EFZtNIYZoGh7BImOop91LJI61FbrU4gGI2FVnZZbhOgauqEeSQ+J8s1pVBg5lsPB7H4aBG1vLZxCuAxItNynyc7Y4Wu6oel1dxXA4rP71Z4XhDsRGAmGdYX7t79+HKy+BV6mO1Af7Cl1p4jj55+TRKv4FXD36JFn+/uJyiYxVPu2tvgay9xJu1iLvQ31E6Eu3tgS/Vqn5URTtS1mpeTz3oc0ScAfAD+V5L6z50FRl2aVqtbOTKhbGxWYErv20cqM+dJaLiecWmOcNBhHHED0UG9UY0IKAet9PbzCpwRMQ3sJLMTOFygMf1BR4ZBGXreDpk2WdXlTOrz2HuhWdEa1oyavtVYvde4vHCv3vkFAkqNAlhaSQFN4ppJAUksK7hxSSQlJ495BCUvj/rDDnOMKdwFUFXOgehmMZif20l94PiV4q8dGGYRW3m6jO5tpfupX7QvcE92kK/EI7pTD55+LV+Iu6Li7u9H92dl5+GakvPShMod4RTtpD+36AX/VW8GMZvWwVGPffR5IU/V12+iMReP74foARqr6EsWCZ6BrOvUCPesEK8YzuXZ/dmbGNJ/z4TR8ln0NezGSs79F5FIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIJ4SPwPu6U4vLX2iEkAAAAASUVORK5CYII=",
  },
  {
    name: "Myally.ai",
    role: "Backend Developer",
    description:
      "Collaborated with Dr. A. Naveen, Founder of My Ally, to implement an automated accounting system, reducing manual workload by 90%.",
    link: { href: "https://myally.ai", label: "myally.ai" },
    from : "April ",
    to :  "July 2023",
    logo: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/rf0xa2kvnxjj0gsaws7y",
  },
  {
    name: "University of Hyderabad",
    role: "Research Intern",
    description:
      "Collaborated with esteemed researchers at UOH to develop a high-impact desktop application using Electron.js and Nodejs. Achieved a 75% reduction in manual work by implementing intuitive features in the application.",
    link: { href: "https://uoh.", label: "uoh.com" },
    from : "June ",
    to :  "September 2022",
    logo: "https://w7.pngwing.com/pngs/219/230/png-transparent-university-of-hyderabad-jawaharlal-nehru-architecture-and-fine-arts-university-central-university-student-student-text-people-logo.png",
  },
  {
    name: "MCR Web Solutions",
    role : "Project Intern",
    from: "March ",
    to : "June 2022",
    description:
      "Contributed to the development of the innovative e-commerce application, 'Bhimavaram Online'. Implemented robust features to enhance functionality.",
    link: { href: "https://mcr.org.in", label: "mcr.org.in" },
    logo: "data:image/jpeg;base64,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",
  },
];

const responsibilities = [
  {
      role: "Web Lead",
      company: "Google Developer Student Clubs",
      from: "Oct 2023",
      to: "Present",
      description:
      "",
    link: { href: "https://gdsc.community.dev/u/mr6dh8/", label: "https://gdsc.community.dev/pranav" },
    logo: "data:image/png;base64,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",

  }];

const education = [{
    institution: "SRKR Engineering College",
    degree: "Bachelor of Technology",
    major: "Information Technology",
    from: "2020",
    to: "2024",
    logo: "data:image/jpeg;base64,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",
    link: { href: "https://srkrec.edu.in", label: "srkrec.edu.in" },
    grade : "8.4/10",
    coursework  : "DSA , Full stack",
}]

export default function About() {
  return (
    <>
    <div className="my-20 mx-5 sm:mx-0">
    <h1 className="text-sm tracking-tighter text-zinc-800 sm:text-xl font-medium mb-8">
      Experience
    </h1>
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
          <h3 className="mt-2 text-base font-medium text-zinc-600">
            <Card.Link
              href={project.link.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {project.role}
            </Card.Link>
          </h3>
          <Card.Description>{project.description}</Card.Description>
          <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition">
            <span className="ml-2">{project.from } - {project.to}</span>
          </p>
          <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500">
            <Link className="h-4 w-4" />
            <span className="ml-2">{project.link.label}</span>
          </p>
        </Card>
      ))}
    </ul>
  </div>
     <div className="my-20 mx-5 sm:mx-0">
     <h1 className="text-sm tracking-tighter text-zinc-800 sm:text-xl font-medium mb-8">
       Education
     </h1>
     <ul
       role="list"
       className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
     >
       {education.map((project) => (
         <Card as="li" key={project.institution}>
           <img
             src={project.logo}
             alt={`${project.institution} Logo`}
             className="h-8 w-8 relative z-10 rounded-md"
           />
           <h2 className="mt-6 text-base font-semibold text-zinc-800">
             <Card.Link
               href={project.link.href}
               target="_blank"
               rel="noreferrer noopener"
             >
               {project.institution}
             </Card.Link>
           </h2>
           <h3 className="mt-2 text-base font-medium text-zinc-600">
             <Card.Link
               href={project.link.href}
               target="_blank"
               rel="noreferrer noopener"
             >
               {project.degree}
             </Card.Link>
           </h3>
           <p className="relative z-10  flex items-center text-sm font-medium text-zinc-400 transition">
             <span className="">{project.major} - {project.grade}</span>
           </p>
           <Card.Description>Course Work : {project.coursework}</Card.Description>
           <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition">
             <span className="ml-2">{project.from } - {project.to}</span>
           </p>
           <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500">
             <Link className="h-4 w-4" />
             <span className="ml-2">{project.link.label}</span>
           </p>
         </Card>
       ))}
     </ul>
   </div>
   <div className="my-20 mx-5 sm:mx-0">
     <h1 className="text-sm tracking-tighter text-zinc-800 sm:text-xl font-medium mb-8">
       Responsibilites
     </h1>
     <ul
       role="list"
       className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
     >
       {responsibilities.map((project) => (
         <Card as="li" key={project.company}>
           <img
             src={project.logo}
             alt={`${project.company} Logo`}
             className="h-8 w-8 relative z-10 rounded-md"
           />
           <h2 className="mt-6 text-base font-semibold text-zinc-800">
             <Card.Link
               href={project.link.href}
               target="_blank"
               rel="noreferrer noopener"
             >
               {project.company}
             </Card.Link>
           </h2>
           <h3 className="mt-2 text-base font-medium text-zinc-600">
            <Card.Link
              href={project.link.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {project.role}
            </Card.Link>
          </h3>
           <Card.Description>
            {project.description} </Card.Description>
           <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition">
             <span className="ml-2">{project.from } - {project.to}</span>
           </p>
           <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500">
             <Link className="h-4 w-4" />
             <span className="ml-2">{project.link.label}</span>
           </p>
         </Card>
       ))}
     </ul>
   </div>
   </>
  );
  
}
