import Link from "next/link";
const PhysicsNotes = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Physics Notes</h1>
      <h5 className="text-lg font-semibold mb-2">Table Of Contents</h5>
      <ul className="list-disc pl-4">
        {/* Kinematics */}
        <li className="mb-4">
          <h5 className="text-lg font-semibold mb-2">Kinematics</h5>
          <ul className="list-disc pl-4">
            {/* <li className="mb-2">
              <Link
                href="/projects/physics-notes/vectors"
                className="text-blue-500 hover:underline"
              >
                Cartesian Plane and Vectors
              </Link>
            </li> */}
            <li className="mb-2">
              <Link
                href="/projects/physics-notes/constant-speed"
                className="text-blue-500 hover:underline"
              >
                Constant Speed in 1D and 2D
              </Link>
            </li>
            {/* <li className="mb-2">
              <Link
                href="/projects/physics-notes/acceleration"
                className="text-blue-500 hover:underline"
              >
                Acceleration
              </Link>
            </li> */}
            {/* <li className="mb-2">
              <Link
                href="/projects/physics-notes/kinematics/projectile-motion"
                className="text-blue-500 hover:underline"
              >
                Projectile Motion
              </Link>
            </li> */}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default PhysicsNotes;
