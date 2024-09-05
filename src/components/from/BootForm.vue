<script setup lang="ts">

import {PropType} from "vue";

const props = defineProps({
    model: {
        required: false,
        type: Object as PropType<{ [key: string]: any } | {}>,
    },
    submit: {
        required: false,
        type: Function as PropType<(data: any) => void>,
    },
});

const submit = () => {
    if (props.submit) {
        props.submit(props.model);
    }
};
</script>
<template>
    <form class="form" @submit.prevent="submit">
        <slot></slot>
    </form>
</template>
<style scoped lang="scss">
.form {
    display: grid;
    grid-template-columns: auto 1fr; /* 自动适应第一个 div 的最大宽度 */
    gap: 10px; /* 子元素间距 */
}
</style>