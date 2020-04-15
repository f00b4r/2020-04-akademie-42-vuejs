<template>
  <div>
    <h1>Hello!</h1>

    <div>Num. of clicks: {{clicks}}</div>

    <button @click="onPlusClick(1)">PLUS</button>
    <button @click="onPlusClick(5)">PLUS 5</button>
    <button @click="onMinusClick">MINUS</button>
    <button @click="onActionClick">AKCE</button>
  </div>
</template>

<script>
export default {
  computed: {
    clicks() {
      return this.$store.state.user.clicks;
    }
  },
  methods: {
    onPlusClick(clicks = 1) {
      this.$store.commit("plus", { clicks: clicks });
    },
    onMinusClick() {
      this.$store.commit("minus");
    },
    onActionClick() {
      this.$store.dispatch("increase");
    }
  }
};
</script>
