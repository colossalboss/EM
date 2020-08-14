<template>
  <div>
    <v-container>
      <v-card>
        <v-layout wrap>
          <v-flex sm8>
            <v-card flat>
              <v-card-title>General Election</v-card-title>
              <v-card-subtitle>Presidential</v-card-subtitle>
              <v-card-text>
                <ReportChart />
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex sm4>
            <v-card flat>
              <v-card-title>Summary</v-card-title>
              <v-card-text>
                <v-card class="my-4">
                  <v-card-title>
                    <router-link to="/details">Mr A</router-link>
                  </v-card-title>
                  <v-card-text>
                    <v-progress-linear v-model="skill" color="blue-grey" height="35">
                      <template>
                      <!-- <template v-slot="{ value }"> -->
                        <strong>{{ skill }}%</strong>
                      </template>
                    </v-progress-linear>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn flat class="text-capitalize success">Declare winner</v-btn>
                  </v-card-actions>
                </v-card>
                <v-card class="my-4">
                  <v-card-title>
                    <router-link to="/details">Mr B</router-link>
                  </v-card-title>
                  <v-card-text>
                    <v-progress-linear v-model="skil" color="blue-grey" height="35">
                      <template>
                      <!-- <template v-slot="{ value }"> -->
                        <strong>{{ skil }}%</strong>
                      </template>
                    </v-progress-linear>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn flat class="text-capitalize success">Declare winner</v-btn>
                  </v-card-actions>
                </v-card>
                <v-card class="my-4">
                  <v-card-title>
                    <router-link to="/details">Mr C</router-link>
                  </v-card-title>
                  <v-card-text>
                    <v-progress-linear v-model="ski" color="blue-grey" height="35">
                      <template>
                      <!-- <template v-slot="{ value }"> -->
                        <strong>{{ ski }}%</strong>
                      </template>
                    </v-progress-linear>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn flat class="text-capitalize success">Declare winner</v-btn>
                  </v-card-actions>
                </v-card>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ReportChart from "@/components/ReportChart";
export default {
  name: "ElectionReport",
  components: { ReportChart },
  data() {
    return {
        skill: 70,
        skil: 20,
        ski: 10,
    };
  },
};
</script>

<style scoped>
</style>