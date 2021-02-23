<style lang="less" scoped>
.test {
  color: red;
}
</style>

<template>
    <div class="container mx-auto">
        <Header></Header>
　　    <h1>vue3.0 初体验</h1>
　　    <p>少年你的头发可还好，？？？？ 哈哈哈哈哈</p>
    </div>
</template>

<script lang="ts">
import Header from "../component/Header/index.vue";

export default {

    name:"Home",
    components: {
      Header
    }
}
</script>

