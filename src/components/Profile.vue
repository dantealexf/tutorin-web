<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">{{ profile.name }}</h1>
            <a href="#" class="d-none d-sm-inline-block btn btn-primary shadow-sm"><i class="fas fa-save fa-sm text-white-50"></i> Guardar</a>
        </div>

        <form action="">
            <div class="row">
                <div class="col-md-12">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col-md-10">
                                    <label for="name">
                                        Nombre completo
                                    </label>
                                    <input type="text" class="form-control form-control-user" name="name" id="name"
                                           v-model="profile.name">
                                </div>
                                <div class="col-md-2">
                                    <div class="col mr-2">
                                        <img class="img-profile rounded-circle" width="100"
                                             :src="'http://localhost:8000/' + profile.image">
                                    </div>
                                    <div class="col-auto">
                                        <input type="file" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12 mt-2">
                    <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col-md-5">
                                    <label for="correo">
                                        Correo electronico
                                    </label>
                                    <input type="email" name="correo" id="correo" class="form-control form-control-user"
                                           v-model="profile.email">
                                </div>
                                <div class="offset-2 col-md-5">
                                    <label for="birthday">
                                        Fecha de nacimiento
                                    </label>
                                    <input v-model="profile.birthday" type="date" class="form-control form-control-user"
                                           name="birthday" id="birthday">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12 mt-2">
                    <div class="card border-left-info shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col-md-5">
                                    <label for="phonenumber">
                                        Telefono fijo
                                    </label>
                                    <input v-model="profile.phonenumber" type="text"
                                           class="form-control form-control-user"
                                           id="phonenumber"
                                           name="phonenumber"
                                           placeholder="Telefono fijo">
                                </div>
                                <div class="offset-2 col-md-5">
                                    <label for="mobile">
                                        Numero celular
                                    </label>
                                    <input v-model="profile.mobile" type="text" class="form-control form-control-user"
                                           id="mobile"
                                           name="mobile"
                                           placeholder="celular">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12 mt-2">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col-md-6">
                                    <label for="dni">Numero de cedula</label><br>
                                    <input type="text" name="dni" id="dni" v-model="profile.profile.dni"><br>

                                    <hr>

                                    <label for="activo" class="mr-4">Activo
                                        <input name="activo" id="activo" type="radio" class="form-control" value="0"
                                               v-model="profile.active">
                                    </label>

                                    <label for="desactivado">Deshabilitado
                                        <input name="desactivado" id="desactivado" type="radio" class="form-control "
                                               value="1" v-model="profile.active">
                                    </label>

                                </div>
                                <div class="col-md-6">
                                    <label for="dni">Descripcion</label><br>
                                    <textarea v-model="profile.profile.description" name="description" id="description"
                                              cols="40" rows="5"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12 mt-2">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters d-flex justify-content-center">

                                <div class="col-sm-4">
                                    <label for="hombre" class="form-check-label">
                                        <input type="radio" class="form-control " id="hombre" value="0"
                                               v-model="profile.gender"> Hombre
                                    </label>
                                </div>

                                <div class="col-sm-4">
                                    <label for="mujer" class="form-check-label">
                                        <input type="radio" class="form-control " id="mujer" value="1"
                                               v-model="profile.gender"> Mujer
                                    </label>
                                </div>

                                <div class="col-sm-4">
                                    <label for="otro" class="form-check-label">
                                        <input type="radio" class="form-control " id="otro" value="2"
                                               v-model="profile.gender"> Otro
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: () => ({
            profile: null
        }),
        methods: {},
        mounted() {
            this.profile = this.$store.state.profile;
        }
    }
</script>

<style scoped>

</style>