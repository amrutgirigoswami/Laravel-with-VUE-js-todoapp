<template>
<div class="task-actions">
            <button class="btn btn-sm btn-circle btn-outline-secondary me-1" @click="emit('edit')">
                <IconPencile />
            </button>
            <button class="btn btn-sm btn-circle btn-outline-danger"  @click="emit('remove')">
                <IconTrash />
            </button>
        </div>

</template>

<script setup>
import IconPencile from "../Icons/IconPencile.vue";
import IconTrash from "../Icons/IconTrash.vue";

const emit = defineEmits(['edit','remove'])

</script>