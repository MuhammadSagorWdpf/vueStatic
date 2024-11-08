<template>
  <div class="services-page container mt-5">
    <h2 class="text-center mb-4">
      Our <span class="text-primary">Services</span>
    </h2>
    <p class="text-center text-muted mb-5">
      Empowering businesses with a complete suite of web services, we specialize in web design, development, web security, app development, and round-the-clock support.
    </p>

    <div class="row">
      <div v-for="service in services" :key="service.id" class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 shadow-sm border-0">
          <img :src="service.image" class="card-img-top" :alt="service.title">
          <div class="card-body">
            <h5 class="card-title">{{ service.title }}</h5>
            <p class="card-text text-muted">{{ service.description }}</p>
            <a href="#" class="text-primary">LEARN MORE</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesPage",
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Web Development",
          description: "Expert web development services for your website - professional, reliable, and tailored to you.",
          image: "/images/web-development.png"
        },
        {
          id: 2,
          title: "Apps Development",
          description: "Custom app development for your website - innovative, seamless, and user-friendly.",
          image: "/images/apps-development.png"
        },
        {
          id: 3,
          title: "AI Machine Learning",
          description: "Cutting-edge AI and machine learning solutions - unlocking the power of data.",
          image: "/images/ai-machine-learning.png"
        },
        {
          id: 4,
          title: "Software Testing",
          description: "Quality-driven software testing services for flawless performance and reliable functionality.",
          image: "/images/software-testing.png"
        },
        {
          id: 5,
          title: "SEO Optimization",
          description: "Boost your website’s search ranking with effective SEO optimization.",
          image: "/images/seo-optimization.png"
        },
        {
          id: 6,
          title: "Digital Marketing",
          description: "Expand your reach and grow your brand with targeted digital marketing solutions.",
          image: "/images/digital-marketing.png"
        },
      ]
    };
  }
};
</script>

<style scoped>
.services-page {
  background-color: #f7f7fa;
  padding: 3rem 1rem;
  border-radius: 8px;
}

h2 {
  font-weight: bold;
}

.card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-title {
  font-weight: bold;
}

.card-text {
  font-size: 0.9rem;
}

.text-primary {
  color: #ff5722; /* Adjust this color to match the orange accent in your design */
}
</style>
