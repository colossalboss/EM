<template>
  <div>
    <v-container>
        <v-card class="mb-4">
      <v-card-title>Election Committee</v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="10"
          :search="search"
          @click:row="viewElection"
        ></v-data-table>
      </v-card-text>
    </v-card>

        <v-card class="mb-4">
      <v-card-title>Candidates</v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headersC"
          :items="candidates"
          :items-per-page="10"
          :search="search"
          @click:row="$router.push('/election-report')"
        ></v-data-table>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>Registered Voters</v-card-title>
      <v-card-text>
        <div class="text-left">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" class="text-capitalize" dark v-bind="attrs" v-on="on">Filter</v-btn>
            </template>
            <v-list>
              <v-list-item  @click="filter()">
                <v-list-item-title>Validated Voters</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <v-data-table
          :headers="headersV"
          :items="voters"
          :items-per-page="10"
          :search="search"
          @click:row="viewElection"
        ></v-data-table>
      </v-card-text>
    </v-card>

    <v-card class="my-4">
        <v-card-text>
            <ResultBar />
        </v-card-text>
    </v-card>
    </v-container>
  </div>
</template>

<script>
import ResultBar from "@/components/ReportChart"
export default {
  name: "Report",
  components: { ResultBar },
  data() {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Post", value: "post" },
      ],
      headersV: [
        { text: "Name", value: "name" },
        { text: "Validated", value: "validated" },
        { text: "Voted", value: "voted" },
      ],
      headersC: [
        { text: "Name", value: "name" },
        { text: "Position", value: "position" },
        { text: "Total votes", value: "totalVotes" },
      ],

      items: [
        { name: "Mr A", post: "Chairman", id: 1 },
        { name: "Mr B", post: "Deputy Chairman", id: 2 },
        { name: "Mr C", post: "Secretary", id: 3 },
      ],

      voters: [
        { name: "Voter A", validated: "true", id: 1, voted: "true" },
        { name: "Voter B", validated: "false", id: 2, voted: "false" },
        { name: "Voter C", validated: "true", id: 3, voted: "true" },
      ],

      candidates: [
        { name: "Candidate A", position: "President", id: 1, totalVotes: 10000 },
        { name: "Candidate B", position: "Senator", id: 2, totalVotes: 2000 },
        { name: "Candidate C", position: "Governor", id: 3, totalVotes: 15000 },
      ],
    };
  },
};
</script>

<style scoped>
</style>