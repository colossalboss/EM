<template>
  <div>
    <v-container>
      <v-card flat>
        <v-card-actions class="right">
          <v-btn class="text-capitalize right warning" router to="/create-eoi">Add EOI</v-btn>
        </v-card-actions>
      </v-card>
      <v-card>
        <v-card-title>
          Elections
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="10"
          :search="search"
          @click:row="viewElection"
        ></v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Elections",

  data() {
    return {
      search: "",
      headers: [{ text: "Name", value: "name" }],

      items: [
        { name: "Presidential" },
        { name: "Senatorial" },
        { name: "ASUU" },
      ],
    };
  },

  methods: {
    viewElection() {
      /* eslint no-console: 0 */
      console.log("y");
      this.$router.push("/election-details")
    }
  }
};
</script>

<style scoped>
</style>