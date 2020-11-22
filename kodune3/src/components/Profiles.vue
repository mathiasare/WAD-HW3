<template>
  <div class="profile" v-for="profile in profiles" :key="profile.id">
    <div class="profile-avatar">
      <img v-bind:src="profile.avatar" alt="Profile avatar">
      <span> {{profile.firstname}} {{profile.lastname}}</span>
    </div>
    <div class="profile-actions">
    <button type="button" class="follow-button" @click="e => Change(e)">
      {{ followButton }}
    </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profiles",
  props:["profiles"],
  data(){
    return{
      clickedID:-1,
      followButton: 'Follow'
    }
  },
  methods: {
    Change(e){
      e.target.classList.toggle('followed')
      if(this.followButton === 'Follow')
        this.followButton = 'Followed'
      else
        this.followButton = 'Follow'

    }
  }
}
</script>

<style scoped>
.follow-button {
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 5px center;
  background-color: #8b2fa1;
  width: auto;
  height: 25px;
  line-height: 10px;
  text-align: center;
  border: none;
}
.follow-button.followed {
  line-height: 8px;
  background-color: white;
  border: 2px solid #8b2fa1;
  color: #8b2fa1;

}

.profile {
  float: left;
  width: 270px;
  border: 1px solid rgb(228, 221, 221);
  height: 180px;
  margin: 10px;
  text-align: center;
  font-weight: 700;
}

.profile-avatar {
  padding: 5px;
  border-radius: 50%;
  width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.profile-avatar img{
  width: 60px;
  height: 60px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}
.profile .profile-actions {
  padding: 10px;
}
</style>