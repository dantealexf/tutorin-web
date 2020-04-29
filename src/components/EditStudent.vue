<template>
    <div>
        <div class="text-center">
            <h1 class="h4 text-gray-900 mb-4">Usuario a editar</h1>
        </div>
        <form @submit.prevent="updateStudent" class="user">
            <div class="form-group row">
                <div class="col-sm-12 mb-3 mb-sm-0">
                    <input v-model="editStudent.name" type="text" class="form-control form-control-user" id="name"
                           placeholder="Nombres y apellidos">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-6">
                    <input v-model="editStudent.email" type="email" class="form-control form-control-user" id="email"
                           placeholder="correo electronico">
                </div>
                <div class="col-sm-6">
                    <input v-model="editStudent.birthday" type="date" class="form-control form-control-user" id="birthday">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-6">
                    <input v-model="editStudent.phonenumber" type="text" class="form-control form-control-user"
                           id="phonenumber"
                           placeholder="Telefono fijo">
                </div>

                <div class="col-sm-6">
                    <input v-model="editStudent.mobile" type="text" class="form-control form-control-user" id="mobile"
                           placeholder="celular">
                </div>
            </div>
            <div class="form-group row">

                <div class="col-sm-4">
                    <label for="hombre" class="form-check-label">
                        <input type="radio" class="form-control " id="hombre" value="0" v-model="editStudent.gender"> Hombre
                    </label>
                </div>

                <div class="col-sm-4">
                    <label for="mujer" class="form-check-label">
                        <input type="radio" class="form-control " id="mujer" value="1" v-model="editStudent.gender"> Mujer
                    </label>
                </div>

                <div class="col-sm-4">
                    <label for="otro" class="form-check-label">
                        <input type="radio" class="form-control " id="otro" value="2" v-model="editStudent.gender"> Lo que se ve no se pregunta
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-user btn-block">
                Actualizar datos usuario
            </button>
            <hr>
        </form>
    </div>
</template>

<script>
    export default {
        data: () => ({
            editStudent:[]
        }),
        methods:{
            async updateStudent(){
                await this.$store.dispatch("updateStudent", this.editStudent);
                await this.$store.dispatch("toggleVisibleNavBar",'student');
            },
        },
        mounted() {
            this.editStudent = this.$store.state.student
        }
    }
</script>

<style scoped>

</style>