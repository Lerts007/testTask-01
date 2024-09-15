<template>
  <Header @asd="asd" />
  <Form v-if="IsVisible" />
  <Preview v-else />
  <Footer />
</template>

<script setup>
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import Preview from "./components/Preview.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import Footer from "./components/Footer.vue";

const store = useStore();
const IsVisible = ref(true);

function asd(bol) {
  IsVisible.value = bol;
}

onMounted(() => {
  store.dispatch("loadLocal");
});
</script>

<style scoped></style>
