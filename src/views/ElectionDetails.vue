<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>
          Presential Election
          <v-spacer></v-spacer>
          <v-btn class="text-capitalize success" to="/setup">Set Up</v-btn>
        </v-card-title>
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
              @click:row="$router.push('/election-report')"
            ></v-data-table>
          </v-card>
        </v-card-text>
      </v-card>

      <v-card flat>
        <v-card-text>
          <ResultBar />
        </v-card-text>
      </v-card>

      <v-card>
        <v-card-title>
          Summary
        </v-card-title>
        <v-card-text class="text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, non. Animi id aliquid doloremque nobis rerum non provident perspiciatis officia blanditiis, minima voluptatibus hic sequi nisi reiciendis nihil deleniti ipsam aliquam aut eos voluptates? Architecto aspernatur assumenda deserunt deleniti adipisci dicta fugit odio et vero excepturi cupiditate, beatae quia a? Perferendis quis quasi similique magnam veniam ducimus molestiae cupiditate voluptas officia assumenda. Pariatur, unde labore! Cupiditate hic alias, velit autem delectus dignissimos repellat qui quisquam modi molestias provident dicta, sequi amet a quam nesciunt laborum distinctio sed, inventore eum? Fugiat officia quia commodi dolor cum distinctio repudiandae sed illo corrupti.
          </p>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ResultBar from "@/components/ResultBar"
export default {
  name: "ElectionDetails",
  components: { ResultBar },
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