import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000/";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
        profile: null,
        auth: false,
        option_type: 'dash',
        option_method: '',
        category: [],
        categories: null,
        tag: [],
        tags: null,
        group: [],
        groups: null,
        student: [],
        students: null,
    },
    mutations: {
        SET_OPTION_TYPE(state, option_type) {
            state.option_type = option_type;
        },
        SET_OPTION_METHOD(state, option_method) {
            state.option_method = option_method;
        },
        SET_USER(state, user) {
            state.user = user;
            state.auth = Boolean(user);
        },
        SET_PROFILE(state, profile) {
            state.profile = profile;
        },
        SET_CATEGORY(state, category) {
            state.category = category;
        },
        SET_CATEGORIES(state, categories) {
            state.categories = categories;
        },
        SET_TAG(state, tag) {
            state.tag = tag;
        },
        SET_TAGS(state, tags) {
            state.tags = tags;
        },
        SET_GROUP(state, group) {
            state.group = group;
        },
        SET_GROUPS(state, groups) {
            state.groups = groups;
        },
        SET_STUDENT(state, student) {
            state.student = student;
        },
        SET_STUDENTS(state, students) {
            state.students = students;
        },

    },
    actions: {
        /****************************************/
        toggleVisibleNavBar({commit}, option_type) {
            commit("SET_OPTION_TYPE", option_type); // Este metodo sirve para saber cual componente de la barra de navegacion traer
        },
        toggleMethod({commit}, option_method) {
            commit("SET_OPTION_METHOD", option_method);
        },
        // logueo de usuario
        async login({dispatch}, credentials) {
            await axios.get('sanctum/csrf-cookie');
            await axios.post('api/login', credentials);
            return dispatch("getUser");
        },
        //cerrar sesion
        async logout({dispatch}) {
            await axios.post('api/logout');
            return dispatch("getUser");
        },
        /****************************************/
        // trae el usuario que esta autenticado
        getUser({commit}) {
            axios.get("api/user").then(res => {
                commit("SET_USER", res.data);
            })
                .catch(() => {
                    commit("SET_USER", null);
                });
        },
        edit({commit}, credentials) {
            if (this.state.option_method === 'editStudent') {
                commit("SET_STUDENT", credentials);
            }else if(this.state.option_method === 'profileteacher'){
                commit("SET_PROFILE", credentials)
            }
        },


        /******************* CATEGORIAS *********************/
        /**********  Categorias   ************/
        /*
        1. recibe los datos de la categoria
        2. asigna los datos a un objeto category
        3. realiza una peticion para el registro del objeto
         */
        async createdCategory({commit}, credentials) {
            commit("SET_CATEGORY", credentials);
            await axios.get("sanctum/csrf-cookie");
            await axios.post("api/category", {
                name: this.state.category.name
            });
        },
        async updateCategory({commit}, credentials) {
            commit("SET_CATEGORY", credentials);
            await axios.get("sanctum/csrf-cookie");
            await axios.put("api/category/"  + this.state.category.id,this.state.category);
        },
        /*
        Recibe el objeto lo asigna al state y lo elimina
         */
        async deleteCategory({commit}, credentials) {
            commit("SET_CATEGORY", credentials);
            await axios.get("sanctum/csrf-cookie");
            await axios.delete("api/category/" + this.state.category.id);
        },
        /*
        Pide a la aplicacion todas las categorias registradas en la base de datos
        y las asigna al state
         */
        async listCategories({commit}) {
            await axios.get("sanctum/csrf-cookie");
            await axios.get("api/category").then(res => {
                commit("SET_CATEGORIES", res.data);
            });
        },
        /*******************FIN CATEGORIAS*********************/
        /******************* ETIQUETAS *********************/

        /*
       1. recibe los datos de la categoria
       2. asigna los datos a un objeto category
       3. realiza una peticion para el registro del objeto
        */
        async createTag({commit}, credentials) {
            commit("SET_TAG", credentials);
            await axios.get("sanctum/csrf-cookie");
            await axios.post("api/tag", {
                name: this.state.tag.name
            });
        },
        async updateTag({commit}, credentials) {
            commit("SET_TAG", credentials);
            await axios.get("sanctum/csrf-cookie");
            await axios.put("api/tag/"  + this.state.tag.id,this.state.tag);
        },
        /*
        Recibe el objeto lo asigna al state y lo elimina
         */
        async deleteTag({commit}, credentials) {
            commit("SET_TAG", credentials);
            await axios.get("sanctum/csrf-cookie");
            await axios.delete("api/tag/" + this.state.tag.id);
        },
        /*
        Pide a la aplicacion todas las categorias registradas en la base de datos
        y las asigna al state
         */
        async listTags({commit}) {
            await axios.get("sanctum/csrf-cookie");
            await axios.get("api/tag").then(res => {
                commit("SET_TAGS", res.data);
            });
        },

        /******************* FIN ETIQUETAS *********************/

        /******************* Grupos *********************/

        async createGroup({commit}, credentials) {
            commit("SET_GROUP", credentials);
            await axios.get("sanctum/csrf-cookie");
            await axios.post("api/group", {
                name: this.state.group.name
            });
        },
        async updateGroup({commit}, credentials) {
            commit("SET_TAG", credentials);
            await axios.get("sanctum/csrf-cookie");
            await axios.put("api/group/"  + this.state.group.id,this.state.group);
        },
        /*
        Recibe el objeto lo asigna al state y lo elimina
         */
        async deleteGroup({commit}, credentials) {
            commit("SET_GROUP", credentials);
            await axios.get("sanctum/csrf-cookie");
            await axios.delete("api/group/" + this.state.group.id);
        },
        /*
        Pide a la aplicacion todas las categorias registradas en la base de datos
        y las asigna al state
         */
        async listGroups({commit}) {
            await axios.get("sanctum/csrf-cookie");
            await axios.get("api/group").then(res => {
                commit("SET_GROUPS", res.data);
            });
        },

        /******************* FIN Grupos *********************/

        /******************* Estudiantes *********************/

        async createStudent({commit}, credentials) {
            commit("SET_STUDENT", credentials);
            await axios.get("sanctum/csrf-cookie");
            await axios.post("api/student", {
                name: this.state.student.firstName + ' ' + this.state.student.lastName,
                email: this.state.student.email,
                password: this.state.student.password,
                password_confirmation: this.state.student.password_confirmation,
                birthday: this.state.student.birthday,
                gender: this.state.student.gender,
                phonenumber: this.state.student.phonenumber,
                avatar:this.state.student.avatar,
                mobile: this.state.student.mobile,
                active: 0,
                admin: 1
            });
        },

        async updateStudent({commit}, credentials) {
            commit("SET_STUDENT", credentials);
            await axios.get("sanctum/csrf-cookie");
            await axios.post("api/student/" + this.state.student.id, {
                _method: 'patch',
                id:this.state.student.id,
                name: this.state.student.name,
                email: this.state.student.email,
                birthday: this.state.student.birthday,
                gender: this.state.student.gender,
                phonenumber: this.state.student.phonenumber,
                mobile: this.state.student.mobile,
                active: 0,
                admin: 1
            });
        },

        async listStudents({commit}) {
            await axios.get("sanctum/csrf-cookie");
            await axios.get("api/student").then(res => {
                commit("SET_STUDENTS", res.data);
            });
        },

        /******************* FIN Estudiantes *********************/
    },
    modules: {},
})
;
