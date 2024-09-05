<script setup lang="ts">

import BootForm from "@/components/from/BootForm.vue";
import {reactive} from "vue";
import BootFormItem from "@/components/from/BootFormItem.vue";
import BootInput from "@/components/from/BootInput.vue";
import BootButton from "@/components/BootButton.vue";

const form = reactive({});

</script>

<template>
    <div>测试</div>
    <BootForm :model="form" class="w-100 border border-1" style="max-width: 680px">
        <boot-form-item label="用户名">
            <boot-input type="text" placeholder="请输入用户名"></boot-input>
        </boot-form-item>
        <boot-form-item label="密码">
            <boot-input type="password"></boot-input>
        </boot-form-item>
        <BootButton type="button">提交</BootButton>
    </BootForm>
</template>

<style scoped lang="scss">
</style>