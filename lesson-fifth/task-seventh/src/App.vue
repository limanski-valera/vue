<template>
    <div class="wrapper">
        <searching-form @searching="onSearch" class="form" />
        <contacts-list :contacts-data="filteredContacts" />
    </div>
</template>

<script>
import { contacts } from "@/constants/7_data_contacts";
import ContactsList from "./components/ContactsList.vue";
import SearchingForm from "./components/SearchingForm.vue";

export default {
    name: "App",
    components: {
        ContactsList,
        SearchingForm,
    },
    data() {
        return {
            contactsData: contacts,
            searchingValue: null,
        };
    },
    computed: {
        sortedContacts() {
            let sortedContacts = [...this.contactsData];
            sortedContacts.sort((a, b) => a.activity_score - b.activity_score);
            return sortedContacts;
        },
        filteredContacts() {
          let filteredContacts = this.sortedContacts
          if(this.searchingValue) {
            filteredContacts = filteredContacts.filter(contact => {
              if(contact.first_name || contact.last_name){
                return contact.first_name.toLowerCase().includes(this.searchingValue) || contact.last_name.toLowerCase().includes(this.searchingValue)
              } else return false
            })
          }
          return filteredContacts
        },
        
    },
    methods: {
        onSearch(value) {
            this.searchingValue = value;
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
.form {
    margin-bottom: 20px;
}
</style>
