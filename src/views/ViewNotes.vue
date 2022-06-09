<template>
    <div class="notes">
        <div class="card has-background-success-dark p-4 mb-5">
            <div class="field">

                <div class="control">
                    <textarea class="textarea" placeholder="Add a New Note"></textarea>
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button class="button is-link has-background-success">Add New Note</button>
                </div>                
            </div>
        </div>
        <div class="card mb-4" v-for="i in 4">
            <div class="card-content">
                <div class="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore architecto eos, delectus
                    magnam laboriosam impedit eum pariatur quos et, commodi ullam quo, expedita placeat odit voluptatum?
                    Provident, sunt ipsa?
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
        </div>
    </div>
</template>