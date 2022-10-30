
<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

interface loginForm {
  email: string;
  password: string;
}

let loginForm: loginForm = {
  email: "",
  password: "",
};

function login() {
  authStore.login(loginForm);
}
</script>

<template>
  <v-container>
    <form @submit.prevent="login">
      <label>E-mail</label>
      <input v-model="loginForm.email" required type="email" />
      <label>Password</label>
      <input v-model="loginForm.password" required type="password" />
      <button type="submit">Login</button>
    </form>
  </v-container>
</template>