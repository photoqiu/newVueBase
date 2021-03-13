<style lang="less" scoped>
.test {
  color: red;
}
</style>

<template>
    <div class="container mx-auto">
        <Header></Header>
        <header-title></header-title>
        <div class="divide-y-4 divide-yellow-600 divide-dashed"></div>
        <div class="bg-gradient-to-br from-light-blue-400 to-indigo-500 grid grid-cols-2 gap-6">
          <shopping-face-box></shopping-face-box>
          <shopping-face-box></shopping-face-box>
          <shopping-face-box></shopping-face-box>
          <shopping-face-box></shopping-face-box>
        </div>
        <header-title></header-title>
        <div class="divide-y-4 divide-yellow-600 divide-dashed"></div>
        <div class="grid grid-cols-1 gap-12">
          <music-player></music-player>
        </div>
        <div class="grid grid-cols-1 gap-12">
          <description />
        </div>
        <header-title></header-title>
        <div class="divide-y-4 divide-yellow-600 divide-dashed"></div>
        <header-title></header-title>
        <div class="divide-y-4 divide-yellow-600 divide-dashed"></div>
    </div>
</template>

<script lang="ts">
import Header from "../component/Header/index.vue";
import HeaderTitle from "../component/Header/HeaderTitle/index.vue";
import ShoppingFaceBox from "../component/ImageBoxes/ShoppingFace/index.vue";
import MusicPlayer from "../component/Player/MusicPlayer/index.vue";
import Description from "../component/Descriptions/index.vue";

export default {

    name:"Home",
    components: {
      Header,
      HeaderTitle,
      MusicPlayer,
      Description,
      ShoppingFaceBox
    }
}
</script>

