import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import bg_sr from "../assets/bg_sr.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Sertifikat = () => {
  const Sertifikats = [
    {
      img: s1,
      name: "Get started programming with Kotlin",
    },
    {
      img: s2,
      name: "Event Mastering SOLID Principles to Boost Engineering Career",
    },
    {
      img: s3,
      name: "J&T Youngpreneur, Depok",
    },
  ];

  const sectionStyle = {
    backgroundImage: `url(${bg_sr})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      id="Sertifikats"
      className="mx-4 rounded-xl py-5 text-white"
      style={sectionStyle}
    >
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-[#FFA500]">Certificate</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My participated in</p>
      </div>
      <br />
      <div className="flex max-w-4xl px-5 mx-auto justify-center items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {Sertifikats.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-transparant">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Sertifikat;
