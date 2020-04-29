<template>
    <div id="wrapper">
        <Sidebar></Sidebar>
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <NavBar></NavBar>

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <Dashboard v-if="this.$store.state.option_type === 'dash'"></Dashboard>
                    <Student v-if="this.$store.state.option_type === 'student'"></Student>
                    <Category v-else-if="this.$store.state.option_type === 'category'"></Category>
                    <Tag v-else-if="this.$store.state.option_type === 'tag'"></Tag>
                    <Group v-else-if="this.$store.state.option_type === 'group'"></Group>
                    <Teacher v-else-if="this.$store.state.option_type === 'teacher'"></Teacher>

                    <!--- Formularios --->
                    <FormStudent v-else-if="this.$store.state.option_type === 'formStudent'"></FormStudent>
                    <EditStudent v-else-if="this.$store.state.option_type === 'editStudent'"></EditStudent>
                    <Profile v-else-if="this.$store.state.option_type === 'profile'"></Profile>
                    <ProfileTeacher v-else-if="this.$store.state.option_type === 'profileteacher'"></ProfileTeacher>
                    <!--- Fin de formularios --->

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Alexander Fonseca (Dante) 2020</span>
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

</template>

<script>
    import Sidebar from "@/components/Sidebar.vue";
    import NavBar from "@/components/NavBar.vue";
    import Dashboard from "@/components/Dashboard.vue";
    import Category from "@/components/Categories.vue";
    import Tag from "@/components/Tags.vue";
    import Group from "@/components/Groups.vue";
    import Student from "@/components/Students.vue";
    import Teacher from "@/components/Teachers.vue";
    import FormStudent from "@/components/FormStudent.vue";
    import EditStudent from "@/components/EditStudent.vue";
    import Profile from "@/components/Profile.vue";
    import ProfileTeacher from "@/components/ProfileTeacher.vue";

    export default {
        name: "Admin",
        components: {
            Sidebar, NavBar,Category,Dashboard,Tag,Group,Teacher,Student,FormStudent,EditStudent,Profile,ProfileTeacher
        },
        data: () => ({
            option_type:'dash',
        }),
        methods: {

        },
    }
</script>
