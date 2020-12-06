<template>            
    <div class="card  text-red bg-warning h-100">
        <div class="d-flex justify-content-center p-2">
            <img class= "card-img-top" :src="member.image" alt= "foto del integrante">
        </div>
        <div class="card-body text-center">
            <h3 class="card-title">{{member.nombre}}</h3>
            <p class="card-text">{{member.descripcion}}</p>            
            <h4 class="card-title">{{member.rol}}</h4>            
            <p class="card-text">Codigo : {{member.codigo}}</p>
        </div>        
    </div>   
</template>

<script>
    export default {
        name: "TeamCard",
        props: {
            'member': Object
        }
    }
</script>

<style scoped>

</style>
