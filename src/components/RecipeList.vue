<template>
    <div>
        <div v-for="recipes in recipes" :key="recipes.id">
            <RecipeComponent
                v-bind:thumbnail="recipes.thumbnail"
                v-bind:recipeName="recipes.title"
                v-bind:link="recipes.href"
                v-bind:ingredients="recipes.ingredients">
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
            app.recipes = result.results;
        })
    }
}
</script>

<style scoped>

    .recipe {
        border: solid 1px orange;
        border-radius: 16px;
        padding: 5%;
        margin: auto;
        margin-top: 1%;
        width: 50%;
        font-family: sans-serif;
    }

</style>