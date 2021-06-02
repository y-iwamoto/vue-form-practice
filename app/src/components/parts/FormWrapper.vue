<template>
    <div class="page">
         <slot name="form_title"></slot>
         <slot name="form_main"></slot>
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
  left: 0;
  right: 0;
  width: inherit;
  padding: 0 50px;
}
</style>