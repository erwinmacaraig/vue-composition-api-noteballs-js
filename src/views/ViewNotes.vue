<template>
    <div class="notes">
        <!-- <div class="card has-background-success-dark p-4 mb-5">
             <div class="field">

                <div class="control">
                    <textarea v-model="newNote" class="textarea" placeholder="Add a New Note" ref="newNoteRef"></textarea>
                </div>
            </div>
            <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" ></Note>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button
                        @click="addNote"
                        :disabled="!newNote"
                      class="button is-link has-background-success"
                    >Add New Note</button>
                </div>                
            </div>
        </div> -->
        <AddEditNote v-model="newNote" ref="addEditNoteRef" placeholder="Add a new note">
            <template #buttons>
                <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add New
                    Note</button>
            </template>
        </AddEditNote>
        <progress v-if="!storeNotes.notesLoaded" class="progress is-large is-success" max="100" />
        <template v-else>
            <Note v-for="note in storeNotes.notes" :key="note.id" :note="note"></Note>
            <div v-if="!storeNotes.notes.length" class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6">
                No notes here yet
            </div>
        </template>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import {useWatchCharacters } from '@/use/useWatchCharacters'

const storeNotes = useStoreNotes()
const newNote = ref('')
const addEditNoteRef = ref(null)
const addNote = () => {    
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    addEditNoteRef.value.focusTextarea()
    
}

const deleteNote = (idToDelete) => { 
    console.log('deleteNote: ', idToDelete);
    notes.value = notes.value.filter(note => { 
        return note.id !== idToDelete
    })
}

useWatchCharacters(newNote)

</script>