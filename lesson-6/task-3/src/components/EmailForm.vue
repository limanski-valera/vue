<template>
    <label
        >Введіть свій Email:
        <input
            :class="{
                [inputClass]: inputClass,
            }"
            type="text"
            v-model="emailAddress"
        />
    </label>
</template>

<script>
import users from "@/data/email";
const EMAIL_END_TEXT = "@inv.mn.edu";

export default {
    name: "EmailForm",

    props: {
        modelValue: {
            type: String,
        },
        modelModifiers: {
            default: () => ({}),
        },
    },

    computed: {
        emailAddress: {
            get() {
                return this.modelValue;
            },
            set(val) {
                val = users.find((user) => user.login === val) ? val + EMAIL_END_TEXT : val;
                this.$emit("update:modelValue", val);
            },
        },
        inputClass() {
            if (this.modelModifiers.check && this.emailAddress) {
                return users.find(user => user.login + EMAIL_END_TEXT === this.emailAddress)
                    ? null
                    : "not-user";
            } else return null;
        },
    },
};
</script>

<style lang="css" scoped>
    .not-user {
        background-color: red;
    }
</style>
