import { defineStore } from 'pinia'

export const useStoreNotes = defineStore({
    id: 'storeNotes',
    state: () => { 
        return {
            notes: [
                {
                    id: 'id1',
                    content: `
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore    architecto eos, delectus magnam laboriosam impedit eum pariatur quos et, commodi ullam quo, expedita placeat odit voluptatum? Provident, sunt ipsa?`
                },
                {
                    id: 'id2',
                    content: `This is a shorter note`
                 }
            ]
        }
    },
    actions: {
        addNote(newNoteContent) {
            let currentDate = new Date().getTime()
            let id = currentDate.toString()
            let note = {
                id,
                content: newNoteContent
            }
            this.notes.unshift(note)
        },
        deleteNote(idToDelete) { 
            console.log(idToDelete)
            this.notes = this.notes.filter(note => { 
                return note.id !== idToDelete
            })
        },
        updateNote(id, content) {
            
            
            let index = this.notes.findIndex(note => { 
                return note.id === id
            })
            
            this.notes[index].content = content
        }
    },
    getters: {
        // getNoteContent is  not a function but rather a property that is assigned to a function 
        getNoteContent: (state) => { 
            return (id) => { 
                return state.notes.filter(note => { 
                    return id === note.id
                })[0].content
            }
        },
        totalNotesCount: (state) => { 
            return state.notes.length
        },
        totalCharactersCount: (state) => { 
            let count = 0
            state.notes.forEach(note => {
                count += note.content.length
            })
            return count
        }
    }
})