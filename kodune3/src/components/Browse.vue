<template>

  <div class="default">
    <header>
      <nav>
        <div class="logo-container">
          <img src="./../assets/images/logo.png" alt="postIt">
        </div>
        <div class="search-container">
          <input type="text" name="search"><button type="button">Search</button>
        </div>
        <div class="avatar-container">
          <img :src="user.avatar" class="avatar" @click="menyy = !menyy" alt="Me">
        </div>
      </nav>
    </header>


    <div class="dropdown-menu" v-if="menyy">
      <User v-bind:user="user"/>
      <router-link to="/browse">Browse</router-link><hr>
      <router-link to="/login">Log out</router-link>
    </div>
    <section class="main-container">
      <div class="profile-container">
        <Profiles v-bind:profiles="profiles"/>
      </div>
    </section>
  </div>

</template>
<script>
import Profiles from './Profiles'
import axios from 'axios'
import User from './User'
//import postData from "../assets/data/profiles.json";
export default {
  name:"Browse",
  components: {
    Profiles,
    User
  },
  data(){
    return{
      profiles:[],
      user:{
        firstname:"firstname",
        lastname:"lastname",
        avatar:"./../assets/images/avatar.png",
        email:"email"
      },
      menyy: false
    }


  },
  mounted(){
    axios
        .get("https://private-anon-cc0458a8c8-wad20postit.apiary-mock.com/profiles")
        .then(response => { this.profiles = response.data});
    axios
        .get("https://private-anon-ba0e9b1a8c-wad20postit.apiary-mock.com/users/1")
        .then(response => { this.user = response.data});
  }



}

</script>

<style scoped>


header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

header:hover {
  box-shadow: 0 -20px 30px #4d4d4d;
}

nav {
  display: flex;
  background-color: #ffffff;
  align-items: center;
}

nav div {
  height: 30px;
  flex-grow: 4;
  padding: 10px;
}

nav div img {
  height: 100%;
  width: 30px;
  margin-left: 15px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top center;
}
nav div.search-container > input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

nav div.search-container > button {
  height: 30px;
  width: 20%;
  margin: 0;
  padding: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

nav div.avatar-container {
  margin-right: 15px;
  text-align: right;
}

.dropdown-menu{
  float: right;
  box-sizing: border-box;
  margin-right: 0px;
  margin-top: 50px;
  text-align: left;
  background-color: #ffffff;
  padding: 10px;
  width: 15%;
  height: auto;
  border: 1px solid #e0e0e0;
}

.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}

.profile-avatar img{
  width: 60px;
  height: 60px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}
.profile-container{
  width: auto;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
