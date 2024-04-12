import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Mobile/Tablet */}
      <div className="lg:hidden flex flex-col items-center space-y-2">
        <img
          src="/images/logo.png"
          alt="SMACS Logo"
          className="mb-8 w-1/1 md:w-1/2 lg:w-1/3 border-none"
        />
        <h1 className="text-center text-2xl md:text-4xl">
          Science and Mathematics Applied to Computer Science
        </h1>
        <p className="text-sm md:text-lg text-center">
          SMACS club aims to explore the intersections of science, math, and
          computer science. The club seeks to understand mathematical
          principles, scientific theories, and computation methods and apply
          them in computer science to simulate real life, solve calculations, or
          visualize abstract concepts.
        </p>
        <div className="flex flex-col items-center container w-3/4 space-y-3 ">
          <div className="flex justify-between md:justify-around container">
            <Link
              className="bg-background border-gray border-2 hover:bg-gray hover:text-background font-bold py-2 px-4 md:px-8 rounded"
              href="/events"
            >
              Events
            </Link>
            <Link
              className="bg-gray border-gray text-background border-2 hover:text-black hover:bg-background text-white font-bold py-2 px-4 md:px-8 rounded"
              href="/projects"
            >
              Projects
            </Link>
          </div>
          <a
            className="container md:w-3/4 font-bold py-2 px-4 rounded border-2"
            href="https://discord.gg/yB4DGpH884"
          >
            Join Discord
          </a>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex flex-row items-center h-[calc(100vh-100px)]">
        <img
          src="/images/logo.png"
          alt="SMACS Logo"
          className="mb-8 size-1/2 object-none border-none"
        />
        <div className="flex flex-col space-y-4">
          <h1 className="text-left text-5xl">
            Science and Mathematics Applied to Computer Science
          </h1>
          <p className="text-xl w-3/4">
            SMACS club aims to explore the intersections of science, math, and
            computer science. The club seeks to understand mathematical
            principles, scientific theories, and computation methods and apply
            them in computer science to simulate real life, solve calculations,
            or visualize abstract concepts.
          </p>
          <div className="flex flex-col container w-3/4 space-y-3 ">
            <div className="flex justify-between md:justify-around lg:justify-start space-x-2 container">
              <Link
                className="bg-background border-gray border-2 hover:bg-gray hover:text-background font-bold py-2 px-4 md:px-8 lg:px-12 rounded"
                href="/events"
              >
                Events
              </Link>
              <Link
                className="bg-gray border-gray border-2 hover:text-black hover:bg-background text-white font-bold py-2 px-4 md:px-8 lg:px-12 rounded"
                href="/projects"
              >
                Projects
              </Link>
            </div>
            <a
              className="container md:w-3/4 lg:w-1/2 font-bold py-2 px-4 rounded border-2"
              href="https://discord.gg/yB4DGpH884"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
