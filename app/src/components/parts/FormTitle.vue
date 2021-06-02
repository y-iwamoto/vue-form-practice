<template>
    <div>
        <span>{{ step }}</span>
        <!-- <img src=""alt={{ step }}> -->
        <p>{{ message }}</p>
    </div>
</template>
<script>
export default {
    name: 'FormTitle',
    props: ["step","imageName","message"]
}
</script>