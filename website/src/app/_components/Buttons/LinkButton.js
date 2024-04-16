import Link from "next/link";
import React from "react";

const LinkButton = ({ text, url, color }) => {
  return (
    <Link
      href={url}
      className={`${
        color === "dark"
          ? "bg-gray hover:text-black hover:bg-background text-white"
          : "bg-background hover:bg-gray hover:text-background"
      } border-2 border-gray font-bold py-2 px-4 md:px-8 lg:px-12 rounded`}
    >
      {text}
    </Link>
  );
};

export default LinkButton;
