import React from "react";
import kasir from "../assets/kasir.jpeg";
import p_android from "../assets/p_android.png";

const Portofolio = () => {
  return (
    <section id="porto" className="py-10">
      <div className="container px-6 mx-auto">
        <div className="mb-32 text-gray-800 text-center">
          <h2 className="text-3xl font-semibold mb-12 pb-4 text-center">
            My <span className="text-[#FFA500]">Project</span>
            <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
          </h2>

          <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
            <div className="mb-6 lg:mb-0 ">
              <div className="relative block bg-gray-900 rounded-lg shadow-lg shadow-gray-500">
                <div className="flex">
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img src={kasir} alt="tokoKue" className="w-full" />
                  </div>
                </div>
                <div className="p-6 text-white">
                  <h5 className="font-bold text-lg mb-3">
                    Cashier Application
                  </h5>
                  <p className="mb-4 pb-2">
                    The web-based cashier application is designed using react js
                    front-end and JSON back-end. This cashier application is
                    made to meet needs such as shops, restaurants and caffe
                    shops.
                  </p>
                  <a
                    href="https://github.com/akbarfadlilah"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="py-[5px] px-[18px] border-2 border-[#FFA500] rounded-full text-[#FFA500] hover:bg-[#FFA500] hover:text-white"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div className="relative block bg-gray-900 rounded-lg shadow-lg shadow-gray-500">
                <div className="flex">
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img src={p_android} alt="p_android" className="w-full" />
                  </div>
                </div>
                <div className="p-6 text-white">
                  <h5 className="font-bold text-lg mb-3">
                    SPK Egg Quality Selection
                  </h5>
                  <p className="mb-4 pb-2">
                    The decision support system for selecting egg quality SAW
                    method is based on Android. Designed using Java programming
                    language with SQLite database
                  </p>
                  <a
                    href="https://github.com/akbarfadlilah"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="py-[5px] px-[18px] border-2 border-[#FFA500] rounded-full text-[#FFA500] hover:bg-[#FFA500] hover:text-white"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
