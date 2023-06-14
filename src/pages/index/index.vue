<template>
    <view>
        <AtButton size="small" loading type='primary'>{{ message }}</AtButton>
    </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const message = ref('Hello World!');
</script>
