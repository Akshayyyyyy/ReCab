import React from "react";

const Landing = () => {
  return (
    <>
    <section
      className="relative min-h-screen text-white pt-28 px-6 bg-cover bg-center"
 
    >
      <div className="absolute inset-0 bg-black bg-opacity-60">
      <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in-up pt-20">
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
      </div>
    </section>

    {/* Why ReCab Section */}
      <section className="py-20 px-6 bg-gray-100 text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Why ReCab?</h2>
          <p className="text-lg max-w-3xl mx-auto">
            In India, thousands of taxis and personal drivers return with empty seats every day. ReCab turns these missed opportunities into shared rides, helping reduce travel costs, traffic congestion, and environmental impact. Whether you're a driver looking to earn more, or a commuter looking to save, ReCab makes city rides smarter and more sustainable.
          </p>
        </div>
      </section> 



      {/* Startup Vision Section */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">A Startup With a Vision</h2>
          <p className="text-lg max-w-3xl mx-auto">
            ReCab is more than just a ride-sharing tool — it's a movement toward efficient travel. By solving a real-world problem of unused cab capacity, we open doors for affordable travel, higher driver income, and eco-conscious commuting. With strong market potential and an innovative model, ReCab is poised to grow into the next big mobility startup.
          </p>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-2">ReCab</h3>
            <p>Smartly split your rides and your cost. Built for smarter, greener cities.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="/" className="hover:text-yellow-400">Home</a></li>
              <li><a href="/post-ride" className="hover:text-yellow-400">Post Ride</a></li>
              <li><a href="/find-rides" className="hover:text-yellow-400">Find Rides</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>Email: <a href="mailto:support@recab.in" className="text-yellow-400 hover:underline">akshayu718@gmail.com</a></p>

            <p>Location: India</p>
          </div>
        </div>
        <div className="text-center mt-10 text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} ReCab. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Landing;

