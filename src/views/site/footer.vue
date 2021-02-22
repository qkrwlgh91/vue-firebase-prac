<template>
 <!-- v-footer에서 app이 있을때는 바닦에 항상 보이고 app이 없으면 스크롤 가장 밑에 보인다 -->
    <v-footer app color="primary" dark absolute>
      <v-spacer />
      <div>&copy; {{ new Date().getFullYear() + ' ' + footer }}</div>
    </v-footer>
</template>

<script>
export default {
  props: ['footer']
}
</script>
