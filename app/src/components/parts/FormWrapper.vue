<template>
    <div>
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
