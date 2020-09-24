<template>
    <div class="[ card ]">
        <div class="[ row ]">
                <div class="[ col-sm-4 ]">
                    <img :src="thumbnail"/>
                </div>
                <div class="[ card--info ]">
                    <b>Recipe: </b>{{title}}
                    <b>From: </b><a :href="link" target="_blank">Link</a>
                    <b>Ingredients: </b>{{ingredients}}
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecipeComponent',
    props: ['thumbnail', 'title', 'link', 'ingredients'],
}
</script>