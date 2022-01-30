<template>
    <section>
        <form @submit.prevent="createUser">
            <div class="form_group">
                <input
                    class="form_control"
                    type="email"  
                    placeholder="Email"
                    v-model="form.email"
                />
            </div>
            <div class="form_group">
                <input
                    class="form_control"
                    type="password"  
                    placeholder="Password"
                    v-model="form.password"
                />
            </div>

            <div v-if="error">{{this.error}}</div>

            <button type="submit">Register</button>
        </form>
    </section>
</template>

<script>
    import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

    export default {
        data() {
            return {
                form: {
                    email: "",
                    password: ""
                },
                error: null,
            };
        },
        methods: {
            async createUser() {
                try {  
                    const auth = getAuth()
                    await createUserWithEmailAndPassword(auth, this.form.email, this.form.password);
                } catch (err) {
                    this.error = err
                }
            }
        },
    };
</script>

<style scoped>

</style>
