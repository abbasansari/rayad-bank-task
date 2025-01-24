import React from "react";

const highlights = [
  {
    src: "/cancerIcon.svg",
    alt: "Cancer Awareness",
    text: "Launched World Cancer Day with 60+ attendees",
  },
  {
    src: "/recycleIcon.svg",
    alt: "Recycling Initiative",
    text: "The Dawwer Jehazak Initiative recycled 100,000 electronic parts",
  },
  {
    src: "/foodIcon.svg",
    alt: "Food Distribution",
    text: "700,000 meals were distributed during Ramadan",
  },
  {
    src: "/leadershipIcon.svg",
    alt: "Leadership Programs",
    text: "Conducted 3 leadership programs",
  },
];

const BuildingHighlight = () => {
  return (
    <footer className="bg-[#1B0F3B] w-full px-0 mt-10">
      <div className="w-full h-[40vh] bg-white font-sans flex flex-row md:flex-row items-end justify-between mt-40">
        <div className="bg-[#1B0F3B] text-white p-8 md:flex-shrink-0 flex flex-col items-start w-full md:w-[800px] h-auto md:h-[400px]">
          <h3 className="text-teal-400 font-semibold text-xl">ESG Highlight</h3>
          <div className="mt-8 space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex flex-col">
                <img
                  src={highlight.src}
                  alt={highlight.alt}
                  className="w-6 h-6 text-teal-400 mb-2"
                />
                <p className="text-sm">{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 -ml-1">
          <img
            src="public/building.png"
            alt="Riyad Bank Building"
            className="h-[80vh] object-cover"
          />
        </div>
      </div>
    </footer>
  );
};

export default BuildingHighlight;
