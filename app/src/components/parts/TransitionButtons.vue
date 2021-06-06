<template>
    <div class="is-flex is-justify-content-center mt-5">
        <router-link class="button is-primary" :to="backLink" v-if="backLink">{{backButtonName}}<i class="fas fa-chevron-right ml-2"></i></router-link>
        <router-link class="button is-primary ml-5" :to="nextLink" v-if="nextLink">
            <span @click="$emit('save-form', {formInfo, requestKey})">
                {{nextButtonName}}
                <i class="fas fa-chevron-right ml-2"></i>
            </span>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'TransitionButtons',
    props: ["backLink","backButtonName","nextLink","nextButtonName","formInfo", "requestKey"]
}
</script>
