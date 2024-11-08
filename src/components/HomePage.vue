<template>
  <div class="home-page">
   

    <!-- Page Content -->
    <div class="home-page container mt-5 d-flex flex-column flex-lg-row align-items-center justify-content-between">
    <!-- Left Side Content -->
    <div class="left-content">
      <h2 class="text-primary">
        <span class="text-orange">13 Years</span> of excellence
      </h2>
      <p class="text-muted">
        13 years of expertise in web and app development, AI, machine learning, and digital marketing.
        Empowering businesses to thrive in the digital realm with innovative solutions and exceptional service.
      </p>

      <!-- Tabs Section -->
      <div class="tabs-section rounded-pill p-2 my-3 shadow-sm d-inline-flex align-items-center">
        <button class="tab-button" @click="activeTab = 'mission'" :class="{ 'active-tab': activeTab === 'mission' }">
          Our Mission
        </button>
        <span class="mx-2">•</span>
        <button class="tab-button" @click="activeTab = 'vision'" :class="{ 'active-tab': activeTab === 'vision' }">
          Our Vision
        </button>
        <span class="mx-2">•</span>
        <button class="tab-button" @click="activeTab = 'value'" :class="{ 'active-tab': activeTab === 'value' }">
          Our Value
        </button>
      </div>

      <!-- Tab Content -->
      <p class="text-muted">
        {{ tabContent }}
      </p>

      <!-- About Us Button -->
      <button class="btn btn-orange mt-3">About Us</button>
    </div>

    <!-- Right Side Video Embed -->
    <div class="right-content mt-5 mt-lg-0">
      <div class="video-container position-relative">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/gQojMIhELvM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  data() {
    return {
      activeTab: 'mission',
    };
  },
  computed: {
    tabContent() {
      switch (this.activeTab) {
        case 'mission':
          return "At cogent, our mission is to empower businesses with innovative solutions backed by our 13 years of experience. We strive to deliver exceptional services, exceed client expectations, and foster long-term partnerships.";
        case 'vision':
          return "Our vision is to be a leader in the digital landscape, constantly evolving to meet client needs and shaping the future of technology.";
        case 'value':
          return "Our values are rooted in integrity, commitment, and excellence. We believe in creating impactful solutions that drive success for our clients.";
        default:
          return "";
      }
    }
  }
};
</script>

<style scoped>
.home-page 
{
   padding: 2rem 1rem;
}

.pg-content
{
  margin-top:15px;
}

.text-primary {
  font-weight: bold;
}

.text-orange {
  color: #ff5722;
}

.tabs-section {
  background-color: #f7f7fa;
  font-weight: bold;
}

.tab-button {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  font-size: 1rem;
}

.tab-button.active-tab {
  color: #ff5722;
  font-weight: bold;
}

.btn-orange {
  background-color: #ff5722;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
}

.btn-orange:hover {
  background-color: #e04e1d;
}

/* Right Side Images */
.images-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
}

.phone-image-left,
.phone-image-center,
.phone-image-right {
  width: 100px;
  height: auto;
}



.video-container {
  width: 100%;
  max-width: 500px;
}

/* Define the custom slide-up animation */
@keyframes slide-up 
{
  from 
  {
    transform: translateY(100%);
    opacity: 0;
  }
  to 
  {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Apply the slide-up animation to the carousel items */
.carousel-slide-up 
{
  animation: slide-up 0.6s ease-in-out;
}

.carousel-inner img 
{
  width: 100vh;
  height: 50vh;
  object-fit: cover;
}
</style>
