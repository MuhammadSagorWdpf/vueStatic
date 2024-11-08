<template>
<div class="main-layout">
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">cogent</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About Us</router-link>
        </li>
        
        <li class="nav-item">
          <router-link class="nav-link" to="/services">Services Us</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact Us</router-link>
        </li>
      </ul>
      <ul class="navbar-nav sagor" style="text-align:right;">
       <li class="nav-item">
          <router-link class="nav-link" to="/signin">Sign In</router-link>
        </li>
      </ul>
    </div>
   </div> 
</nav>



 <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <!-- First Slide (active) -->
        <div class="carousel-item active">
          <img src="/images/banner-1.jpg" class="d-block w-100" alt="Banner 1" />
        </div>
        <!-- Additional Slides -->
        <div class="carousel-item">
          <img src="/images/banner-2.jpg" class="d-block w-100" alt="Banner 2" />
        </div>
        <div class="carousel-item">
          <img src="/images/banner-3.jpg" class="d-block w-100" alt="Banner 3" />
        </div>
        <div class="carousel-item">
          <img src="/images/banner-4.jpg" class="d-block w-100" alt="Banner 3" />
        </div>
      </div>
      <!-- Carousel Controls -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
<main class="main-content container-fluid my-4">
	<router-view />
</main>

<AppFooter />
</div>
</template>

<script>
import AppFooter from "./AppFooter.vue";
import { provide } from "vue";

export default {
	name: "MainLayout",
	components: {
		AppFooter,
	},
	setup(){

		provide("footerText", "@2024 MyApp. All rights reserved.");
	},
};

</script>
<style>
.sagor
{
  background-color: #719dde;
  border-radius: 4px;
}

 .main-content
 {
 min-height: calc(100vh - 100px);
 }
 .navbar{
  background: linear-gradient(310deg,#8f8fbe 0.36%,#b7c781);
 }




/* Ensure the carousel takes up full width */
#carouselExample {
  width: 100%; /* Makes sure the carousel stretches across the width of the parent */
  height: 400px; /* Set a fixed height for the carousel (you can adjust it based on your needs) */
  overflow: hidden; /* Hide any overflow from images */
}

/* Make sure all carousel images have the same height and fill the container */
.carousel-inner {
  height: 100%;
}

.carousel-item img {
  width: 100%; /* Make the images fill the width of the container */
  height: 100%; /* Ensure the images are the same height as the carousel */
  object-fit: cover; /* Makes sure the images maintain their aspect ratio while filling the container */
}

/* Carousel controls (optional customization) */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: black; /* Change color of the control icons */
}

/* Optional: Add a slight shadow effect to images for a nice look */
.carousel-item img {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

/* Navbar link hover effect */
.navbar-nav .nav-link:hover {
  background-color: #b3a954; /* Blue background on hover (you can change it) */
  color: white; /* Change text color to white when hovered */
  border-radius: 4px; /* Optional: Add rounded corners on hover */
}

/* Navbar link active state (clicked) */
.navbar-nav .nav-link.active {
  background-color: #1bdc31; /* Darker blue background when clicked */
  color: white; /* Change text color to white when clicked */
  border-radius: 4px; /* Optional: Add rounded corners on active */
}

/* Optional: Focus style for better accessibility (when using keyboard navigation) */
.navbar-nav .nav-link:focus {
  background-color: #e54409; /* Same as hover effect for focus */
  color: white; /* White text when focused */
  outline: none; /* Remove default focus outline */
  border-radius: 4px;
  gap: 50px;
}


</style>