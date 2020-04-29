<template>
    <div>
        <h1 class="h3 mb-2 text-gray-800">Categorias</h1>
        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo in nobis officia.</p>


        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <button class="float-right btn btn-primary" @click="createCategory">
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
                        <tr v-for="apiCategory in categories" :key="apiCategory.id">
                            <td>{{ apiCategory.name }}</td>
                            <td>{{ apiCategory.created }}</td>
                            <td>{{ apiCategory.created_at }}</td>
                            <td>
                                <a href="#" class="mr-2" @click="updateCategory(apiCategory)">
                                    <i class="fas fa-edit text-primary"></i>
                                </a>
                                <a href="#" @click="deleteCategory(apiCategory)">
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
            category: {
                'name': ''
            },
            categories: null,
        }),
        methods: {

            async deleteCategory(category) {
                await this.$store.dispatch("deleteCategory", category);
                await  this.$swal({
                    icon: 'success',
                    title: '¡Completado!',
                    text: '¡categoria eliminada con exito!',
                });
                await this.$store.dispatch("listCategories");
                this.categories = this.$store.state.categories;
            },

            async createCategory() {
                const {value: text} = await this.$swal({
                    title: 'Categoria a crear',
                    inputPlaceholder: 'Nombre de la categoria...',
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
                            return '¡No puedes crear una categoria vacia!'
                        }
                    }
                });
                this.category.name = text;
                await this.$store.dispatch("createdCategory", this.category);
                await  this.$swal({
                    icon: 'success',
                    title: '¡Completado!',
                    text: '¡categoria creada con exito!',
                });
                await this.$store.dispatch("listCategories");
                this.categories = this.$store.state.categories;
            },
            async updateCategory(categoryUpdate) {
                const {value: text} = await this.$swal({
                    title: 'Categoria a modificar',
                    inputPlaceholder: categoryUpdate.name,
                    input: 'text',
                    inputValue: categoryUpdate.name,
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
                            return '¡No puedes modificar una categoria vacia!'
                        }
                    }
                });
                this.category = categoryUpdate;
                this.category.name = text;
                await this.$store.dispatch("updateCategory", this.category);
                await  this.$swal({
                    icon: 'info',
                    title: '¡Completado!',
                    text: '¡categoria modificada con exito!',
                });
                await this.$store.dispatch("listCategories");
                this.categories = this.$store.state.categories;
            },

        },
        async mounted() {
            await this.$store.dispatch("listCategories");
            this.categories = this.$store.state.categories;
        }
    };
</script>
