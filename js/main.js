/**
 * @author Matteo Fattorini 01-12-2020
 * @author SLIDESHOW vue.js
 */

const app = new Vue({
  el: "#container",
  data: {
    images,
  },
  methods: {
    addActive(event) {
      this.$refs.cards.forEach((element) => element.classList.remove("active"));
      event.target.classList.add("active");
    },
  },
});
