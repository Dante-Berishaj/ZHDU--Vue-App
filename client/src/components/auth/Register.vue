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
    import axios from 'axios';
    import apiRequests from '../../util/api';

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
                    await apiRequests.post('users/register', {
                        email: this.form.email,
                        password: this.form.password
                    })
                    console.log(createdUser)
                    this.$router.push('/login')
                } catch (err) {
                    this.error = err
                }
            }
        },
    };
</script>

<style scoped>

</style>
