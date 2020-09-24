<template>
    <div class="row">
        <div v-for="recipe in recipes" :key="recipe" class="col-sm-12">
            <RecipeComponent
                v-bind:thumbnail="recipe.thumbnail"
                v-bind:title="recipe.title"
                v-bind:link="recipe.href"
                v-bind:ingredients="recipe.ingredients">
            </RecipeComponent>
        </div>
    </div>
</template>

<script>

import RecipeComponent from './components/RecipeComp.vue'
export default {
    name: 'RecipeList',
    components: {
        RecipeComponent
    },
    data(){
        return{
            recipes: []
        }
    },
    beforeMount: function() {
        const app = this;
        const conversion = "https://cors-anywhere.herokuapp.com/";
        const url = "http://www.recipepuppy.com/api/";

        fetch(conversion + url)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            app.recipes = result;
        })
    }
}
</script>