<template>
    <div>
        <label>Введіть свій вік: <input type="number" v-model="userAge" 
            :class="{
                [ageClass]: isAgeChecked
            }"
            /></label>
    </div>
    <div>
        <label>Введіть своє імʼя <input type="text" v-model="userName" 
            :class="{
                'empty': isNameEmpty
            }"
            /></label>
    </div>
</template>

<script>
export default {
    name: "UserForm",
    props: {
        age: {
            type: Number,
        },
        ageModifiers: {
            type: Object,
            default: () => ({}),
        },
        name: {
            type: String,
        },
        nameModifiers: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            isAgeChecked: false,
        };
    },

    computed: {
        userAge: {
            get() {
                return this.age;
            },
            set(val) {
                if(this.ageModifiers.check && val){
                    this.isAgeChecked = true
                }
                this.$emit("update:age", val);
            },
        },
        userName: {
            get() {
                return this.name;
            },
            set(val) {
                this.$emit("update:name", val);
            },
        },
        ageClass(){
            return this.age < 18 ? 'young' : 'adult'
        },
        isNameEmpty(){
            return !this.name && this.nameModifiers.check
        },
    },
};
</script>

<style lang="css" scoped>
    .empty {
        background-color: red;
    }
    .young {
        background-color: red;
    }
    .adult {
        background-color: green;
    }
</style>
