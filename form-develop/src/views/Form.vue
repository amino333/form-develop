<template>
  <div>
    <div class="column is-half is-offset-one-quarter panel is-primary p-0">
      <p class="button is-small is-info is-pulled-left">STEP１</p>
      <h1 class="title is-6 has-text-centered panel-heading mb-0">お客様の情報を入力してください。</h1>

      <form>
        <div class="has-text-info">-性別-</div>
        <br />
        <label>男性</label>
        <input type="radio" value="男性" name="gender" v-model="computedGender" />
        <label>女性</label>
        <input type="radio" value="女性" name="gender" v-model="computedGender" />
        <br />

        <div class="has-text-info">-生年月日-</div>
        <br />
        <select v-model="computedYear">
          <option v-for="age in chronology" :key="age.year" :value="age.year+'年'">{{ age.label }}年</option>
        </select>年
        <select v-model="computedMonth">
          <option v-for="m of 12" v-bind:key="m" :value="m +'月'">{{m}}</option>
        </select>
        月
        <select v-model="computedDays">
          <option v-for="d of 31" :key="d" :value="d+'日'">{{ d }}</option>
        </select>日
      </form>
    </div>
    <div class="has-text-centered">
      <router-link to="/Question" class="button is-primary">次へ進む</router-link>
    </div>
  </div>
</template>
<script>
import "bulma/css/bulma.css";
import { chronology } from "../store/modules/years";

export default {
  data() {
    return {
      chronology,
    };
  },
  computed: {
    computedGender: {
      get() {
        return this.$store.getters.gender;
      },
      set(value) {
        this.$store.dispatch("commitgender", value);
      },
    },
    computedMonth: {
      get() {
        return this.$store.getters.month;
      },
      set(value) {
        this.$store.dispatch("commitmonth", value);
      },
    },
    computedDays: {
      get() {
        return this.$store.getters.days;
      },
      set(value) {
        this.$store.dispatch("commitdays", value);
      },
    },
    computedYear: {
      get() {
        return this.$store.getters.year;
      },
      set(value) {
        this.$store.dispatch("commityear", value);
      },
    },
  },
};
</script>

<style></style>
