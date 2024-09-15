<template>
  <div class="content">
    <div class="personalData">
      <h3 class="content__title">Персональные данные</h3>
      <IsInput type="text" @name="name" :value="user.userName">Имя</IsInput>
      <IsInput type="number" @age="age" :value="user.userAge">Возраст</IsInput>
    </div>
    <div class="userChildrens">
      <div class="userChildrens-title">
        <h3 class="content__title">Дети (макс. 5)</h3>
        <ButtonAdd
          text="Добавить ребенка"
          :class="{ buttonVisibility: isActive }"
          @click="addChildren"
        />
      </div>
      <Children v-for="children in user.childrens.length" :id="children - 1" />
      <Buttons @click="store.commit('saveLocal')">Сохранить</Buttons>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import Children from "./Children.vue";
import ButtonAdd from "./UI/ButtonAdd.vue";
import Buttons from "./UI/Buttons.vue";
import IsInput from "./UI/IsInput.vue";

const store = useStore();
const isActive = computed(() => store.getters.getIsActive);
const user = computed(() => store.getters.getUser);

const name = (a) => {
  store.commit("setUserName", a);
};

const age = (a) => {
  store.commit("setUserAge", a);
};

const addChildren = () => {
  if (user.value.childrens.length < 5) {
    store.dispatch("addChildren");
  } else {
    console.log("максимум 5 детей");
  }
};
</script>

<style lang="scss" scoped>
.personalData {
  display: flex;
  flex-direction: column;
}

.content__title {
  @include Paragraph_16_2_medium;
  margin-bottom: 26px;
}
.userChildrens {
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.userChildrens-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buttonVisibility {
  display: none;
}
</style>
