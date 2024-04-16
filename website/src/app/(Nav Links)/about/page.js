import LinkButton from "@/components/Buttons/LinkButton";

const About = () => {
  return (
    <div className="flex flex-col container text-center md:text-left pb-12">
      <h1 className="text-2xl md:text-4xl">About SMACS</h1>
      <div className="text-sm md:text-lg lg:text-xl md:indent-12">
        <p className="">
          SMACS club aims to explore the intersections of science, math, and
          computer science. The club seeks to understand mathematical
          principles, scientific theories, and computation methods and apply
          them in computer science to simulate real life, solve calculations, or
          visualize abstract concepts.
        </p>
        <p className="">
          Examples of applications include using mathematics and statistics to
          visualize data, exploring how mathematical concepts are utilized in
          animation and graphics, and using physics laws in a physics engine to
          create a real-world simulation, etc.
        </p>
        <p className="">
          The SMACS club distinguishes itself as a math and science focused club
          rather than solely a computer science club. While the club will still
          tackle a lot of computer concepts, the primary topic that will be
          covered are the concepts in math and science. Computer Science skills
          are not a requirement to join the club and will not be mandatory to
          learn for the duration of your membership. Your curiosity and
          understanding of math and/or science will be enough for you to
          contribute to any club sessions and projects.
        </p>
        <p className="">
          However, although not mandatory, it is still highly recommended to
          learn the basics of computer science. As technology continues to
          evolve, this foundational knowledge can be beneficial not only for
          your engagement with SMACS but also for potential academic and career
          pursuits in the future.
        </p>
      </div>

      <h3 className="text-xl md:text-2xl lg:text-3xl">Club Activities</h3>
      <h5 className="text-lg md:text-xl lg:text-2xl">Club Sessions/Meetings</h5>
      <p className="text-sm md:text-lg lg:text-xl md:indent-12">
        The meetings will be held biweekly, alternating between sessions focused
        on project discussions and club activities, and lecture-project
        sessions, or a combination of both.
      </p>
      <h5 className="text-lg md:text-xl lg:text-2xl">Main Projects</h5>
      <p className="text-sm md:text-lg lg:text-xl md:indent-12">
        The club will establish its own website featuring its projects, members,
        and their contributions. The primary project will be a web blog teaching
        physics concepts with the help of interactive visualizations. These
        concepts will align with the MtSAC’s physics courses syllabus along with
        the book Nature of Code by Daniel Shiffman.
      </p>
      <h5 className="text-lg md:text-xl lg:text-2xl">Side Projects</h5>
      <p className="text-sm md:text-lg lg:text-xl md:indent-12">
        Members are highly encouraged to explore and develop additional projects
        beyond the focus. The club welcomes concepts outside the primary scope,
        and these projects can also be showcased on the club’s website.
      </p>
      {/* <LinkButton text="Meet the Team!" url="/members" color="dark" /> */}
    </div>
  );
};

export default About;
