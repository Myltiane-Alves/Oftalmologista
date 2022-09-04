import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  .swiper {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    height: 600px;
  }

  /* .swiper-slide {
    font-size: 18px;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 60px;
  }

  .text-slider {
    position: absolute;
    color: red;
    font-size: 50px;
    font-weight: bold;
  }
  .swiper-slide .title {
    font-size: 41px;
    font-weight: 300;
    color: green
  }
  .swiper-slide .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
  }
  */

  @media (max-width: 768px) {
    .swiper {
      height: 350px;
      /* height: 250px; */
    }

  }
`;
