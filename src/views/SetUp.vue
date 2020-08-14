<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>
          Election Committee
          <v-spacer></v-spacer>
          <AddMember />
        </v-card-title>
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

      <v-card class="my-4">
        <v-card-title>Election Details</v-card-title>
        <v-card-text>
          <v-form>
            <v-card flat>
              <v-card-text>
                <v-textarea label="Terms"></v-textarea>

                <v-card flat>
                  <v-layout wrap>
                    <v-flex>
                      <v-card flat>
                        <v-card-text>
                          <v-menu
                            ref="menu1"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                label=" Start Date"
                                hint="MM/DD/YYYY format"
                                persistent-hint
                                v-bind="attrs"
                                @blur="date = parseDate(dateFormatted)"
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                          </v-menu>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex>
                      <v-card flat>
                        <v-card-text>
                          <v-menu
                            ref="menu1"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                label=" End Date"
                                hint="MM/DD/YYYY format"
                                persistent-hint
                                v-bind="attrs"
                                @blur="date = parseDate(dateFormatted)"
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                          </v-menu>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-card>
                <v-select :items="['Pending', 'Voting']" label="Solo field"></v-select>
              </v-card-text>
            </v-card>
            <v-card-actions>
              <v-btn class="text-capitalize warning" to="/elections">Save</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import AddMember from "@/components/AddCommitteeMember"
export default {
  name: "SetUp",
  components: { AddMember },
  data() {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Post", value: "post" },
      ],

      items: [
        { name: "Mr A", post: "Chairman", id: 1 },
        { name: "Mr B", post: "Deputy Chairman", id: 2 },
        { name: "Mr C", post: "Secretary", id: 3 },
      ],
    };
  },
};
</script>

<style scoped>
</style>