<template>
  <button>
    <slot>Кнопка</slot>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
button {
  @include Paragraph_16_2;
  width: 118px;
  height: 44px;
  border-radius: 22px;
  background-color: $accent;
  border: none;
  color: $white;

  cursor: pointer;
}
</style>
