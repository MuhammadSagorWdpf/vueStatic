<template>
  <div class="contact-page container mt-5">

    <!-- Title Section -->
    <div class="text-center mb-5">
      <h2 class="contact-title">
        Get In <span class="highlight">Touch</span>
      </h2>
      <p class="contact-subtitle">
        We will contact again after receiving your request in 24h
      </p>
    </div>

    <!-- Offices Section -->
    <div class="offices d-flex flex-column flex-md-row justify-content-between align-items-center">
      <!-- Bangladesh Office -->
      <div class="office-box">
        <h5 class="office-title">BANGLADESH OFFICE</h5>
        <p><i class="fas fa-map-marker-alt"></i> Level-4, House#34, Lane# 6/2 Road#20/B, DUIP Plot, Block D, Mirpur-12, Dhaka, 1216</p>
        <p><i class="fas fa-phone-alt"></i> +880 1718 837 689</p>
        <p><i class="fas fa-envelope"></i> info@4axiz.com</p>
      </div>

      <!-- USA Office -->
      <div class="office-box">
        <h5 class="office-title">USA OFFICE</h5>
        <p><i class="fas fa-map-marker-alt"></i> 8120 Jennings Drive, Suite 128 C, Business and Community Service Bldg. Cedar Falls, IA 50613-0130</p>
        <p><i class="fas fa-phone-alt"></i> +031 9961 27 82</p>
        <p><i class="fas fa-envelope"></i> 4axizusa@4axiz.com</p>
      </div>
    </div>  
    <h1 class="text-center mb-4">Contact Us</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="formData.name"
          placeholder="Enter your name"
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="formData.email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="subject" class="form-label">Subject</label>
        <input
          type="text"
          class="form-control"
          id="subject"
          v-model="formData.subject"
          placeholder="Enter the subject"
          required
        />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea
          class="form-control"
          id="message"
          v-model="formData.message"
          rows="5"
          placeholder="Write your message here"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary w-100">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Form Submitted:", this.formData);
      alert("Thank you for reaching out! We’ll get back to you soon.");
      this.clearForm();
    },
    clearForm() {
      this.formData = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
.contact-page {
  max-width: 600px;
  margin: auto;
}

.contact-title {
  font-size: 2rem;
  font-weight: bold;
}

.highlight {
  color: #ff5722;
  text-decoration: underline;
  text-decoration-color: #f2c3c3;
  text-underline-offset: 0.2rem;
}

.contact-subtitle {
  font-size: 1rem;
  color: #666;
  margin-top: 0.5rem;
}

.offices {
  width: 100%;
  max-width: 900px;
  margin: auto;
}

.office-box {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  margin: 1rem;
  text-align: center;
}

.office-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.office-box p {
  font-size: 0.9rem;
  color: #555;
}

.office-box i {
  margin-right: 0.5rem;
  color: #ff5722;
}
</style>
