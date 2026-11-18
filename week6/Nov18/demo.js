new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        username: '',
    },
    mounted() {
        // # how local storage will work
        // localStorage.setItem('message', this.message);
        // localStorage.setItem('username', "atul")
        // console.log('Vue app mounted');
        // console.log(localStorage.getItem('message'));
        // console.log(localStorage.getItem('username'));
        // localStorage.removeItem('message');
        // console.log(localStorage.getItem('message'));

        // localStorage.clear();
        // console.log(localStorage.getItem('message'));



        // // local storage only store string
        // const settings = { theme: 'dark', fontSize: 16 };
        // localStorage.setItem('settings', JSON.stringify(settings));

        // // Acess in form objsect you can use parse

        // const savedSettings = JSON.parse(localStorage.getItem('settings'));
        // console.log(savedSettings)



        // same for session storage 
    }
}); 