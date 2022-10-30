<template>
    <form>
        <label><p>User name</p></label>
        <input type="name" v-model="username"/>
    </form>
</template>

<script setup lang="ts">
import {ref} from "vue";
const username = ref(null);
</script>
