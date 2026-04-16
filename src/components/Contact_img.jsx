import React from "react";

function Contact_img({img , href }) {
  return (
    <div className="flex justify-center px-2 py-2 sm:px-4 sm:py-4">
      <div className="rounded-3xl bg-white p-2 shadow-sm transition duration-300 hover:shadow-lg sm:p-4">
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          <img src={img} alt="image" className="h-20 w-20 rounded-2xl object-cover transition-all duration-300 hover:scale-105 sm:h-24 sm:w-24 md:h-28 md:w-28" />
        </a>
      </div>
    </div>
  );
}

export default Contact_img;
