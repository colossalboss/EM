<template>
  <div>
    <v-container>
      <v-card flat class="py-4">
        <v-layout wrap justify-space-around>
          <v-flex sm3>
            <v-card>
              <v-card-text class="text-center box">
                <h3>Nominations</h3>
                <h4>500</h4>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex sm3>
            <v-card>
              <v-card-text class="text-center box">
                <h3>Nominations</h3>
                <h4>500</h4>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex sm3>
            <v-card>
              <v-card-text class="text-center box">
                <h3>Nominations</h3>
                <h4>500</h4>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>

      <v-card flat class="mt-5">
        <v-card-title class="warning lighten-2">Candidates</v-card-title>
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

      <v-card flat>
        <v-card-text>
          <BarChart />
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart";
export default {
  name: "Dashboard",
  components: { BarChart },
  data() {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Position", value: "position" },
      ],
      items: [
        { name: "Mr A", position: "President", id: 1 },
        { name: "Mr B", position: "President", id: 2 },
        { name: "Mr C", position: "President", id: 3 },
        { name: "Mr D", position: "President", id: 4 },
      ],
    };
  },
};
</script>

<style scoped>
</style>