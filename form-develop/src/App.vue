<template>
  <div>
    <nav>
      <router-link to="/"></router-link>

      <div>
        <router-link to="/questionnaire"></router-link>
      </div>

      <router-link to="/Text"></router-link>
      <div>
        <router-link to="/answer"></router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>