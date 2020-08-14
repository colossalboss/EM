<template>
    <div>
        <v-container>
            <v-layout justify-center>
                <v-flex sm5>
                    <v-card flat>
                        <v-card-title class="warning">
                            Login
                        </v-card-title>
                        <v-card-text>
                            <v-form>
                                <v-text-field label="UserId"></v-text-field>
                                <v-text-field type="password" label="Password"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn class="text-capitalize warning">
                                Login
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Login",

        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>