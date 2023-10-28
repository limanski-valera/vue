<template>
    <div class="list">
        <departments-list-item @click="onDepartmentClick(index)" v-for="(department, index) in departments" :key="department" :name="department"
            :class="{
                'selected': index === selectedDepartmentIndex
            }"
        />
    </div>
</template>

<script>
import DepartmentsListItem from './DepartmentsListItem.vue'
    export default {
  components: { DepartmentsListItem },
        name: 'DepartmentList',
        props: {
            departments: {
                type: Array,
                default: () => []
            },
            selectedDepartmentIndex: {
                type: Number,
                default: null,
            }
        },
        methods: {
            onDepartmentClick(index){
                this.$emit('departmentSelected', index)
            }
        }
    }
</script>

<style lang="css" scoped>
    .list {
        max-width: 400px;
        border: 1px solid silver;
        padding: 5px;
    }
</style>