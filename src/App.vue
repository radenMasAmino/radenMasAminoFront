<template>
  <div id="app">
  
    <router-view />
  </div>
</template>

<script>
export default {
	props:{
		idQs: String
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@300&display=swap');
body{
	background-image: url('assets/bg.jpg');
  background-size:100%;
  /* background-repeat: repeat; */
  /* background-size: cover; */
}
#app {
  font-family: 'Mukta', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}

/* Margin top */
.m-t-0{
	margin-top: 0px;
}
.m-t-5{
	margin-top: 5px;
}
.m-t-10{
	margin-top: 10px;
}
.m-t-15{
	margin-top: 15px;
}
.m-t-20{
	margin-top: 20px;
}
.m-t-25{
	margin-top: 25px;
}
.m-t-30{
	margin-top: 30px;
}
/* End Margin top */

/* Margin Bottom */
.m-b-0{
	margin-bottom: 0px;
}
.m-b-5{
	margin-bottom: 5px;
}
.m-b-10{
	margin-bottom: 10px;
}
.m-b-15{
	margin-bottom: 15px;
}
.m-b-20{
	margin-bottom: 20px;
}
.m-b-25{
	margin-bottom: 25px;
}
.m-b-30{
	margin-bottom: 30px;
}
/* End Margin Bottom */

/* Margin Left */
.m-l-0{
	margin-left: 0px;
}
.m-l-5{
	margin-left: 5px;
}
.m-l-10{
	margin-left: 10px;
}
.m-l-15{
	margin-left: 15px;
}
.m-l-20{
	margin-left: 20px;
}
.m-l-25{
	margin-left: 25px;
}
.m-l-30{
	margin-left: 30px;
}
/* End Margin Left */

/* Margin Right */
.m-r-0{
	margin-right: 0px;
}
.m-r-5{
	margin-right: 5px;
}
.m-r-10{
	margin-right: 10px;
}
.m-r-15{
	margin-right: 15px;
}
.m-r-20{
	margin-right: 20px;
}
.m-r-25{
	margin-right: 25px;
}
.m-r-30{
	margin-right: 30px;
}
/* End Margin Right */

/* Padding top */
.p-t-0{
	padding-top: 0px;
}
.p-t-5{
	padding-top: 5px;
}
.p-t-10{
	padding-top: 10px;
}
.p-t-15{
	padding-top: 15px;
}
.p-t-20{
	padding-top: 20px;
}
.p-t-25{
	padding-top: 25px;
}
.p-t-30{
	padding-top: 30px;
}
/* End Padding top */

/* Padding Bottom */
.p-b-0{
	padding-bottom: 0px;
}
.p-b-5{
	padding-bottom: 5px;
}
.p-b-10{
	padding-bottom: 10px;
}
.p-b-15{
	padding-bottom: 15px;
}
.p-b-20{
	padding-bottom: 20px;
}
.p-b-25{
	padding-bottom: 25px;
}
.p-b-30{
	padding-bottom: 30px;
}
/* End Padding Bottom */

/* Padding Left */
.p-l-0{
	padding-left: 0px;
}
.p-l-5{
	padding-left: 5px;
}
.p-l-10{
	padding-left: 10px;
}
.p-l-15{
	padding-left: 15px;
}
.p-l-20{
	padding-left: 20px;
}
.p-l-25{
	padding-left: 25px;
}
.p-l-30{
	padding-left: 30px;
}
/* End padding Left */

/* padding Right */
.p-r-0{
	padding-right: 0px;
}
.p-r-5{
	padding-right: 5px;
}
.p-r-10{
	padding-right: 10px;
}
.p-r-15{
	padding-right: 15px;
}
.p-r-20{
	padding-right: 20px;
}
.p-r-25{
	padding-right: 25px;
}
.p-r-30{
	padding-right: 30px;
}
/* End padding Right */

.box{
  background-color: #fff;
  padding:30px;
  box-shadow:0 7px 20px 0 rgba(0,0,0,.1);
  border-radius:8px
}
</style>
