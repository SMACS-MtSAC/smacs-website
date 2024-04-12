import Link from "next/link";

const PhysicsNotes = () => {
  return (
    <div>
      <h1>Physics Notes</h1>
      <h5>Table Of Contents</h5>
      <ul>
        {/* Kinematics */}
        <li>
          <h5>Kinematics</h5>
          <ul>
            <li>
              <Link href="/projects/physics-notes/kinematics/vectors">
                Cartesian Plane and Vectors
              </Link>
            </li>
            <li>
              <Link href="/projects/physics-notes/kinematics/constant-speed">
                Constant Speed in 1D and 2D
              </Link>
            </li>
            <li>
              <Link href="/projects/physics-notes/kinematics/acceleration">
                Acceleration
              </Link>
            </li>
            <li>
              <Link href="/projects/physics-notes/kinematics/projectile-motion">
                Projectile Motion
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default PhysicsNotes;
