<template>
  <div>
    <div class="column is-half is-offset-one-quarter panel is-primary p-0">
      <p class="button is-small is-info is-pulled-left">STEP4</p>
      <h1 class="title is-6 has-text-centered panel-heading mb-0">以下の内容をご確認ください。</h1>
      <br />
    </div>
    <div class="box1">
      <div class="has-text-info">-性別-</div>
      <p>{{$store.getters.gender}}</p>
      <br />
      <div class="has-text-info">-生年月日-</div>
      <p>{{$store.getters. year}}{{$store.getters.month}}{{$store.getters.days}}</p>
      <br />
      <div class="has-text-info">現在、生命保険に加入されていますか？</div>
      <p>{{$store.getters.answer}}</p>
      <br />
      <div class="has-text-info">現在入院中ですか。または、最近3か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</div>
      <p>{{$store.getters.answer2}}</p>
      <br />
      <div class="has-text-info">過去５年以内に、病気や怪我で、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？</div>
      <p>{{$store.getters.answer3}}</p>
      <br />

      <br />
      <div class="has-text-info">-ご相談内容-</div>
      <p>{{$store.getters.keyword}}</p>
    </div>

    <div class="has-text-centered">
      <router-link to="/Text" class="button is-primary mr-6">前へ戻る</router-link>
      <router-link to="/answer" class="button is-primary">送信</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.box1 {
  padding: 0.5em 1em;
  margin: 2em 0;
  font-weight: bold;
  border: solid 3px #000000;
}
.box1 p {
  margin: 0;
  padding: 0;
}
</style>

  