<template>
  <transition :name="transitionName">
    <router-view class="child-view"/>
  </transition>
</template>

<script>
export default {
  name: 'App',
  created() {},
  data() {
    return {
      transitionName: 'slide-left',
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    },
  },
};
</script>

<style scoped>
.slide-left-enter, .slide-right-leave-active {
  opacity: 1;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 1;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
.slide-up-enter {
  opacity: 1;
  -webkit-transform: translate(0, 100%);
  transform: translate(0, 100%);
}
.slide-down-enter {
  opacity: 1;
  -webkit-transform: translate(0, -100%);
  transform: translate(0, -100%);
}
.child-view {
  position: absolute;
  transition: all 200ms cubic-bezier(.55,0,1,1);
}
</style>
