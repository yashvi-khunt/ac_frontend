import React from "react";
import Image from "next/image";
const page = () => (
  <div className="py-12 container">
    <h1 className="text-3xl font-bold">Group Classes</h1>
    <div className="mt-6 max-w-2xl">
      <Image
        src="/images/program2.jpg"
        alt="Group Classes"
        width={1200}
        height={800}
        objectFit="cover"
      />
      <p className="mt-4 text-(--color-text-secondary)">
        Detailed description for Group Classes goes here. This is a placeholder
        page created by the starter.
      </p>
    </div>
  </div>
);

export default page;
