<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <div class="card border-left-primary shadow h-100 py-2">
                    <div class="row">
                        <div class="col-md-4">
                            <img class="img-profile" width="200" :src="'http://localhost:8000/' + profile.image" alt="Foto de perfil del usuario">
                            <h3 v-if="profile.profile.dni !== null">
                                # {{ profile.profile.dni }}
                            </h3>
                            <h3 v-else>
                                Sin cedula
                            </h3>
                            
                            <hr>

                            <h3>
                                Fecha de ingreso
                            </h3>

                            <h3>
                                {{ profile.created_at }}
                            </h3>

                        </div>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-10">
                                    <h3>{{ profile.name }}</h3>
                                    <h3>{{ profile.email}}</h3>
                                    <p v-if="profile.profile.description !== null">
                                        {{ profile.profile.description }}
                                    </p>
                                    <p v-else>
                                        Usuario sin descripcion
                                    </p>
                                </div>
                                <div class="col-md-2">
                                    <a href="#" class="btn btn-success shadow-sm" @click="validated">
                                        <i class="fas fa-save text-white"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Categorias seleccionadas</h6>
                    </div>
                    <div class="card-body">
                        <div class="form-check form-check-inline" v-for="(category,id) in this.categories"
                             :key="id">
                            <input class="form-check-input" checked
                                   v-model="checkedNames"
                                   type="checkbox"
                                   :id="category.id"
                                   :value="category.id"
                                   :disabled="checkedNames.length > 4 && checkedNames.indexOf(category.id) === -1"
                            >
                            <label class="form-check-label" :for="category.id">{{ category.name }}</label>
                        </div>
                    </div>
                </div>

                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Dirección</h6>
                    </div>
                    <div class="card-body">
                        <h5 v-if="profile.location.address !== null">
                            {{ profile.location.state }},
                            {{ profile.location.city }},
                            {{ profile.location.address }}
                        </h5>
                        <h3 v-else>
                            Sin ubicacion
                        </h3>
                    </div>
                </div>

            </div>
        </div>

        <div class="row mt-2">
            <div class="col-md-12">
                <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-header">
                        <h3>Documentos</h3>
                    </div>
                    <div class="card-body">
                        <div class="col-md-4">
                            <a target="_blank" href="#">
                                <img class="img-profile rounded-circle" width="150" :src="'http://localhost:8000/documents/document.png'" alt="imagen docmento">
                            </a>
                            <button class="btn btn-success" type="button" @click="verified">Validado</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data: () => ({
            profile: {
                name : '',
                image: 'avatar/default.png',
                valoration:0
            },
            categories: null,
            checkedNames: [],
            count: 0
        }),

        methods: {
            verified() {
                this.$swal({
                    title: 'Documento verificado',
                    text: 'Documento verificado con exito',
                    icon: 'success'
                });
            },
            async validated(){
                const { value: status } = await this.$swal.fire({
                    title: 'Nuevo estado del usuario ',
                    input: 'select',
                    inputOptions: {
                        pendiente: 'Pendiente',
                        completado: 'Completado',
                        rechazado: 'Rechazado',
                        verificado: 'Verificado'
                    },
                    inputPlaceholder: 'Seleccionar un estado',
                    showCancelButton: true
                });
                console.log(status);
            }
        },
        mounted() {
            this.profile = this.$store.state.profile;
            this.categories = this.$store.state.profile.categories;
        }
    }
</script>