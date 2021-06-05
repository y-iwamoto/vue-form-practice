<template>
    <header class="header has-background-white-ter is-flex is-justify-content-space-between">
        <div class="is-align-self-center ml-4 is-size-4">Sample App</div>
        <nav>
            <ul class="is-flex is-align-items-flex-start mt-2">
                <li class="mr-2">ログイン</li>|
                <li class="ml-2">新規登録</li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'Header',
}
</script>
<style scoped>
.header {
    height: 10vh;
}
</style>
