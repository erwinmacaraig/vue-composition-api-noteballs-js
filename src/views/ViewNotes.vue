<template>
    <div class="notes">
        <div class="card has-background-success-dark p-4 mb-5">
            <div class="field">

                <div class="control">
                    <textarea v-model="newNote" class="textarea" placeholder="Add a New Note" ref="newNoteRef"></textarea>
                </div>
            </div>
            <Note v-for="note in notes" :key="note.id" :note="note" @deleteClicked="deleteNote"></Note>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button
                        @click="addNote"
                        :disabled="!newNote"
                      class="button is-link has-background-success"
                    >Add New Note</button>
                </div>                
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'

const newNote = ref('')
const newNoteRef = ref(null)
    const notes = ref([
        {
            id: 'id1',
            content: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore    architecto eos, delectus magnam laboriosam impedit eum pariatur quos et, commodi ullam quo, expedita placeat odit voluptatum? Provident, sunt ipsa?`
        },
        {
            id: 'id2',
            content: `This is a shorter note`
        }
    ])

const addNote = () => {
    let currentDate = new Date().getTime() 
    let id = currentDate.toString()
    let note = {
        id,
        content: newNote.value
    }
    notes.value.unshift(note)
    newNote.value = ''
    newNoteRef.value.focus()
}

const deleteNote = (idToDelete) => { 
    console.log('deleteNote: ', idToDelete);
    notes.value = notes.value.filter(note => { 
        return note.id !== idToDelete
    })
}
</script>