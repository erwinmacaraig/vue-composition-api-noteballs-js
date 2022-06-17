<template>
    <div class="modal is-active p-2">
        <div class="modal-background"></div>
        <div class="modal-card" ref="modalCardRef">
            <header class="modal-card-head">
                <p class="modal-card-title">Delete Note?</p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
                <!-- Content ... -->
                Are you sure you want to delete this note?
            </section>
            <footer class="modal-card-foot is-justify-content-flex-end">
                <button class="button" @click="closeModal">Cancel</button>
                <button class="button is-danger" @click="storeNotes.deleteNote(noteId)">Delete</button>
            </footer>
        </div>
    </div>
</template>

<script setup>
    import { onClickOutside } from '@vueuse/core'
    import { ref, onMounted, onUnmounted } from 'vue'    
    import { useStoreNotes } from '@/stores/storeNotes'

    const storeNotes = useStoreNotes()

    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false
        },
        noteId: {
            type: String,
            required: true
        }
    })

    const closeModal = () => { 
        emit('update:modelValue', false)
}

const modalCardRef = ref(null)


onClickOutside(modalCardRef, closeModal)

const emit = defineEmits(['update:modelValue'])

const handleKeyborad = e => { 
    console.log('closing modal')
    if (e.key === 'Escape') closeModal()
}

onMounted(() => {
    document.addEventListener('keyup', handleKeyborad)
})
onUnmounted(() => {
    document.removeEventListener('keyup', handleKeyborad)
})
</script>