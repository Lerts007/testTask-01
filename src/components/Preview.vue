<template>
  <div class="content">
    <div class="personalData">
      <h3 class="content__title">Персональные данные</h3>
      <p class="content__p">
        {{ user.userName + ", " + user.userAge + " лет." }}
      </p>
    </div>
    <div class="userChildrens">
      <h3 class="content__title">Дети</h3>
      <div class="userChildrens__div">
        <ChildrenInfo v-for="children in user.childrens">
          {{ children.childrenName + ", " + children.childrenAge + " лет." }}
        </ChildrenInfo>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ChildrenInfo from "./ChildrenInfo.vue";

const store = useStore();

const user = computed(() => store.getters.getUser);
</script>

<style lang="scss" scoped>
.content__title {
  @include Paragraph_16_2_medium;
  margin-bottom: 26px;
}

.content__p {
  @include Paragraph_16_2_blod;
}
.personalData {
  margin-bottom: 60px;
}

.userChildrens__div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}
</style>
