import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { SwiperData } from "./swiper-imgs-data";
import { Right, Title, Wrapper, Left } from "./swiper.style";
import LeftContent from "components/left-content/left-content";

const SwiperImgs = () => {
  return (
    <>
      <Wrapper>
        <Left>
          <Title>Shahar</Title>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
            style={{ display: "flex", alignItems: "center" }}
          >
            {SwiperData.map((img, id) => (
              <SwiperSlide key={id}>
                <img src={img} alt="swiper-img" style={{ width: "100%" }} />
              </SwiperSlide>
            ))}
          </Swiper>

          <p>
            <b>Toshkent</b> - O‘zbekiston Respublikasi poytaxti, Toshkent
            viloyati markazi. Markaziy Osiyoning yirik tarixiy shahari, .
            Chaharda 11 tuman va 1 ta shaharcha bor.
            <br /> Yozma manbalarda keltirilishicha , Toshkentning qadimgi nomi
            Choch bo‘lgan. Toshkent arablar tasarrufiga o‘tgach, arab alifbosida
            “ch” harfining yo‘qligi bois arabiy asarlarda Chosh deb yuritilgan.
            Beruniy o‘zining “Hindiston “ asarida Toshkent nomining kelib
            chiqishi to‘g‘risida so‘z yuritib, “tosh” so‘zi asli turkcha bo‘lib,
            Chosh ko‘rinishini olgan. “Toshkand- toshli qishloq demakdir” –deb
            izohlaydi. Hozir Toshkent O‘zbekiston Respublikasining siyosiy
            markazi hamdir. Bu yerda Respublikamiz Prezidentining Qarorgohi ,
            O‘zbekiston Respublikasi Oliy Majlisi, Vazirlar Mahkamasi,
            shuningdek , ijtimoiy harakat va partiyalarning va boshqa jamoat
            tashkilotlarining markazlari, chet el elchixonalari, BMT ga qarashli
            tashkilotlar vakolatxonalari joylashgan.
          </p>
        </Left>

        <Right>
          <LeftContent />
        </Right>
      </Wrapper>
    </>
  );
};

export default SwiperImgs;
