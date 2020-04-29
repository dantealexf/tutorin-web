<template>
    <div>
        <div class="text-center">
            <h1 class="h4 text-gray-900 mb-4">¡Unete a nuestra comunidad!</h1>
        </div>
        <form @submit.prevent="createStudent" class="user">
            <div class="form-group">
                <label>Avatar
                    <input type="file" class="form-control"
                        @change="imageChanged"
                    >
                </label>
            </div>
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input v-model="student.firstName" type="text" class="form-control form-control-user" id="firstname"
                           placeholder="Nombres">
                </div>
                <div class="col-sm-6">
                    <input v-model="student.lastName" type="text" class="form-control form-control-user" id="lastname"
                           placeholder="Apellidos">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-6">
                    <input v-model="student.email" type="email" class="form-control form-control-user" id="email"
                           placeholder="correo electronico">
                </div>
                <div class="col-sm-6">
                    <input v-model="student.birthday" type="date" class="form-control form-control-user" id="birthday">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-6">
                    <input v-model="student.phonenumber" type="text" class="form-control form-control-user"
                           id="phonenumber"
                           placeholder="Telefono fijo">
                </div>

                <div class="col-sm-6">
                    <input v-model="student.mobile" type="text" class="form-control form-control-user" id="mobile"
                           placeholder="celular">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input v-model="student.password" type="password" class="form-control form-control-user"
                           id="password"
                           placeholder="contraseña">
                </div>
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input v-model="student.password_confirmation" type="password"
                           class="form-control form-control-user" id="repeatpassword"
                           placeholder="repita la contraseña">
                </div>
            </div>
            <div class="form-group row">

                <div class="col-sm-4">
                    <label for="hombre" class="form-check-label">
                        <input type="radio" class="form-control " id="hombre" value="0" v-model="student.gender"> Hombre
                    </label>
                </div>

                <div class="col-sm-4">
                    <label for="mujer" class="form-check-label">
                        <input type="radio" class="form-control " id="mujer" value="1" v-model="student.gender"> Mujer
                    </label>
                </div>

                <div class="col-sm-4">
                    <label for="otro" class="form-check-label">
                        <input type="radio" class="form-control " id="otro" value="2" v-model="student.gender"> Otro
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-user btn-block">
                ¡Unir a la comunidad!
            </button>
            <hr>
        </form>
    </div>
</template>

<script>
    export default {
        data: () => ({
            student: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                password_confirmation: '',
                birthday: '',
                gender: '',
                phonenumber: '',
                avatar:'',
                mobile: '',
                active: 0,
                admin: 1
            },
        }),
        methods:{
            imageChanged(e){
                const fileReader = new FileReader();
                fileReader.readAsDataURL(e.target.files[0]);
                fileReader.onload = (e)=>{
                    this.student.avatar = e.target.result
                }
            },
            async createStudent() {
                await this.$store.dispatch("createStudent", this.student);
                await this.$store.dispatch("toggleVisibleNavBar",'student');
            },
        }
    }
</script>

<style scoped>

</style>