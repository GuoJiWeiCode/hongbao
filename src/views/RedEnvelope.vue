<template>
  <div>
    <div class="red_bg">
      <img :src="red_bg" alt="" />
    </div>
    <div class="red_bao">
      <img :src="red" class="red" />
      <div class="text" @click="showDialog">拆</div>
      <img :src="gold_left" class="gold_left" />
      <img :src="gold_right" class="gold_right" />
    </div>
    <div
      :class="play_music ? 'music start_music' : 'music'"
      @click.stop="play_music = !play_music"
    >
      <audio controls v-show="false" id="bgMusic">
        <source src="../assets/suyan.mp3" type="audio/mpeg" />
      </audio>
    </div>
    <Dialog
      ref="dialog"
      message="根据提示分享朋友圈领红包"
      :sureBtn="sureBtn"
    />
  </div>
</template>

<script>
import Dialog from './Dialog'
export default {
  name: 'redEnvelope',
  components: {
    Dialog
  },
  data() {
    return {
      play_music: false,
      red_bg: require('../assets/red_bg.png'),
      red: require('../assets/red.png'),
      gold_left: require('../assets/gold_left.png'),
      gold_right: require('../assets/gold_right.png')
    }
  },
  created() {},
  watch: {
    play_music() {
      var audio = document.getElementById('bgMusic')
      this.play_music ? audio.play() : audio.pause()
    }
  },
  methods: {
    //点击确定
    sureBtn() {
      console.log(1)
    },
    showDialog() {
      this.$refs.dialog.show()
      this.play_music = true
    }
  }
}
</script>

<style lang="scss" scoped>
.red_bg {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  img {
    width: 100%;
    height: 100%;
  }
}
.red_bao {
  width: 100%;
  position: relative;
  top: 222px;
  text-align: center;
  .red {
    width: 282px;
    height: 375px;
  }
  .text {
    position: absolute;
    left: 172px;
    top: 259px;
    font-size: 36px;
    font-weight: bold;
    color: #fff;
    line-height: 62px;
    text-shadow: 0px 2px 0px #1c1c1c 0.3;
    text-align: center;
    animation: scaleDraw 2s ease-in-out infinite;
  }
  .gold_left {
    position: absolute;
    bottom: 120px;
    left: 50px;
    width: 58px;
    height: 69px;
    animation: gold_left 2s linear 2s infinite alternate running;
  }
  .gold_right {
    position: absolute;
    bottom: 85px;
    right: 50px;
    width: 50px;
    height: 59px;
    animation: gold_right 2s linear 2s infinite alternate running;
  }
}
.music {
  width: 44px;
  height: 44px;
  background: url('../assets/music.png') no-repeat;
  background-size: contain;
  position: absolute;
  top: 53px;
  right: 16px;
}
.start_music {
  animation: myRotate 10s linear infinite;
}
@keyframes gold_left {
  0% {
    bottom: 120px;
    left: 50px;
  }
  25% {
    bottom: 130px;
    left: 40px;
  }
  50% {
    bottom: 120px;
    left: 50px;
  }
  75% {
    bottom: 130px;
    left: 40px;
  }
  100% {
    bottom: 120px;
    left: 50px;
  }
}
@keyframes gold_right {
  0% {
    bottom: 85px;
    right: 50px;
  }
  25% {
    bottom: 95px;
    right: 60px;
  }
  50% {
    bottom: 85px;
    right: 50px;
  }
  75% {
    bottom: 95px;
    right: 60px;
  }
  100% {
    bottom: 85px;
    right: 50px;
  }
}
@keyframes scaleDraw {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.3);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.3);
  }
}
@keyframes myRotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
