
import { SwiperSlide, Swiper } from "swiper/react";
import * as S from "./styles";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bg3 from "../../assets/img/bg3.jpg";
import bg6 from "../../assets/img/bg6.webp"

import { Autoplay, Navigation, Pagination } from "swiper";
export default function Header() {
  return (
    <S.Container>
      <Swiper
        autoHeight={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <h1 className="title">
            OFTALMOLOGIA CLÍNICA
            ESPECIALIZADA EM RETINA E VÍTRE O

          </h1> */}
          <img src={bg3} alt="médico com uma criança" width="100%"                             />
        </SwiperSlide>
        <SwiperSlide> <img src={bg6} alt="médico com uma criança" width="100%"/></SwiperSlide>

      </Swiper>
    </S.Container>
  )
}
