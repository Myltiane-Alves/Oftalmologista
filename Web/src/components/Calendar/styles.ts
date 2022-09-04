import styled from "styled-components";

export const Container = styled.section`
  flex-direction: column;
  padding: 0 20px;
  margin-bottom: 20px;
  .month {
    color: black;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    text-transform: uppercase;
    display: flex;
    h2 {
      font-size: 22px;
      line-height: 36px;
      font-weight: 400;
      color: #6996fa;
    }
    button {
      min-width: 130px;
      border: none;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: bold;
      outline: none;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      border: #9a9a99 2px solid;
      border-radius: 8px;
      color: #9a9a99;
      background-color: transparent;
    }
    nav {
      display: flex;
      button {
        min-width: 50px;
        border: none;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: bold;
        outline: none;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
        border: #9a9a99 2px solid;
        border-radius: 8px;
        color: #9a9a99;
        background-color: transparent;
      }
      button + button {
        margin-left: 10px;
      }
    }
    .btn-today {
      display: none;
    }
  }
  .weekdays {
    font-weight: bold;
    text-transform: uppercase;
    color: gray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin: 0;
    padding: 0;
    li {
      justify-content: center;
      padding: 8px 0;
      font-size: 12px;
      font-weight: bold;
      list-style: none;
      display: flex;
    }
  }
  .days {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 12vw 12vw 12vw 12vw 12vw;
    grid-gap: 10px;
    color: #444444;
    margin: 0;
    padding: 0;
    list-style-type: disc;
    li {
      font-size: 16px;
      justify-content: center;
      align-items: center;
      padding: 0;
      border-radius: 50%;
      cursor: pointer;
      transition: all .1s ease-in-out;
      list-style: none;
      display: flex;
      &:hover {
        background-color: rgba(0, 0, 0, .1);
      }
    }
    .month-prev, .month-next {
      color: #9a9a99;
    }
    .active {
      background-color: #40518a;
      color: white;
      &:hover {
        background-color: #6996fa;
      }
      &:active {
        background-color: #6996fa;
      }
    }
    .selected {
      background-color: green !important;
      color: white;
    }
  }


@media (min-width: 992px) {

    max-width: 992px;
    .month {
      display: flex;
      h2 {
        font-size: 44px;
      }
      margin: 30px 0;
      .btn-today {
        display: flex;
      }
      nav {
        display: flex;
      }
    }
    .weekdays {
      li {
        font-size: 21px;
        font-weight: bold;
      }
    }
    .days {
      grid-template-rows: 128px 128px 128px 128px 128px 128px;
      li {
        height: 120px;
        font-size: 38px;
      }
    }

}

`;
