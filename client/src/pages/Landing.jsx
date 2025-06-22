import React from "react";

const Landing = () => {
  return (
    <section
      className="relative min-h-screen text-white pt-28 px-6 bg-cover bg-center"
 
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
          Share Your <span className="text-yellow-400">Empty Ride</span><br />Split the Cost Smartly
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
          ReCab helps drivers earn from return trips and helps passengers travel cheaper. Save money, cut emissions, and ride smart.
        </p>
        <div className="flex justify-center gap-6 mb-20 flex-wrap">
          <a href="#drivers" className="btn-primary">I'm a Driver</a>
          <a href="#passengers" className="btn-secondary">I'm a Passenger</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div id="drivers" className="glass rounded-xl p-6 md:p-10 text-left">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-2xl font-semibold">Drivers Save & Earn</h2>
            </div>
            <p className="text-gray-200 mb-4">Post your return ride and share your empty seats with others who need a lift. It's quick, easy, and rewarding.</p>
          </div>

          <div id="passengers" className="glass rounded-xl p-6 md:p-10 text-left">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-2xl font-semibold">Passengers Ride for Less</h2>
            </div>
            <p className="text-gray-200 mb-4">Find rides that match your route and timing. Book instantly and save up to 50% on your travel costs.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Landing;