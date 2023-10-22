<template>
    <div class="list">
        <contacts-list-item
            v-for="contact in contactsData"
            :key="contact.emails[0]"
            :contact-data="contact"
        />
    </div>
</template>

<script>
import ContactsListItem from "./ContactsListItem.vue";
export default {
    components: { ContactsListItem },
    name: "ContactsList",
    props: {
        contactsData: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style lang="css" scoped>
    .list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>
