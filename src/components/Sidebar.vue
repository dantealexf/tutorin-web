<template>
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"
        :class="visible ? null : 'toggled' "
    >

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">TUTORIN Admin</div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item" @click="toggleVisibleOptionSidebar('dash')">
            <a class="nav-link" href="#">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">
            Funciones
        </div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <a class="nav-link" href="#">
                <i class="fas fa-tasks"></i>
                <span>Tareas</span></a>
        </li>

        <!-- Nav Item - Utilities Collapse Menu -->
        <li class="nav-item">
            <a class="nav-link" href="#">
                <i class="fas fa-laptop"></i>
                <span>Asesorias</span></a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#">
                <i class="fas fa-list"></i>
                <span>Cursos</span></a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">


        <!-- Heading -->
        <div class="sidebar-heading">
            Usuarios
        </div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item" @click="toggleVisibleOptionSidebar('student')">
            <a class="nav-link" href="#">
                <i class="fas fa-fw fa-user-graduate"></i>
                <span>Estudiantes</span></a>
        </li>

        <!-- Nav Item - Utilities Collapse Menu -->
        <li class="nav-item" @click="toggleVisibleOptionSidebar('teacher')">
            <a class="nav-link" href="#">
                <i class="fas fa-fw fa-chalkboard-teacher"></i>
                <span>Profesores</span></a>
        </li>

        <li class="nav-item" @click="toggleVisibleOptionSidebar('group')">
            <a class="nav-link" href="#">
                <i class="fas fa-users"></i>
                <span>Grupos</span></a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">
            Componentes
        </div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item" @click="toggleVisibleOptionSidebar('category')">
            <a class="nav-link" href="#">
                <i class="fas fa-tags"></i>
                <span>Categorias</span></a>
        </li>

        <li class="nav-item" @click="toggleVisibleOptionSidebar('tag')">
            <a class="nav-link" href="#">
                <i class="fas fa-hashtag"></i>
                <span>Etiquetas</span></a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block">

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"
                    @click="toggleVisibleSidebar"
            ></button>
        </div>

    </ul>
    <!-- End of Sidebar -->
</template>

<script>

    export default {
        props: {},
        data: () => ({
            visible: true
        }),
        methods:{
            toggleVisibleSidebar(){
                const body = document.body;
                this.visible = !this.visible;
                body.classList.add('sidebar-toggled');
            },
            toggleVisibleOptionSidebar(option_name){
                this.$store.dispatch("toggleVisibleNavBar",option_name);
            }
        }
    };

</script>
