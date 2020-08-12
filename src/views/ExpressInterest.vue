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
          Expressions Of Interest
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
          @click:row="viewDetails"
        ></v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CreateElection",
  data() {
    return {
      search: "",
      headers: [
        { text: "Name", value: "name" },
        { text: "Election", value: "election" },
        { text: "", value: "id" },
      ],

      items: [
          {name: "Mr A", election: "Presidential Election", id: 1},
          {name: "Mr B", election: "Presidential Election", id: 2},
          {name: "Mr C", election: "Presidential Election", id: 3},
          {name: "Mr D", election: "Presidential Election", id: 4},
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
</style>