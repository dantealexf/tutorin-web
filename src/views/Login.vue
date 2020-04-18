<template>
    <div class="container">
        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Iniciar sesión</h1>
                                    </div>
                                    <form class="user" @submit.prevent="login">
                                        <div class="form-group">
                                            <input v-model="form.email" required type="email"
                                                   class="form-control form-control-user" id="exampleInputEmail"
                                                   aria-describedby="emailHelp" placeholder="Correo electronico">
                                        </div>
                                        <div class="form-group">
                                            <input v-model="form.password" required type="password"
                                                   class="form-control form-control-user" id="exampleInputPassword"
                                                   placeholder="Contraseña">
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-user btn-block">
                                            Iniciar
                                        </button>
                                        <hr>
                                    </form>
                                    <hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Login",
        data: () => ({
            user: {},
            form: {
                email: '',
                password: ''
            }
        }),
        methods: {
            async login() {
                await this.$store.dispatch("login",this.form);
                return  this.$router.replace("/admin");
            },
            toggleBodyClass(addRemoveClass, className) {
                const el = document.body;

                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
        mounted() {
            this.toggleBodyClass('addClass', 'bg-gradient-primary');
        },
    }
</script>