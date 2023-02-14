<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

const src = ref("");

onLoad((options) => {
  src.value = options?.src ?? "";
});
</script>

<template>
  <web-view :src="src"></web-view>
</template>
