<script setup lang="ts">
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>

<template>
  <view class="flex items-center">
    <view class="font-bold pr-1">{{ appStore.motto }} </view>
    <view class="i-icon-park-outline-like text-red-500"></view>
  </view>
</template>
