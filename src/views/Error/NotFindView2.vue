<!--
 * @Author: BINGWU
 * @Date: 2024-02-10 22:19:03
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-02-10 22:57:10
 * @FilePath: \bingwu-admin\src\views\Error\NotFindView2.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="content">
    <div class="page-404">
      <h1>404</h1>
      <p>You are lost this page</p>
      <p class="info">
        you've reached the edge of universe.The Page you've requested , can't
        befound. Don't Worry , you can return to previous page.
      </p>
      <button class="go-home btn">GO HOME</button>
      <button class="back btn">BACK</button>
    </div>
    <div class="astronaut">
      <img
        src="../../assets/error/notfind2/astronaut.png"
        class="astronaut-img"
        alt=""
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@font-face {
  font-family: dogica;
  src: url(../../assets/error/notfind2/font/dogica.ttf);
}
* {
  padding: 0;
  margin: 0;
}

.content {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url(../../assets/error/notfind2/bg.png);
  background-attachment: fixed;
  background-size: cover;
  .astronaut {
    transform: rotate(0deg) translate(0, -18%);
    animation-name: PAnimation;
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 3s;
  }
  .page-404 {
    width: 40vw;
    font-family: dogica;
    z-index: 1;
    h1 {
      font-size: 5vw;
      margin-bottom: 30px;
    }
    p {
      font-size: 1vw;
      margin: 10px 0;
      line-height: 2vw;
    }
    .btn {
      width: 10vw;
      height: 50px;
      border-radius: 30px;
      margin-top: 10px;
      cursor: pointer;
      transition: 0.3s;
      background-color: #fff;
      color: #000;
      border: 2px solid #000;
      font-size: 1vw;
      &:hover {
        background-color: #000;
        color: #fff;
      }
    }
  }
}
@media (min-width: 1024px) {
  .content {
    position: relative;
    display: flex;
    .astronaut {
      position: absolute;
      left: 50%;
      top: 50%;
    }
    .page-404 {
      width: 40vw;
      position: absolute;
      left: 10%;
      top: 40%;
      transform: translateY(-50%);
    }
  }
}
@media (max-width: 1024px) {
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .page-404 {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 10vh;
      h1 {
        font-size: 10vw;
        margin-bottom: 30px;
      }
      p {
        font-size: 3vw;
        line-height: 6vw;
      }
      .info {
        display: none;
      }
      .btn {
        width: 30vw;
      }
    }
  }
  .astronaut {
    width: 100%;
    display: flex;
    justify-content: center;
    .astronaut-img {
      width: 70%;
      height: 80%;
      transform: translateY(40%);
    }
  }
}

@keyframes PAnimation {
  0% {
    transform: rotate(0deg) translate(0, -15%);
  }
  100% {
    transform: rotate(10deg) translate(0, -18%);
  }
}
</style>
