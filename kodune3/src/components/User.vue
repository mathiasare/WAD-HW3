<template>

    <div class="user">
        <span>{{user.firstname}} {{user.lastname}}<br>
        {{user.email}}</span>
        <hr>
    </div>
</template>
<script>
export default {
    name: "User",
    props:["user"],
    data(){
    }
}
</script>