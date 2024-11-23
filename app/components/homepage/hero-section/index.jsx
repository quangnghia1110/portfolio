// @flow strict

import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is{" "}
            <span className="text-pink-500">Ngo Quang Nghia</span>,{` I&#39;m a `}
            <span className="text-[#16f2b3]">Software Engineer</span>.
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href="https://github.com/quangnghia1110"
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ngoquangnghia111003"
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href="https://www.facebook.com/quangnghia559/"
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              href="/CV_NgoQuangNghia.pdf"
              download="CV_NgoQuangNghia.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">contactInfo</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>

              {/* Contact Details */}
              <div className="ml-4 lg:ml-8">
                <span className="text-white">location:</span>{" "}
                <span className="text-cyan-400">&quot;Thu Duc Province, Ho Chi Minh City&quot;</span>,
              </div>
              <div className="ml-4 lg:ml-8">
                <span className="text-white">phone:</span>{" "}
                <span className="text-cyan-400">&quot;0974117373&quot;</span>,
              </div>
              <div className="ml-4 lg:ml-8">
                <span className="text-white">email:</span>{" "}
                <span className="text-cyan-400">&quot;ngoquangnghia111003@gmail.com&quot;</span>,
              </div>
              <div className="ml-4 lg:ml-8">
                <span className="text-white">github:</span>{" "}
                <a
                  href="https://github.com/quangnghia1110"
                  className="text-blue-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &quot;https://github.com/quangnghia1110&quot;
                </a>
                ,
              </div>
              <div className="ml-4 lg:ml-8">
                <span className="text-white">linkedin:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/ngoquangnghia111003"
                  className="text-blue-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &quot;https://www.linkedin.com/in/ngoquangnghia111003&quot;
                </a>
                ,
              </div>
              <div className="ml-4 lg:ml-8">
                <span className="text-white">facebook:</span>{" "}
                <a
                  href="https://www.facebook.com/quangnghia559/"
                  className="text-blue-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &quot;https://www.facebook.com/quangnghia559/&quot;
                </a>
                ,
              </div>

              <div>
                <span className="text-gray-400">{"}"}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
