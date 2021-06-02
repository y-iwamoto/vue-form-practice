<template>
    <div>
        <router-link :to="backLink" v-if="backLink">{{backButtonName}}</router-link>
        <router-link :to="nextLink" v-if="nextLink">{{nextButtonName}}</router-link>
    </div>
</template>
<script>
export default {
    name: 'TransitionButtons',
    props: ["backLink","backButtonName","nextLink","nextButtonName"]
}
</script>