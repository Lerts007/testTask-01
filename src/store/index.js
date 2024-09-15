import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      userName: "",
      userAge: 0,
      childrens: [],
    },
    isActive: false,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getIsActive(state) {
      return state.isActive;
    },
  },
  mutations: {
    setUserName(state, name) {
      state.user.userName = name;
    },
    setUserAge(state, age) {
      state.user.userAge = age;
    },
    addChildren(state) {
      state.user.childrens.push({
        childrenName: "Имя",
        childrenAge: 0,
      });
    },
    removeChildren(state, id) {
      state.user.childrens.splice(id, 1);
    },

    buttonVisibility(state) {
      if (state.user.childrens.length < 5) state.isActive = false;
      else state.isActive = true;
    },

    setChildrenName(state, playLoad) {
      const { id, name } = playLoad;
      state.user.childrens[id].childrenName = name;
    },
    setChildrenAge(state, playLoad) {
      const { id, age } = playLoad;
      state.user.childrens[id].childrenAge = age;
    },
    saveLocal(state) {
      localStorage.setItem("userLocal", JSON.stringify(state.user));
    },
  },
  actions: {
    removeChildren({ commit }, id) {
      commit("removeChildren", id);
      commit("buttonVisibility");
    },
    addChildren({ commit }) {
      commit("addChildren");
      commit("buttonVisibility");
    },

    loadLocal({ commit, state }) {
      if (localStorage.getItem("userLocal")) {
        let obj = JSON.parse(localStorage.getItem("userLocal"));

        state.user = obj;

        commit("buttonVisibility");
      }
    },
  },
});
