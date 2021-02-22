<template>
  <v-app>
    <!-- v-app-bar 에서 app을 넣어주지 않으면 vuetify가 어디에 달라 붙어야할지 감지를 못함... -->
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>page title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/about">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
    <!-- v-footer에서 app이 있을때는 바닦에 항상 보이고 app이 없으면 스크롤 가장 밑에 보인다 -->
    <v-footer app color="primary" dark absolute>
      <v-spacer />
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'

}
</script>
