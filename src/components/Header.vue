<template>
  <header>
    <div class="logo">
      <img class="logo__img" src="/Logo.svg" alt="" />
    </div>
    <button class="btn-form" @click="$emit('asd', (IsVisible = true))">
      Форма
    </button>
    <button clas="btn-preview" @click="$emit('asd', (IsVisible = false))">
      Превью
    </button>
  </header>
</template>

<script setup>
import { ref } from "vue";

const IsVisible = ref(true);
</script>

<style lang="scss" scoped>
header {
  position: relative;
  z-index: 10;
  padding: 26px 92px;
  border-bottom: $grayL solid 1px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.logo {
  position: absolute;
  top: 0;
  left: 0;
  margin: 24px 92px;
  cursor: pointer;
}

button {
  @include Paragraph_16_2;
  border: none;
  color: $gray;
  background-color: rgba(0, 0, 0, 0%);
  cursor: pointer;
  outline: none !important;
}
</style>
