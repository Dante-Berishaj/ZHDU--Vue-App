<template>
     <section>
        <form @submit.prevent="loginUser">
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

            <button type="submit">Login</button>
        </form>
    </section>
</template>

<script>
    import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'

    export default {
        data(){
            return{
                form: {
                    email: '',
                    password: '',
                },
            };
        },
        methods: {
            async loginUser() {
                const user = await signInWithEmailAndPassword(getAuth(), this.form.email, this.form.password)
                
                console.log(user)
                this.$router.replace({ name: 'User' })
            }
        }
    };
</script>
