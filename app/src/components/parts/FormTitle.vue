<template>
    <div class="has-background-primary-light py-3 form-title has-text-centered">
        <span class="step has-background-info has-text-white-ter">{{ step }}</span>
        <span class="icon-text">
            <span class="icon">
                <i v-if="imageName === 'address-card'" class="fas fa-address-card"></i>
                <i v-if="imageName === 'chalkboard-teacher'" class="fas fa-chalkboard-teacher"></i>
                <i v-if="imageName === 'clipboard-list'" class="fas fa-clipboard-list"></i>
            </span>
            <span class="is-size-5">{{ message }}</span>
        </span>
    </div>
</template>
<script>
export default {
    name: 'FormTitle',
    props: ["step","imageName","message"]
}
</script>
<style scoped>
.step {
    position: absolute;
    top: 0;
    left: 0;
    padding: 3px;
    border-radius: 3px;
}
.form-title {
    border-bottom: 1px solid hsl(171, 100%, 41%);
}

</style>