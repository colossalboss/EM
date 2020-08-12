<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>Presential Election</v-card-title>
        <v-card-text>

            <v-btn small class="text-capitalize warning" to="/add-position">Add Position</v-btn>
          <v-card flat>
            <v-card-title>
              Positions
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
            ></v-data-table>
          </v-card>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ElectionDetails",
  data() {
    return {
      search: "",
      headers: [{ text: "Name", value: "name" }, { text: "Count", value: "count" }],

      items: [
        { name: "Presidential", count: 100 },
        { name: "Senatorial", count: 100 },
        { name: "ASUU", count: 100 },
      ],
    };
  },

  methods: {
    
  }
};
</script>

<style scoped>
</style>