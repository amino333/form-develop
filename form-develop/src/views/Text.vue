<template>
  <div>
    <div class="column is-half is-offset-one-quarter panel is-primary p-0">
      <p class="button is-small is-info is-pulled-left">STEP3</p>
      <h1 class="title is-6 has-text-centered panel-heading mb-0">ご相談内容をご記入ください</h1>
      <br />
      <div class="has-text-info">-ご相談内容-</div>
      <br />
      <textarea v-model="keyword"></textarea>
      <br />
    </div>
    <div class="has-text-centered">
      <router-link to="/Question" class="button is-primary mr-6">前へ戻る</router-link>
      <router-link to="/answer" class="button is-primary">次へ進む</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    keyword: {
      get() {
        return this.$store.getters.keyword;
      },
      set(value) {
        this.$store.dispatch("commitKeyword", value);
      },
    },
  },
};
</script>

<style>
textarea {
  resize: none;
  width: 630px;
  height: 200px;
}
</style>