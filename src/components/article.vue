<template>
  <div>article</div>
</template>

<script>
export default {
  created () {
    // 测试发请求
    this.$http.get('/articles').then(res => {
      console.log(res.data)
    })
  }
}
</script>

<style>
</style>
