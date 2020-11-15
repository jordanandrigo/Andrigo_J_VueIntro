// this is a variation of our module themr

(() => {
    let vue_vm = new Vue({
        // link vue to an element in our HTML
        // el: "#app",

        data: {
            message: "Hello from me to Vue.",
            anotherMessage: "Whut up shawty?",

            collection: [
                {name: "Jordan", role: "Main Character", nickname: "Jordmister3000"},
                {name: "Sarah", role: "Main Homie", nickname: "Gerald"},
                {name: "Tessa", role: "Developer", nickname: "T-Coops"}

            ]
        },
        methods: {
            logClicked() {
                console.log("clicked on a prof name");
            },

            clickHeader() {
                console.log("clicked on the header");s
            }
        }

    }).$mount("#app"); // also connects vue to your wrapper in HTML
})();