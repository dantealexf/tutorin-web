<template>
    <div>
        <h1 class="h3 mb-2 text-gray-800">Grupos</h1>
        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo in nobis officia.</p>


        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <button class="float-right btn btn-primary" @click="createGroup">
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
                        <tr v-for="apiGroup in groups" :key="apiGroup.id">
                            <td>{{ apiGroup.name }}</td>
                            <td>{{ apiGroup.created }}</td>
                            <td>{{ apiGroup.created_at }}</td>
                            <td>
                                <a href="#" @click="deleteGroup(apiGroup)">
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
            group: {
                'name': ''
            },
            groups: null,
        }),
        methods: {

            async deleteGroup(group) {
                await this.$store.dispatch("deleteGroup", group);
                await this.$store.dispatch("listGroups");
                this.groups = this.$store.state.groups;
            },

            async createGroup() {
                const {value: text} = await this.$swal({
                    title: 'Grupo a crear',
                    inputPlaceholder: 'Nombre de la grupo...',
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
                            return '¡No puedes crear una grupo vacio!'
                        }
                    }
                });
                this.group.name = text;
                await this.$store.dispatch("createGroup", this.group);
                await this.$store.dispatch("listGroups");
                this.groups = this.$store.state.groups;
            },

        },
        async mounted() {
            await this.$store.dispatch("listGroups");
            this.groups = this.$store.state.groups;
        }
    };
</script>
