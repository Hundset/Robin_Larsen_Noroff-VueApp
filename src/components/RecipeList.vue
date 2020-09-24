<template>
    <div class="row">
        <div v-for="recipe in recipes" :key="recipe.id" class="col-sm-12">
            <RecipeComponent
                v-bind:thumbnail="recipe.thumbnail"
                v-bind:recipeName="recipe.title"
                v-bind:link="recipe.href"
                v-bind:ingredients="recipe.ingredients">
            </RecipeComponent>
        </div>
    </div>
</template>

<script>

import RecipeComponent from './RecipeComponent.vue'
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