<template>
  <footer>
    <p>all rights reserved</p>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  height: 76px;
  margin-top: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: $grayM;

  & p {
    @include Paragraph_13_3;
  }
}
</style>
