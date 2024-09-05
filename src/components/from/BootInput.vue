<script setup lang="ts">
import {PropType} from 'vue';

type Type = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'month' | 'week' |
    'color' | 'file' | 'checkbox' | 'radio' | 'range' | 'hidden' | 'button' | 'reset' | 'image' | 'datetime-local';

defineProps({
    type: {
        required: true,
        type: String as PropType<Type>,
    },
    id: {
        required: false,
        type: String,
    },
    placeholder: {
        required: false,
        type: String,
        default: '',
    },
});
</script>
<template>
    <input :type="type"
           class="form-control"
           v-bind:id="id || undefined"
           v-bind:placeholder="placeholder || undefined"
    />
</template>
<style scoped lang="scss">
</style>