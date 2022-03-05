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
    async loginUser() {
      const res = await signInWithEmailAndPassword(
        getAuth(),
        this.loginEmail,
        this.loginPassword
      );

      // NOTE: after user is redirected to home page, a refresh is required for
      // `role` to appear in local storage
      localStorage.setItem('Usertoken', res.user.uid);
      this.$router.replace('/');
      this.$router.go();
    },
  },
  mounted() {
    localStorage.removeItem('Usertoken');
    localStorage.removeItem('role');
  }
};
</script>

<style>
.login-form-container {
  max-width: 600px !important;
}
</style>
