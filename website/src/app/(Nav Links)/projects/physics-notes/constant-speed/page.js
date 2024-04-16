const ConstantSpeed = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
      <script
        id="MathJax-script"
        async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
      ></script>
      <h1 className="text-3xl font-bold mb-2">Constant Speed in 1D and 2D</h1>
      <section className="flex flex-col">
        <h3 className="text-lg font-semibold ">Displacement</h3>
        <div className="flex flex-col">
          <p className="">
            Displacement is the distance an object has moved from its initial
            position.
          </p>
          <p className="">
            In a 1D plane, the object can only move forward or backward
            depending on the direction it is facing to. Assuming that the object
            is moving straight along the x-axis. The equation in getting the
            displacement will be the final position minus the initial position.
          </p>
          <p className="italic font-semibold">
            displacement = x-final - x-initial
          </p>
          <p>
            In a 2D plane, the object can move in any direction. Meaning it will
            have a displacement in multiple directions. To simplify this, we can
            split the displacement into two components, the x-component and the
            y-component. The x-component is the displacement in the x-axis and
            the y-component is the displacement in the y-axis. The equation for
            the displacement in a 2D plane is:
          </p>
          <p className="italic font-semibold">
            x-displacement = x-final - x-initial
          </p>
          <p className="italic font-semibold">
            y-displacement = y-final - y-initial
          </p>
          <p>
            In this case, if the object is 0 in either x or y, that means that
            the object has not moved the direction it is 0 in.
          </p>
          <p>
            Assuming that both displacement is non zero, if we make a line using
            the x-displacement and y-displacement, it will create a triangle
            shape where the hypotenuse is the total displacement of the object.
            Using the Pythagorean theorem, we can get the total displacement of
            the object with the following equation:
          </p>
          <p className="italic font-semibold">
            total-displacement = sqrt(x-displacement^2 + y-displacement^2)
          </p>
          <p className="font-sm italic">**Insert Visualizaion Here**</p>
        </div>
      </section>
      <section className="flex flex-col">
        <h3 className="text-lg font-semibold ">Velocity</h3>
        <div className="flex flex-col">
          <p className="">
            Whenever an object moves from one place to another, it will have a
            speed. This speed determines the amount of time it takes an object
            to move from its initial position to its final position. So we can
            create the equation as follows:
          </p>
          <p className="italic font-semibold">speed = distance / time</p>
          <p>
            Where distance is the total distance the object has moved and time
            is the amount of time it took for the object to move from its
            initial position to its final position.
          </p>
          <p>
            Velocity is the speed of an object in a given direction. Assuming
            that we place our object in a cartesian plane, we can split Velocity
            into x and y components. Where the Velocity in the x-component is
            its speed in the x-axis and the Velocity in the y-component is its
            speed in the y-axis.
          </p>
          <p>
            <span className="font-bold">Note</span> that negative velocity does
            not mean that the object is slowing down. Since velocity has
            direction, there is a possibility that the object will move to the
            left. In the cartesian coordinate system, moving to the left means
            we are moving in the negative x-axis. So if the object is moving to
            the left, the x-component of the Velocity will be negative.
          </p>
          <p>
            Below is an interactive example of how velocity works in a 2D plane.
          </p>
          <div className="my-4 md:mx-8">
            <iframe
              className="w-full"
              height="272"
              src="https://smacs-mtsac.github.io/smacs-visuals/Physics-Visuals/Constant-Speed-p5/index.html"
              title="Constant Speed"
            ></iframe>
            <p className="text-sm">
              Simulation of constant speed with velocity in X and Y axis
            </p>
          </div>
          <p>
            To find the velocity we can use the same equation we used for speed
            but we have to consider the direction of its displacement
          </p>
          <p className="italic font-semibold">velocity = displacement / time</p>
        </div>
      </section>
    </div>
  );
};

export default ConstantSpeed;
