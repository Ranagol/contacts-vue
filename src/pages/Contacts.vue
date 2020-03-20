<template>
  <span>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <ContactList :contacts="contacts" />
        </div>
        <div class="col-8">
          <ContactDetails @deleteContact="deleteContact" :contact="routeContact" />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <ContactForm @onSubmit="addContact" />
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import ContactList from '../components/ContactList.vue';
import ContactDetails from '../components/ContactDetails.vue';
import ContactForm from '../components/ContactForm.vue';
import contactService from '../services/contactService';

export default {
  components: {
    ContactList,
    ContactDetails,
    ContactForm
  },
  data() {
    return {
      contacts: []
    };
  },
  computed: {
    routeContact() {
      return this.contacts.find(contact => contact.id == this.$route.params.id);
    }
  },
  methods: {
    async addContact(contact) {
      console.log(contact);
      await this.contacts.push(contact);
    },
    async deleteContact(id){
      await contactService.deleteContact(id);//deleting from db
      let index = this.contacts.findIndex(contact => contact.id === id);
      this.contacts.splice(index, 1);//deleting from this.contacts array, in order to refresh the page
    }
    
  },
  async created(){
    this.contacts = await contactService.getAll();
    console.log(this.contacts);
  }
};
</script>
