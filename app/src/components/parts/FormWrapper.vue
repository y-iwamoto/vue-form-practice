<template>
  <div class="is-relative">
    <transition name="router-transition">
      <div v-if="show" class="columns">
        <div class="column"></div>
        <div class="column is-half">
          <div class="form-box is-relative">
            <slot name="form_title"></slot>
            <div class="is-flex is-flex-direction-column is-justify-content-flex-start p-5">
              <slot name="form_main"></slot>
            </div>
          </div>
          <slot name="form_transition"></slot>
        </div>
      <div class="column"></div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
    name: 'FormWrapper',
    data: function () {
      return {
        show: false,
      };
    },
    mounted() {
      this.show = true;
    },
    beforeRouteLeave(to, from, next) {
      this.show = false;
      setTimeout(() => {
        next();
      }, 500);
    },
}
</script>
<style scoped>
.router-transition-enter-active {
  animation: fadeIn .5s;
  animation-delay: .5s;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.router-transition-leave-active {
  animation: fadeOut .5s;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.form-box {
  border: 1px solid hsl(171, 100%, 41%);
}
</style>