export default{
    state: {
        c_name:'',
        email:'',
        message:''
    },
    getters: {},
    mutations: {
        set_c_name (state,c_name) {
            state.c_name = c_name
        },
        set_email (state,email) {
            state.email = email;
        },
        set_message (state,message) {
            state.message = message;
        }
    },
    actions: {}
}