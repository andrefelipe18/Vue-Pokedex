<template>
    <div>
        <div v-if="!pokemon.id">
            Selecione um pokemon
        </div>
        <div v-else>
        <table class="table text-white">
            <tbody>
                <transition-group name="slide">
                <tr v-for="p in pokemon.habilidades" :key="p">
                    <td>{{ p }}</td>
                    <td class="d-flex justify-content-end">
                        <button type="button" class="btn btn-danger btn-sm">x</button>
                    </td>
                </tr>
                </transition-group>
            </tbody>
        </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HabilidadesComponent',
    props: {
        pokemon: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
.table td {
    border: none;
}
</style>