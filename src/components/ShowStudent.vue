<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <div class="card py-3 border-left-primary">
                <div class="card-body">
                    <img class="img-profile rounded-circle" src="https://source.unsplash.com/collection/190727/60x60">
                    {{ this.student.name }}
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Fecha de nacimiento
                                </div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">
                                    {{ this.student.birthday }}
                                </div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-calendar fa-2x text-gray-300"></i>
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
        data: () => ({
            student: {},
        }),
    }
</script>

<style scoped>

</style>