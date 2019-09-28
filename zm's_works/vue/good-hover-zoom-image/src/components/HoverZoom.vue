<template>
  <div class="zoom">
    <!-- small -->
    <div class="smallbox" @mouseover="mouseOver" @mousemove="mouseMove" @mouseout="mouseOut">
      <img :src="smallSrc" alt="">
      <div class="mask"
      :style="{
        width: '210px',
        height: '210px',
        opacity: 0.6,
        backgroundColor: 'rgba(25, 122, 255, 0.5)'}"
      ></div>
    </div>
    <div class="bigbox">
      <div :style="{
        width: '430px',
        height: '430px',
      }">
        <img :src="bigSrc" :style="{
          width: '800px',
          height: '800px',
        }">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    smallSrc: {type: String},
    bigSrc: {type: String}
  },
  methods: {
    mouseOver () {
    
    },
    mouseMove (e) {
      const smallboxRect = document.querySelector('.smallbox img').getBoundingClientRect();
      const x = e.clientX,
            y = e.clientY;
      let maskX = x - 210 / 2,
          maskY = y - 210 / 2;
      maskX = maskX < 0 ? 0 : maskX + 210 >= smallboxRect.width ? smallboxRect.width - 210 : maskX;
      maskY = maskY < 0 ? 0 : maskY + 210 >= smallboxRect.height ? smallboxRect.height - 210 : maskY;
      const mask = document.querySelector('.mask');
      mask.style.transform = `translate(${maskX}px, ${maskY}px)`;
      const bigboxMove = document.querySelector('.bigbox div img');
      bigboxMove.style.left = - maskX * (800 - 430) / (430 - 210) + 'px'
      bigboxMove.style.top = - maskY * (800 - 430) / (430 - 210) + 'px'
    },
    mouseOut () {

    },
  }
}
</script>

<style scoped>
.smallbox {
  position: absolute;
}
.mask {
  position: absolute;
  left: 0;
  top: 0;
}
.bigbox {
  left: 450px;
  position: absolute;
}
.bigbox div {
  position: absolute;
  border: 1px solid #000;
  overflow: hidden;
}
.bigbox div img {
  position: absolute;
}
</style>
