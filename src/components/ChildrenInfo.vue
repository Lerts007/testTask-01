<template>
  <div class="ChildrenInfo">
    <p class="ChildrenInfo__p">
      <slot></slot>
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.ChildrenInfo {
  // display: table;
  padding: 10px 20px;

  background-color: $grayL;
  border-radius: 5px;
}
.ChildrenInfo__p {
  @include Paragraph_16_2_blod;
}
</style>
