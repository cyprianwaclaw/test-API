<template>
    <form>
        <label><p>Email</p></label>
        <input type="email" name="email" v-model="email"/>
        <label><p>Password</p></label>
        <input type="password" name="password"  v-model="password"/>
        <button class="" @click.prevent="postRegister">Zaloguj się</button>
    </form>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {registerWithEmail} from "~/composables/useAuth"

const email = ref(null);
const password = ref(null);

const postRegister = async function () {
    await registerWithEmail (email.value, password.value);
}

</script>
