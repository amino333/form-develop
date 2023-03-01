<template >
  <div>
    <div>
      <div class="column is-half is-offset-one-quarter panel is-primary p-0">
        <p class="button is-small is-info is-pulled-left">STEP2</p>
        <h1 class="title is-6 has-text-centered panel-heading mb-0">以下にお答えください</h1>
        <div>
          <dt
            v-for="questiondata in healthConfirmation"
            v-bind:key="questiondata.id"
            class="has-text-info"
          >{{ questiondata.question1 }}</dt>
          <br />
          <label>はい</label>
          <input type="radio" value="はい" v-model="computedanswer" />
          <label>いいえ</label>
          <input type="radio" value="いいえ" v-model="computedanswer" />
          <br />
          <br />
          <div v-if="computedanswer !== ''">
            <dt
              v-for="questiondata in healthConfirmation"
              v-bind:key="questiondata.id"
              class="has-text-info"
            >{{ questiondata.question2 }}</dt>
            <br />
            <label>はい</label>
            <input type="radio" value="はい" v-model="computedanswer2" />
            <label>いいえ</label>
            <input type="radio" value="いいえ" v-model="computedanswer2" />
          </div>
          <br />
          <div v-if="computedanswer2 !== ''">
            <dt
              v-for="questiondata in healthConfirmation"
              v-bind:key="questiondata.id"
              class="has-text-info"
            >{{ questiondata.question3 }}</dt>
            <br />
            <label>はい</label>
            <input type="radio" value="はい" v-model="computedanswer3" />
            <label>いいえ</label>
            <input type="radio" value="いいえ" v-model="computedanswer3" />
          </div>
          <br />
        </div>
      </div>
    </div>
    <div class="has-text-centered">
      <router-link to="/" class="button is-primary mr-6 mb-5">前へ戻る</router-link>
      <router-link to="/Text" class="button is-primary mb-5">次へ進む</router-link>
    </div>
  </div>
</template>

<script>
import { questionList } from "../store/question";

export default {
  data() {
    return {
      questionList,
    };
  },
  computed: {
    healthConfirmation() {
      return this.questionList.healthConfirmation;
    },
    computedanswer: {
      get() {
        return this.$store.getters.answer;
      },
      set(value) {
        this.$store.dispatch("commitanswer", value);
      },
    },
    computedanswer2: {
      get() {
        return this.$store.getters.answer2;
      },
      set(value) {
        this.$store.dispatch("commitanswer2", value);
      },
    },
    computedanswer3: {
      get() {
        return this.$store.getters.answer3;
      },
      set(value) {
        this.$store.dispatch("commitanswer3", value);
      },
    },
  },
};
</script>

<style>
</style>



