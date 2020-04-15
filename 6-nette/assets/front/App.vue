<script>
import { getStars } from "./model/GithubClient";

export default {
  data: () => ({
    stars: [],
    username: "chemix",
    error: null
  }),
  template: '#latte-vue',
  methods: {
    async loadRepos() {
      this.error = null;

      try {
        this.stars = await getStars(this.username);
      } catch (e) {
        this.error = e.response.statusText;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card-body {
    color: red;
}
</style>
