import { HTTP } from './baseService';

class ContactService {
  
  //GET
  async getAll(){
    const response = await HTTP.get("/contacts");
    return response.data;
  }

  //POST
  async createContact(body){
    await HTTP.post("/contacts", body);
  }

  //SHOW
  async showContact(id){
    const response = await HTTP.get(`/contacts/${id}`);
    return response.data;
  }

  //PUT
  async editContact(body, id){
    await HTTP.put(`/contacts/${id}`, body);
  }

  //DELETE
  async deleteContact(id){
    await HTTP.delete(`/contacts/${id}`);
  }
}

const contactService = new ContactService();
export default contactService;