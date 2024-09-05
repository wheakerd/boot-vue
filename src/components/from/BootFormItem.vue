<script setup lang="ts">
defineProps({
    forId: {
        required: false,
        type: String,
    },
    label: {
        required: false,
        type: String,
    },
});
</script>

<template>
    <div class="w-100 form-item">
        <label :for="forId" class="col-form-label">{{ label }}</label>
        <slot :id="forId" class=""></slot>
    </div>
</template>

<style scoped lang="scss">
.form-item {
    display: contents;
}
</style>