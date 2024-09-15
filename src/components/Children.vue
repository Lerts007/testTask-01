<template>
  <div class="children">
    <IsInput type="text" @name="name" :value="user.childrens[id].childrenName">
      Имя
    </IsInput>
    <IsInput type="number" @age="age" :value="user.childrens[id].childrenAge">
      Возраст
    </IsInput>
    <ButtonDeletChildren @click="removeChildren" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import ButtonDeletChildren from "./UI/ButtonDeletChildren.vue";
import IsInput from "./UI/IsInput.vue";

const props = defineProps(["id"]);

const store = useStore();
const user = computed(() => store.getters.getUser);

const name = (a) => {
  store.commit("setChildrenName", { id: props.id, name: a });
  console.log(a);
};

const age = (a) => {
  store.commit("setChildrenAge", { id: props.id, age: a });
};

const removeChildren = () => {
  console.log(props.id);
  store.dispatch("removeChildren", props.id);
};
</script>

<style lang="scss" scoped>
.children {
  display: grid;
  grid-template-columns: 1fr 1fr 60px;
  gap: 18px;
}
</style>
