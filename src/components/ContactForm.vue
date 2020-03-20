<template>
  <form @submit.prevent="onSubmit">
    <p>ContactForm.vue</p>
    <div class="form-group row">
      <label for="first_name" class="col-4 col-form-label">First Name</label>
      <div class="col-8">
        <div class="input-group">
          <input
            id="first_name"
            name="first_name"
            type="text"
            required="required"
            class="form-control here"
            v-model="contact.first_name"
          />
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="last_name" class="col-4 col-form-label">Last Name</label>
      <div class="col-8">
        <div class="input-group">
          <input
            id="last_name"
            name="last_name"
            type="text"
            required="required"
            class="form-control here"
            v-model="contact.last_name"
          />
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="email" class="col-4 col-form-label">Email</label>
      <div class="col-8">
        <input
          id="email"
          name="email"
          type="email"
          required="required"
          class="form-control here"
          v-model="contact.email"
        />
      </div>
    </div>
    
    <div class="form-group row">
      <div class="offset-4 col-8">
        <button name="submit" type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      draftContact: this.contact
    };
  },
  props: {
    contact: {
      type: Object,
      required: false,
      default: () => ({
        first_name: '',
        last_name: '',
        email: '',
      })
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.draftContact);
      //console.log(this.draftContact);
    }
  }
};
</script>
