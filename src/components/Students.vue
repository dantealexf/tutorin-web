<template>
    <div>
        <h1 class="h3 mb-2 text-gray-800">Estudiantes</h1>
        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo in nobis officia.</p>


        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <button class="float-right btn btn-primary" @click="toggleVisibleOptionSidebar('formStudent')">
                    Crear
                </button>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Genero</th>
                            <th>Creado</th>
                            <th>Opciones</th>
                        </tr>
                        </thead>
                        <tfoot>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Genero</th>
                            <th>Creado</th>
                            <th>Opciones</th>
                        </tr>
                        </tfoot>
                        <tbody>
                        <tr v-for="apiUser in students" :key="apiUser.id">
                            <template v-if="apiUser.admin === 1">
                                <td>{{ apiUser.name }}</td>
                                <td>{{ apiUser.email }}</td>
                                <td v-if="apiUser.gender == 0">
                                    Hombre
                                </td>
                                <td v-else-if="apiUser.gender == 1">
                                    Mujer
                                </td>
                                <td v-else>
                                    No sabe
                                </td>
                                <td>{{ apiUser.created }}</td>
                                <td>
                                    <a href="#" @click="edit(apiUser)">
                                        <i class="fas fa-edit text-primary mr-2"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fas fa-trash text-danger"></i>
                                    </a>
                                </td>
                            </template>
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
            student: {
                'name': ''
            },
            students: null,
        }),
        methods: {
            edit(student){
                this.$store.dispatch("toggleMethod",'editStudent');
                this.$store.dispatch("edit",student);
                this.toggleVisibleOptionSidebar('editStudent');
            },
            toggleVisibleOptionSidebar(option_name){
                this.$store.dispatch("toggleVisibleNavBar",option_name);
            },
        },
        async mounted() {
            await this.$store.dispatch("listStudents");
            this.students = this.$store.state.students;
        }
    };
</script>
