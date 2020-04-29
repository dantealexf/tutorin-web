<template>
    <div>
        <h1 class="h3 mb-2 text-gray-800">Etiquetas</h1>
        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo in nobis officia.</p>


        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <button class="float-right btn btn-primary" @click="createTag">
                    Crear
                </button>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Tiempo</th>
                            <th>Creado</th>
                            <th>Opciones</th>
                        </tr>
                        </thead>
                        <tfoot>
                        <tr>
                            <th>Nombre</th>
                            <th>Tiempo</th>
                            <th>Creado</th>
                            <th>Opciones</th>
                        </tr>
                        </tfoot>
                        <tbody>
                        <tr v-for="apiTag in tags" :key="apiTag.id">
                            <td>{{ apiTag.name }}</td>
                            <td>{{ apiTag.created }}</td>
                            <td>{{ apiTag.created_at }}</td>
                            <td>
                                <a href="#" @click="deleteTag(apiTag)">
                                    <i class="fas fa-trash text-danger"></i>
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {},
        data: () => ({
            tag: {
                'name': ''
            },
            tags: null,
        }),
        methods: {

            async deleteTag(tag) {
                await this.$store.dispatch("deleteTag", tag);
                await this.$store.dispatch("listTags");
                this.tags = this.$store.state.tags;
            },

            async createTag() {
                const {value: text} = await this.$swal({
                    title: 'Etiqueta a crear',
                    inputPlaceholder: 'Nombre de la etiqueta...',
                    input: 'text',
                    showCancelButton: true,
                    cancelButtonText: '<i class="fas fa-times"></i>',
                    cancelButtonColor: '#d33',
                    showClass: {
                        popup: 'animated fadeInDown faster'
                    },
                    hideClass: {
                        popup: 'animated fadeOutUp faster'
                    },
                    inputValidator: (value) => {
                        if (!value) {
                            return '¡No puedes crear una etiqueta vacia!'
                        }
                    }
                });
                this.tag.name = text;
                await this.$store.dispatch("createTag", this.tag);
                await this.$store.dispatch("listTags");
                this.tags = this.$store.state.tags;
            },

        },
        async mounted() {
            await this.$store.dispatch("listTags");
            this.tags = this.$store.state.tags;
        }
    };
</script>
