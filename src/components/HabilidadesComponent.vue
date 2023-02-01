<template>
    <div>
        <table class="table text-white">
            <tbody>
                <tr v-for="p in pokemon.habilidades" :key="p">
                    <td>{{ p }}</td>
                    <td class="d-flex justify-content-end">
                        <button type="button" class="btn btn-danger btn-sm">x</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <input type="text" class="form-control" placeholder="Adicionar habilidade">
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