<template>
  <transition name="fade">
    <div class="dialog" v-if="showDialog">
      <div class="wrap">
        <div class="head">{{ title }}</div>
        <div class="body">
          <slot>
            <p>{{ message }}</p>
          </slot>
        </div>
        <div class="foot">
          <button class="btn-base" @click="sure">确定</button>
          <button class="btn-gray" @click="cancel">取消</button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'dialogBox',
  data() {
    return {
      showDialog: false
    }
  },
  props: {
    title: {
      type: String,
      default: '提示'
    },
    message: {
      type: String
    },
    sureBtn: {
      type: Function
    },
    cancelBtn: {
      type: Function
    },
    context: {
      type: Object
    }
  },
  methods: {
    cancel() {
      if (this.cancelBtn) {
        this.cancelBtn.apply(this.context)
      }
      this.close()
    },
    sure() {
      if (this.sureBtn) {
        this.sureBtn()
      }
      this.close()
    },
    show() {
      this.showDialog = true
    },
    close() {
      this.showDialog = false
    }
  }
}
</script>

<style scoped lang="scss">
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  transition: all 0.3s ease-in-out;
}
.wrap {
  position: absolute;
  z-index: 1002;
  min-width: 300px;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
}
.head {
  font-weight: 500;
  line-height: 40px;
  font-size: 16px;
  border-bottom: 1px solid #f6f6f6;
  text-align: center;
  color: #333;
}
.body {
  padding: 14px 12px;
  color: #646566;
  text-align: center;
}
.foot {
  height: 50px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  button {
    background: #fff;
    margin: 0;
    padding: 0;
    border: 1px solid #f6f6f6;
    outline: none;
    width: 50%;
    &:first-child {
      color: #1989fa;
    }
  }
}
</style>
