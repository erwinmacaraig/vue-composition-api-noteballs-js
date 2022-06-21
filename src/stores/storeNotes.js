import { defineStore } from 'pinia'
import { collection, getDocs, onSnapshot, doc, setDoc, deleteDoc, updateDoc, query, orderBy, limit, addDoc } from 'firebase/firestore'
import { db } from '@/js/firebase'

const notesCollectionRef = collection(db, 'notes')
const notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'))
export const useStoreNotes = defineStore({
    id: 'storeNotes',
    state: () => { 
        return {
            notes: [
                // {
                //     id: 'id1',
                //     content: `
                //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore    architecto eos, delectus magnam laboriosam impedit eum pariatur quos et, commodi ullam quo, expedita placeat odit voluptatum? Provident, sunt ipsa?`
                // },
                // {
                //     id: 'id2',
                //     content: `This is a shorter note`
                //  }
            ],
            notesLoaded: false
        }
    },
    actions: {
        async getNotes() {
            this.notesLoaded = false
            onSnapshot(notesCollectionQuery, (querySnapshot) => { 
                let notes = []
                querySnapshot.forEach((doc) => { 
                    let note = {
                        id: doc.id,
                        content: doc.data().content,
                        date: doc.data().date
                    }
                    notes.push(note)
                    this.notesLoaded = true
                })
                this.notes = notes
            })

            // const querySnapshot = await getDocs(collection(db, 'notes'))
            // querySnapshot.forEach((doc) => {                 
            //     let note = {
            //         id: doc.id,
            //         content: doc.data().content
            //     }
            //     this.notes.push(note)
            // })
        },
        async addNote(newNoteContent) {
            let currentDate = new Date().getTime()
            let date = currentDate.toString()
            
            
            await addDoc(notesCollectionRef, {
                content: newNoteContent,
                date: date
            })
        },
        async deleteNote(idToDelete) { 
            // console.log(idToDelete)
            // this.notes = this.notes.filter(note => { 
            //     return note.id !== idToDelete
            // })
            
            await deleteDoc(doc(notesCollectionRef, idToDelete))
        },
        async updateNote(id, content) {            
            
            // let index = this.notes.findIndex(note => {
            //     return note.id === id
            // })
            
            // this.notes[index].content = content
            await updateDoc(doc(notesCollectionRef, id), {
                content: content
            })
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