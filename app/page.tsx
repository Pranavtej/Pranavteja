/* eslint-disable react/no-unescaped-entities */
import {
  LinkedInIcon,
  TwitterIcon,
  GitHubIcon,
  MailIcon,
} from "./components/icons/social";

export default function Home() {
  return (
    <>
    <div className="mx-5 sm:mx-0 flex flex-col space-y-5 max-w-xl">
      <img
        src="https://avatars.githubusercontent.com/u/86045290?v=4"
        alt="Profile Picture"
        width={60}
        height={60}
        className="rounded-full"
      />
      <h1 className="text-5xl font-bold tracking-tight">
        Developer , Innovator , Mentor.
      </h1>
      <p className="mt-6 text-base text-zinc-600">
        Hey, I'm Pranav. I'm a Product Developer  at{" "}
        <a
          href="https://inncirclesarena.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4 text-zinc-800 font-semibold"
        >
          Inncircles Arena
        </a>
        , I contribute to the development of several outstanding products.
      </p>
      <p className="mt-6 text-base text-zinc-600">
        I also maintain projects like{" "}
        <a
          href="https://destination-changer.vercel.app"
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4 text-zinc-800 font-semibold"
        >
          destination-changer
        </a>
        {/* ,{" "} */}
        {/* <a
          href="https:"
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4 text-zinc-800 font-semibold"
        >
          telugu-lang
        </a> */}
        .
      </p>
      <div className="mt-6 flex gap-6">
        <a
          href="https://twitter.com/impranavteja"
          target="_blank"
          rel="noreferrer noopener"
        >
          <TwitterIcon className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
        <a
          href="https://github.com/Pranavtej"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHubIcon className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
        <a
          href="https://linkedin.com/in/pranavtejapathi"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInIcon className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
        <a
          href="mailto:pranavtejapathi@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <MailIcon className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
      </div>  
    </div>
    </>
  );
}
