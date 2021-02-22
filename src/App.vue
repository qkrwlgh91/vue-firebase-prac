<template>
  <v-app>
    <!-- v-app-bar 에서 app을 넣어주지 않으면 vuetify가 어디에 달라 붙어야할지 감지를 못함... -->
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <SiteTitle :title="title" />
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <SiteMenu />
    </v-navigation-drawer>
    <v-content>
      <router-view />
    </v-content>
    <SiteFooter :footer="footer" />
  </v-app>
</template>

<script>
import SiteTitle from '@/views/site/title'
import SiteFooter from '@/views/site/footer'
import SiteMenu from '@/views/site/menu'

export default {
  components: { SiteTitle, SiteFooter, SiteMenu },
  name: 'App',
  data () {
    return {
      drawer: false,
      title: 'props title',
      footer: 'props footer'
    }
  }

}
</script>
