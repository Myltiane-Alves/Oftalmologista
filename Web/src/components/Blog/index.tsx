import * as S from './styles';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

import refrativa from "../../assets/img/cirurgia-refrativa.webp";

export default function BlogSection() {
  return (
    <S.Container>
      <div className="container-title">
        <h2>Notícias</h2>
        <p>Saiba mais Sobre nosso Trabalho</p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            boxShadow: "0 1px 10px #ccc",
            maxWidth: "350px",
            borderRadius: "20px",
            width: "100%",
            display: "block"
          }}
        >
          <S.Card
            style={{
              height: "100%"
            }}
          >
            <img src={refrativa} alt="refrativa" />
            <div className="card-text">
              <h3>Cirurgia Refrativa</h3>
              <p>
                Se você tem um problema refrativo, como miopia, hipermetropia,
                astigmatismo ou presbitopia, a cirurgia refrativa é um método
                para corrigir ou melhorar sua visão....
              </p>
            </div>
            <button
              type="button"
              className="btn"
            >
              <a href="https://www.google.com.br/">Leia Mais</a>
            </button>
          </S.Card>
        </SwiperSlide>
        <SwiperSlide
          style={{
            boxShadow: "0 1px 10px #ccc",
            maxWidth: "350px",
            borderRadius: "20px",
            width: "100%",
            display: "block"
          }}
        >
          <S.Card
            style={{
              height: "100%"
            }}
          >
            <img src={refrativa} alt="refrativa" />
            <div className="card-text">
              <h3>Cirurgia Refrativa</h3>
              <p>
                Se você tem um problema refrativo, como miopia, hipermetropia,
                astigmatismo ou presbitopia, a cirurgia refrativa é um método
                para corrigir ou melhorar sua visão....
              </p>
            </div>
            <button
              type="button"
              className="btn"
            >
              <a href="https://www.google.com.br/">Leia Mais</a>
            </button>
          </S.Card>
        </SwiperSlide>
        <SwiperSlide
          style={{
            boxShadow: "0 1px 10px #ccc",
            maxWidth: "350px",
            borderRadius: "20px",
            width: "100%",
            display: "block"
          }}
        >
          <S.Card
            style={{
              height: "100%"
            }}
          >
            <img src={refrativa} alt="refrativa" />
            <div className="card-text">
              <h3>Cirurgia Refrativa</h3>
              <p>
                Se você tem um problema refrativo, como miopia, hipermetropia,
                astigmatismo ou presbitopia, a cirurgia refrativa é um método
                para corrigir ou melhorar sua visão....
              </p>
            </div>
            <button
              type="button"
              className="btn"
            >
              <a href="https://www.google.com.br/">Leia Mais</a>
            </button>
          </S.Card>
        </SwiperSlide>
        <SwiperSlide
          style={{
            boxShadow: "0 1px 10px #ccc",
            maxWidth: "350px",
            borderRadius: "20px",
            width: "100%",
            display: "block"
          }}
        >
          <S.Card
            style={{
              height: "100%"
            }}
          >
            <img src={refrativa} alt="refrativa" />
            <div className="card-text">
              <h3>Cirurgia Refrativa</h3>
              <p>
                Se você tem um problema refrativo, como miopia, hipermetropia,
                astigmatismo ou presbitopia, a cirurgia refrativa é um método
                para corrigir ou melhorar sua visão....
              </p>
            </div>
            <button
              type="button"
              className="btn"
            >
              <a href="https://www.google.com.br/">Leia Mais</a>
            </button>
          </S.Card>
        </SwiperSlide>
        <SwiperSlide
          style={{
            boxShadow: "0 1px 10px #ccc",
            maxWidth: "350px",
            borderRadius: "20px",
            width: "100%",
            display: "block"
          }}
        >
          <S.Card
            style={{
              height: "100%"
            }}
          >
            <img src={refrativa} alt="refrativa" />
            <div className="card-text">
              <h3>Cirurgia Refrativa</h3>
              <p>
                Se você tem um problema refrativo, como miopia, hipermetropia,
                astigmatismo ou presbitopia, a cirurgia refrativa é um método
                para corrigir ou melhorar sua visão....
              </p>
            </div>
            <button
              type="button"
              className="btn"
            >
              <a href="https://www.google.com.br/">Leia Mais</a>
            </button>
          </S.Card>
        </SwiperSlide>
        <SwiperSlide
          style={{

            boxShadow: "0 1px 10px #ccc",
            maxWidth: "350px",
            borderRadius: "20px",
            width: "100%",

            display: "block"
          }}
        >
          <S.Card
            style={{
              // width: "350px",
              height: "100%"
            }}
          >
            <img src={refrativa} alt="refrativa" />
            <div className="card-text">
              <h3>Cirurgia Refrativa</h3>
              <p>
                Se você tem um problema refrativo, como miopia, hipermetropia,
                astigmatismo ou presbitopia, a cirurgia refrativa é um método
                para corrigir ou melhorar sua visão....
              </p>
            </div>
            <button
              type="button"
              className="btn"
            >
              <a href="https://www.google.com.br/">Leia Mais</a>
            </button>
          </S.Card>
        </SwiperSlide>
        <SwiperSlide
          style={{

            boxShadow: "0 1px 10px #ccc",
            maxWidth: "350px",
            borderRadius: "20px",
            width: "100%",

            display: "block"
          }}
        >
          <S.Card
            style={{
              height: "100%"
            }}
          >
            <img src={refrativa} alt="refrativa" />
            <div className="card-text">
              <h3>Cirurgia Refrativa</h3>
              <p>
                Se você tem um problema refrativo, como miopia, hipermetropia,
                astigmatismo ou presbitopia, a cirurgia refrativa é um método
                para corrigir ou melhorar sua visão....
              </p>
            </div>
            <button
              type="button"
              className="btn"
            >
              <a href="https://www.google.com.br/">Leia Mais</a>
            </button>
          </S.Card>
        </SwiperSlide>
        <SwiperSlide
          style={{

            boxShadow: "0 1px 10px #ccc",
            maxWidth: "350px",
            borderRadius: "20px",
            width: "100%",

            display: "block"
          }}
        >
          <S.Card
            style={{
              // width: "350px",
              height: "100%"
            }}
          >
            <img src={refrativa} alt="refrativa" />
            <div className="card-text">
              <h3>Cirurgia Refrativa</h3>
              <p>
                Se você tem um problema refrativo, como miopia, hipermetropia,
                astigmatismo ou presbitopia, a cirurgia refrativa é um método
                para corrigir ou melhorar sua visão....
              </p>
            </div>
            <button
              type="button"
              className="btn"
            >
              <a href="https://www.google.com.br/">Leia Mais</a>
            </button>
          </S.Card>
        </SwiperSlide>


      </Swiper>
    </S.Container>
  );
}
