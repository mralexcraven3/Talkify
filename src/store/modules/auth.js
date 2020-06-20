export default {
    namespaced: true,
    state: {
        loading: false,
        error: '',
        user: null,
    },
    actions: {
        loginWithGithub() {

            // function receiveMessage(event) {
            //     console.log(event);
            //     if (event.origin !== "http://localhost:3030") {
            //         console.log('invalid origin', event.origin);
            //     } else {
            //         console.log(event.data);
            //     }
            //     window.removeEventListener('message', receiveMessage);
            // }
            // window.addEventListener("message", receiveMessage, false);
            window.open('http://localhost:3030/oauth/github');
            //window.open('https://docs.feathersjs.com');
            //const currentURL = win.WebContents.getURL();
            //console.log(currentURL);
        }
    }
}