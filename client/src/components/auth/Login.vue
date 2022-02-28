<template>
  <v-container class="login-form-container">
    <v-card class="px-4">
      <v-card-text>
        <v-form ref="loginForm" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="loginEmail"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="loginPassword"
                :append-icon="show1 ? 'eye' : 'eye-off'"
                :rules="passwordRules"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                @click:append="show1 = !show1"
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
                @click="loginUser"
              >
                Login
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
export default {
  data() {
    return {
      loginEmail: '',
      loginPassword: '',
      roles: [],
      verify: '',
      emailRules: [
        (v) => !!v || 'Required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        (value) => !!value || 'Required.',
        (v) => (v && v.length >= 8) || 'Min 8 characters',
      ],
      show1: false,
      valid: true,
    };
  },

  methods: {
    async loginUser() {
      console.log(`sending ${this.loginEmail} and ${this.loginPassword} to server`);

      const res = await signInWithEmailAndPassword(
        getAuth(),
        this.loginEmail,
        this.loginPassword
      );

      localStorage.setItem('Usertoken', res.user.uid);
    },
  },
};
</script>

<style>
.login-form-container {
  max-width: 600px !important;
}
</style>
