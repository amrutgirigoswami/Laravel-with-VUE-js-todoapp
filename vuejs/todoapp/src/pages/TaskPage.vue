<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Add new Task -->
                    <NewTask/>
                    <!-- List of uncompleted tasks -->
                        <Tasks :tasks="uncompletedTasks" />
                    <!-- Show toggle button -->
                    <div class="text-center my-3" v-show="showToggleCompletedBtn">
                        <button class="btn btn-sm btn-secondary" @click="showCompletedTasks = !showCompletedTasks">
                            <span v-if="!showCompletedTasks">Show Completed</span>
                            <span v-else>Hide Completed</span>
                        </button>
                    </div>

                    <!-- List of completed Tasks -->
                    <Tasks :tasks="completedTasks" :show="completedTaskIsVisible && showCompletedTasks" />

                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { storeToRefs } from 'pinia'
import { useTaskStore } from '../stores/task.js';

import Tasks from "../components/Tasks/Tasks.vue";
import NewTask from "../components/Tasks/NewTask.vue";

const store = useTaskStore()

const {completedTasks, uncompletedTasks} = storeToRefs(store)
const {fetchAllTasks} = store


onMounted(async () => {
    // const { data } = await allTasks();
    // tasks.value = data.data
    await fetchAllTasks()
    
})



const showToggleCompletedBtn = computed(()=>uncompletedTasks.value.length > 0 && completedTasks.value.length > 0) 
const completedTaskIsVisible =computed(()=>uncompletedTasks.value.length==0 || completedTasks.value.length >0)

const showCompletedTasks = ref(false)




</script>

<style lang="scss" scoped></style>