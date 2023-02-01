<template>
    {{ this.sttt }}
</template>

<script>
export default {
    name: 'StatusComponent',
    props: {
        pokemon: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        sttt: {}
    }),
    methods: {
        analisarStatus() {
            this.sttt = this.pokemon.sttt
        }
    },
    mounted() {
        this.analisarStatus()
    }
}
</script>