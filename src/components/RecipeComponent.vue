<template>
    <div class="[ card ]">
        <div class="[ row ]">
                <div class="[ col-sm-4]"></div>
                <div class="[ col-sm-4 ]">
                    <img :src="thumbnail"/><br /><br /><br />
                </div>
                <div class="[ card--info ]"><br />
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