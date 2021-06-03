<template>
    <div class="page">
      <div class="form-box is-relative">
         <slot name="form_title"></slot>
         <div class="is-flex is-flex-direction-column is-justify-content-flex-start p-5">
          <slot name="form_main"></slot>
         </div>
      </div>
      <slot name="form_transition"></slot>
    </div>
</template>
<script>
export default {
    name: 'FormWrapper',
}
</script>
<style scoped>
.page {
  position: fixed;
  left: 20%;
  right: 20%;
  width: inherit;
  padding: 0 50px;
}
.form-box {
  border: 1px solid hsl(171, 100%, 41%);
}
</style>