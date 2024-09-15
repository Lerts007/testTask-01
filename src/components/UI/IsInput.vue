<template>
  <label
    for="IsInput"
    class="IsInput__label"
    :class="focused ? 'IsInput_focus' : ''"
  >
    <slot></slot>
    <input
      v-if="type === 'text'"
      type="text"
      class="IsInput__input"
      name="IsInput"
      maxlength="20"
      @focus="focused = true"
      @blur="focused = false"
      v-model="name"
      @input="$emit('name', name)"
    />
    <input
      v-if="type === 'number'"
      type="number"
      max="99"
      maxlength="2"
      class="IsInput__input"
      @focus="focused = true"
      @blur="focused = false"
      v-model="age"
      @input="handleInput"
    />
  </label>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["type", "name", "value"]);
const emit = defineEmits(["age"]);

const focused = ref(false);

const age = ref(props.value);
const name = ref(props.value);

const handleInput = (event) => {
  const value = event.target.value;

  if (value.length > 2) {
    age.value = value.slice(0, 2);
  }

  event.target.value = age.value;
  emit("age", age.value);
};
</script>

<style lang="scss" scoped>
.IsInput__label {
  @include Paragraph_16_2_medium;

  margin-bottom: 10px;
  padding: 12px 17px;

  border: 1px solid $grayL;
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  color: $gray;

  transition: all 0.3s;

  &:last-child {
    margin-bottom: 0;
  }
}

.IsInput__input {
  @include Paragraph_16_2;
  padding: 7px 2px;

  border: none;

  outline: none !important;
}

.IsInput_focus {
  box-shadow: 0px 4px 56px rgba(51, 51, 51, 0.16);
  // box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.16);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
