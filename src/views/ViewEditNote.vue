<template>
    <div class="edit-note">
        <AddEditNote v-model="noteContent" bgColor="link" placeholder="Edit note" label="Edit Note">
            <template #buttons>
                <button @click="$router.back()" class="button is-link is-light mr-2">Cancel</button>
                <button class="button is-link has-background-success" :disabled="!noteContent" @click="handleSaveClicked">Save Note</button>
            </template>
        </AddEditNote>
    </div>
</template>
<script setup>
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { useRoute, useRouter } from 'vue-router'

import { ref } from 'vue'

const route = useRoute()
const router = useRouter()
const noteContent = ref('')
const storeNotes = useStoreNotes()
noteContent.value = storeNotes.getNoteContent(route.params.id)

const handleSaveClicked = () => { 
    console.log('handleSaveClicked was triggered')
    storeNotes.updateNote(route.params.id, noteContent.value)
    router.push('/')
}

</script>
