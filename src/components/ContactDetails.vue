<template>
  <div>
    <div class="card">
      <p>ContactDetails.vue</p>
      <ul class="list-group list-group-flush" v-if="contact">
        <li class="list-group-item">
          <i class="fas fa-user fa-fw"></i> {{ contact.first_name }} {{ contact.last_name }}
        </li>
        <li class="list-group-item"><i class="fas fa-envelope fa-fw"></i> {{ contact.email }}</li>
        <li class="list-group-item"><button @click="emitDelete(contact.id)" class="btn btn-danger">Delete</button></li>
      </ul>

      <div class="card-body" v-else>
        &larr; Please select a contact you want to see or click
        <router-link to="/add-contact">here</router-link> to create a new contact.
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['contact'],
  methods: {
    emitDelete(id){
      this.$emit('deleteContact', id);
    }
  }
};
</script>
