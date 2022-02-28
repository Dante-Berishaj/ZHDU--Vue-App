<template>
  <v-container class="login-form-container">
    <v-card class="px-4">
      <v-card-text>
        <v-form ref="loginForm" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :type="'password'"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
              ></v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6" xsm="12"> </v-col>
            <v-spacer></v-spacer>
            <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
              <v-btn
                x-large
                block
                :disabled="!valid"
                color="success"
                @click="createUser"
              >
                Register
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import apiRequests from '../../util/api';

export default {
  data() {
    return {
      email: '',
      password: '',
      emailRules: [
        (v) => !!v || 'Required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        (value) => !!value || 'Required.',
        (v) => (v && v.length >= 8) || 'Min 8 characters',
      ],
      valid: true,
    };
  },
  methods: {
    async createUser() {
      try {
        await apiRequests.post('users/register', {
          email: this.email,
          password: this.password,
        });

        this.$router.replace({ name: 'Login' });
      } catch (err) {
        this.error = err;
      }
    },
  },
};
</script>

<style scoped></style>
