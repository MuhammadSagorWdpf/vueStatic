<template>
    <section class="h-100 h-custom" style="background-color: #8fc4b7;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-8 col-xl-6">
        <div class="card rounded-3">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
            class="w-100" style="border-top-left-radius: .3rem; border-top-right-radius: .3rem;"
            alt="Sample photo">
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

            <form class="px-md-2" @submit.prevent="submitForm">

              <div data-mdb-input-init class="form-outline mb-4">
                <input type="text" id="form3Example1q" class="form-control" v-model="formData.form3Example1q" required />
                <label class="form-label" for="form3Example1q">User Name</label>
              </div>

             <div data-mdb-input-init class="form-outline mb-4">
                <input type="text" id="form1Example1q" class="form-control" v-model="formData.form2Example1q" required/>
                <label class="form-label" for="form3Example1q">Gmail </label>
              </div>


               <div data-mdb-input-init class="form-outline mb-4">
                <input type="text" id="form1Example1q" class="form-control" v-model="formData.form1Example1q" required/>
                <label class="form-label" for="form3Example1q">Password</label>
              </div>

               <div data-mdb-input-init class="form-outline mb-4">
                <input type="text" id="form4Example1q" class="form-control" v-model="formData.form4Example1q" required/>
                <label class="form-label" for="form3Example1q">Confirm Password</label>
              </div>

              <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-success btn-lg mb-1">Submit</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
    name:"SignUp",
    data(){
        return {
            formData: {
                form3Example1q: "",
                form2Example1q: "",
                form1Example1q: '',
                form4Example1q: ''
            },
        };
    },
    methods:{
        submitForm(){
            console.log(this.formData);
            alert("Registration Successfull!");
            this.clearForm();
        },
        clearForm(){
            this.formData = {
                form3Example1q: '',
                form2Example1q: '',
                form1Example1q: '',
                form4Example1q: ''
            };
        },
    },
};
</script>

<style>
@media (min-width: 1025px) {
.h-custom {
height: 100vh !important;
}
}
</style>