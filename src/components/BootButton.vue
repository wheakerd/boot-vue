<script setup lang="ts">
import {PropType} from 'vue';

type Type = 'link' | 'button' | 'submit' | 'reset';
type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

defineProps({
    type: {
        required: true,
        type: String as PropType<Type>,
    },
    color: {
        required: false,
        type: String as PropType<Color>,
    },
    outline: {
        required: false,
        type: Boolean,
        default: false,
    },
    nowrap: {
        required: false,
        type: Boolean,
        default: true,
    },
});
</script>
<template>
    <a v-if="type === 'link'" class="btn">
        <slot></slot>
    </a>
    <button v-else class="btn btn-outline-danger">
        <slot></slot>
    </button>
</template>
<style scoped>
</style>