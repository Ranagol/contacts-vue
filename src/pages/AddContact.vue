<template>
  <div class="container mt-4">
    <h4>Add Contact</h4>
    <app-contact-form @onSubmit="createContact"></app-contact-form>
    
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm';
import contactService from '../services/contactService';
//import contactService from '../services/contactService';
export default {
  data(){
    return {
      first_name: '',
      last_name: '',
      email: '',
    }
  },
  components: {
    'app-contact-form': ContactForm,
  },
  methods: {
    async createContact(contact){
      await contactService.createContact(contact);
      this.$router.push('contacts');

    }
  }
  
};
</script>
