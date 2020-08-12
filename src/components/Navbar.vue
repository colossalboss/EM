<template>
  <div class="py-3 mb-5">
    <header>
      <nav>
        <v-app-bar flat app>
          <v-progress-linear
            style="position:absolute;bottom:0"
            indeterminate
            color="cyan"
            v-if="loading"
          ></v-progress-linear>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

          <span class="font-weight-bold">EM</span>

          <v-spacer></v-spacer>

          <v-btn small text color="grey">Sign In</v-btn>
          <v-btn small text color="grey">
            <span>Dashboard</span>
          </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app dark color="primary">
          <v-container>
            <v-layout column>
              <v-flex sm6 class="logo">
                <img src="https://via.placeholder.com/80" class="logo" alt />
              </v-flex>
            </v-layout>
          </v-container>
          <v-list dense nav>
            <v-list-item router to="/">
              <v-list-item-icon>
                <v-icon>mdi-event</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>
                  <v-icon left>mdi-vote</v-icon>
                  Create Election
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item router to="/">
              <v-list-item-icon>
                <v-icon>mdi-event</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>
                  <v-icon left>mdi-vote</v-icon>
                  Results
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list dense nav>
            <v-list-item  router to="/about">
              <v-list-item-icon>
                <v-icon>mdi-event</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>
                  <v-icon left>mdi-lock</v-icon>
                  Sign Up
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </nav>
    </header>
  </div>
</template>

<script>

export default {
  name: "Navbar",

  data() {
    return {
      drawer: false,
    };
  },

  methods: {
    
  },

  computed: {
    
  },

  created() {
    
  },
};
</script>

<style scoped>
.logo {
  margin: 0 auto;
}
</style>