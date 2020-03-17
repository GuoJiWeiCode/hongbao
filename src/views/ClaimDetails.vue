<template>
  <div class="detail">
    <div class="detail_bg">
      <div class="text1">恭喜你获得现金红包</div>
      <div class="text2">0.3<span>元</span></div>
      <div class="text3">已存入微信零钱</div>
    </div>
    <div class="detail_list">
      <div class="title">看小伙伴们手气如何</div>
      <div class="item">
        <img src="" alt="" />
        <div>
          <div class="text1">张小猫</div>
          <div class="text2">2020-01-01 10.56.23</div>
        </div>
        <div class="count">0.5元</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'claimDetails'
}
</script>

<style lang="scss" scoped>
.detail {
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  .detail_bg {
    width: 100%;
    height: 300px;
    text-align: center;
    background: url('../assets/detail_bg.png') no-repeat;
    background-size: cover;
    .text1 {
      font-size: 20px;
      font-weight: 500;
      color: #fff;
      line-height: 20px;
      padding-top: 60px;
    }
    .text2 {
      font-size: 40px;
      font-weight: 500;
      color: #ffe460;
      padding-top: 45px;
      span {
        font-size: 18px;
      }
    }
    .text3 {
      font-size: 15px;
      font-weight: 400;
      color: #fff;
      line-height: 20px;
      padding-top: 16px;
    }
  }
  .detail_list {
    height: 416px;
    width: 310px;
    position: absolute;
    top: 251px;
    margin: 0 auto;
    border-radius: 8px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 12px;
    overflow: scroll;
    .title {
      margin-top: 20px;
      width: 190px;
      height: 32px;
      background: #ffd82a;
      border-radius: 16px;
      text-align: center;
      font-size: 14px;
      line-height: 32px;
      color: #ff4549;
      font-weight: 500;
      font-family: Source Han Sans CN;
    }
    .item {
      width: 100%;
      height: 58px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #dedede;
      img {
        width: 38px;
        height: 38px;
        border-radius: 19px;
        background: pink;
      }
      .text1 {
        color: #333;
        font-size: 14px;
        line-height: 20px;
        margin-left: 13px;
      }
      .text2 {
        color: #999;
        line-height: 20px;
        margin-left: 13px;
        width: 230px;
      }
      .count {
        color: #e45646;
        line-height: 58px;
      }
    }
  }
}
</style>
