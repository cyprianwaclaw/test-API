<template>
<div class="mt-20 mb-32 px-20 mx-aute gap-20" data-scroll-section>
    <div class="mt-20 mb-20">
        <form>
        <label>Enter Title</label>
        <input type="text" v-model="title"/>
        <input  class="ml-10" type="number" v-model="price"/>
        <button class="ng-bt-pri" @click="update">Send Message</button>
        </form>
    {{title}}
    </div>                        
     <div v-for="user in users" :key="user.id">
      {{user.id}}
      </div>                              
  </div>
  </template>
  
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  const title = ref("");
  const price = ref("");
  const update = async() => await $fetch( "https://api.escuelajs.co/api/v1/products/61", {
          headers: {
             "Content-Type": "application/json",
                    },
          method: "put",
          body: { 
            'title': title.value,
            'price': price.value
           }
      });
      
  const {data} = await useFetch('https://api.escuelajs.co/api/v1/products/61')


  interface User {
  id: number
  first_name: string
  last_name: string
  email: string
}

const { data: body } = useFetch<{ data: User[] }>('https://reqres.in/api/users')
const users = body.value?.data ?? []


  </script>