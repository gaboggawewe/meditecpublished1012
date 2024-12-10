import { marked } from "marked";
import React, { useRef, useState } from "react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SigninSlider = ({ title }) => {
  SwiperCore.use([Pagination]);
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);
  return (
    <div className="auth-banner bg-gradient flex flex-col items-center justify-center py-16 lg:col-6 lg:block">
      <img
        className="absolute left-0 top-0 h-full w-full"
        src="/images/login-banner-bg.png"
        alt=""
      />
      <div className="w-full text-center mt-10">
        <h2
          className="h3 text-white mt-10"
          dangerouslySetInnerHTML={{ __html: marked.parse(title) }}
        />
        <div className="auth-banner-carousel">
          <Swiper
            pagination={{
              type: "bullets",
              el: paginationRef.current,
              clickable: true,
              dynamicBullets: true,
            }}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
            // loop={true}
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
          >
            <SwiperSlide key={"feature-" + 0}>
              <img
                width="667"
                height="557"
                className="mx-auto mt-10"
                src="/images/DSC_0319.JPG"
                alt=""
              />
            </SwiperSlide>
          </Swiper>

          <div className="relative flex justify-center">
            <div
              width="100%"
              className=" pagination"
              style={{ width: "100%" }}
              ref={paginationRef}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninSlider;
