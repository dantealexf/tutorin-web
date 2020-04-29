<template>
    <div>
        <h1 class="h3 mb-2 text-gray-800">Docentes</h1>
        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo in nobis officia.</p>


        <div class="card shadow mb-4">
            <div class="card-header py-3">

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
                        <tr v-for="apiTeacher in teachers" :key="apiTeacher.id">
                            <template v-if="apiTeacher.admin === 1">
                                <td>{{ apiTeacher.name }}</td>
                                <td>{{ apiTeacher.email }}</td>
                                <td v-if="apiTeacher.gender == 0">
                                    Hombre
                                </td>
                                <td v-else-if="apiTeacher.gender == 1">
                                    Mujer
                                </td>
                                <td v-else>
                                    No sabe
                                </td>
                                <td>{{ apiTeacher.created }}</td>
                                <td>
                                    <a href="#" @click="edit(apiTeacher)">
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
            teacher: {
                'name': ''
            },
            teachers: null,
        }),
        methods: {

            edit(teacher){
                this.$store.dispatch("toggleMethod",'profileteacher');
                this.$store.dispatch("edit",teacher);
                this.toggleVisibleOptionSidebar('profileteacher');
            },
            toggleVisibleOptionSidebar(option_name){
                this.$store.dispatch("toggleVisibleNavBar",option_name);
            },
        },
        async mounted() {
            await this.$store.dispatch("listStudents");
            this.teachers = this.$store.state.students;
        }
    };
</script>
