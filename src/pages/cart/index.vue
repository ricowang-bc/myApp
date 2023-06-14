<template>
    <view class="index">
        <AtButton>{{ message }}</AtButton>
        <AtButton size="small" loading type='primary'>按钮文案</AtButton>
        <AtButton loading  type='secondary'>按钮文案</AtButton>
        <AtButton loading  type='secondary'>按钮文案</AtButton>
        <AtButton loading  type='secondary'>按钮文案</AtButton>
        <AtButton loading  type='secondary'>按钮文案</AtButton>
        <AtButton loading  type='secondary'>按钮文案</AtButton>
    </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const message = ref('Hello World!');
</script>
