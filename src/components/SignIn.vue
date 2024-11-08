<template>
    <form @submit.prevent="submitForm" class="sagors">
  <!-- Email input -->
  <div data-mdb-input-init class="form-outline mb-4">
    <label class="form-label" for="form2Example1">Email address</label>
    <input type="email" id="form2Example1" class="form-control" v-model="formData.form2Example1" required />
    
  </div>

  <!-- Password input -->
  <div data-mdb-input-init class="form-outline mb-4">
     <label class="form-label" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" class="form-control" v-model="formData.form2Example2" required/>
   
  </div>

  <!-- 2 column grid layout for inline styling -->
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <!-- Checkbox -->
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <!-- Simple link -->
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <!-- Submit button -->
  <button  type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-success btn-block mb-4">Sign in</button>

  <!-- Register buttons -->
  <div class="text-center">
    <p>Not a member? <a href="/signup">Register</a></p>
    <p>or sign up with:</p>
    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button  type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
</template>
<script>
export default {
    name:"SignIn",
    data(){
        return {
            formData:{
                form2Example1:'',
                form2Example2:''
            },
        };
    },
    methods:{
        submitForm(){
            console.log("Form submitted:",this.formData);
            alert("Now You are Logged in!");
            this.clearForm();
       
       },
       clearForm(){
        this.formData.form2Example1 = "";
        this.formData.form2Example2 = "";
       },
    },
};
</script>

<style>
.sagors{
    max-width: 400px;
    margin: 0 auto;
    padding: 30px;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    font-family: Arial, sans-serif;
    color: #333;
}
</style>