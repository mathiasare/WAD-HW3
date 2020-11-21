<template>

  <div class="default">
    <header>
      <nav>
        <div class="logo-container">
          <img src="res/images/logo.png" alt="postIt">
        </div>
        <div class="search-container">
          <input type="text" name="search"><button type="button">Search</button>
        </div>
        <div class="avatar-container">
          <img src="res/images/avatar.png" class="avatar" alt="Me">
        </div>
      </nav>
    </header>

    <div class="dropdown-menu">
      <a href="browse.html">Browse</a><hr>
      <a href="login.html">Log out</a>
    </div>  
    <section class="main-container">
    <Posts v-bind:posts="posts"/>
    </section>
  </div>
  
</template>
<script>
import Posts from './Posts'
import postData from "../assets/data/posts.json";
export default {
    name:"Background",
    components: {
    Posts
  },data(){
 return{
   posts:postData
 }
    
  },


  

}

</script>

<style scoped>
    a {
    color: #40c4ff;
}
button {
    padding: 8px 16px;
    margin: 4px 0;
    color: #ffffff;
    background-color: #01579b;
    border: none;
    border-radius: 4px;
}

button:hover {
    box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
    cursor: pointer;
}

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
    display: none;
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
</style>

