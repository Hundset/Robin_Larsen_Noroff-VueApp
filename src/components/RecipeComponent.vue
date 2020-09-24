<template>
    <div class="recipe">
         <div>
            <div>
                <img :src="thumbnail"/><br /><br />
             </div>
                <div>
                <b>Recipe: </b>{{recipeName}}<br />
                <b>From: </b><a :href="link" target="_blank">Link</a><br />
                <b>Ingredients: </b>{{ingredients}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecipeComponent',
    props: ['thumbnail', 'recipeName', 'link', 'ingredients'],
}
</script>