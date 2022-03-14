<template>
<div>
    <h1 v-if="user.data">Hello {{ user.data.email }}</h1>
    <h1 v-if="user.data">AccessToken: {{ user.data.accessToken }}</h1>
</div>    
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters({
            user: 'user'
        })
    }
}
</script>