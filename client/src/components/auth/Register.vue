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
            <v-col class="d-flex" cols="12">
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
            <v-col>
              <p>Already have an account? Login <a href="/login">here</a>.</p>
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
        (val) => !!val || 'Required',
        (val) => /.+@.+\..+/.test(val) || 'Enter a valid e-mail address',
      ],
      passwordRules: [
        (val) => !!val || 'Required.',
        (val) => (val && val.length >= 8) || 'Password must have at least 8 characters',
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
