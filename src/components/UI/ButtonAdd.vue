<template>
  <button>
    <svg
      class="icon"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.13332 7.85555C1.50125 7.85555 0.988866 8.36794 0.988867 9C0.988867 9.63206 1.50126 10.1445 2.13332 10.1445L7.85545 10.1445L7.85545 15.8668C7.85545 16.4989 8.36784 17.0113 8.9999 17.0113C9.63196 17.0113 10.1444 16.4989 10.1444 15.8668L10.1443 10.1445L15.8667 10.1445C16.4988 10.1445 17.0112 9.63207 17.0112 9.00001C17.0112 8.36795 16.4988 7.85556 15.8667 7.85556L10.1443 7.85556L10.1443 2.13338C10.1443 1.50132 9.63195 0.988927 8.99989 0.988927C8.36783 0.988927 7.85544 1.50131 7.85544 2.13338L7.85544 7.85555L2.13332 7.85555Z"
        fill="#01A7FD"
      />
    </svg>
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps(["text"]);
</script>

<style lang="scss" scoped>
button {
  @include Paragraph_16_2;
  width: 204px;
  height: 44px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0);
  border: 2px solid $accent;
  border-radius: 24px;
  color: $accent;

  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    background-color: $accent;
    color: $white;

    & svg path {
      fill: #fff;
    }
  }

  & svg {
    margin-right: 8px;

    & path {
      transition: fill 0.3s;
    }
  }
}
</style>
