<template>
    <article class="card">
        <div class="card__logo">{{ logo }}</div>
        <div class="card__body">
            <div class="card__name">{{ fullName }}</div>
            <div class="card__email">{{ contactData.emails[0] }}</div>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'ContactsListItem',
        props: {
            contactData: {
                type: Object,
                default: () => ({})
            }
        },
        computed: {
            fullName(){
                let fullName = '';
                this.contactData.first_name ? fullName += `${this.contactData.first_name} ` : 0;
                this.contactData.last_name ? fullName += `${this.contactData.last_name}` : 0;
                !fullName ? fullName = 'Невідомий контакт' : 0;
                return fullName
            },
            logo(){
                let logo = '';
                const fullNameArray = this.fullName.split(' ');
                fullNameArray.forEach(word => {
                    logo += word[0].toUpperCase();
                })
                return logo
            }
        }
    }
</script>

<style lang="css" scoped>
    .card {
        display: flex;
        gap: 10px;
        align-content: center;
    }
    .card__logo {
        flex: 0 0 auto;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content:center;
        align-items: center;
        border-radius: 50%;
        background-color: blueviolet;
        color: white;
    }

    .card__name {
        font-weight: 700;
    }
</style>