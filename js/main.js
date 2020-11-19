// this is a variation of our module themr

(() => {
    let vue_vm = new Vue({
        // link vue to an element in our HTML
        // el: "#app",

        data: {
            message: "Hello from me to Vue.",
            anotherMessage: "Whut up shawty?",
            removeAformat: true,
            showBioData: true,

            collection: [
                {name: "Jordan", role: "Main Character", nickname: "Jordmister3000"},
                {name: "Sarah", role: "Main Homie", nickname: "Gerald"},
                {name: "Tessa", role: "Developer", nickname: "T-Coops"}

            ]
        },

        // this mounted lifecycle hook. vue is done creating itself, and has attatched itself to the "app" div on the page
        mounted: function() {
            console.log("Vue is mounted!");
            // alert("Heyy there! Your vue instance is ready");

            this.collection.push({name: "Reese", role: "Jordan's Minion", nickname: "Mini"})
            // alert("you added Reese!")

        },

        // run a method when we change our veiw (update the DOM with vue)
        updated: function() {
            console.log('Vue just updated the DOM');
        },

        methods: {
            logClicked() {
                console.log("clicked on a friend name");
            },

            clickHeader() {
                console.log("clicked on the header");
            },

            removeFriend(target) {
                // remove this friend from the collection array
                console.log('clicked to remove friend', target, target.name);
                // the "this" keyword inside a vue instance REFERS to vue instance itself by default

                // toggle the property between true and false using ternary statement
                this.showBioData = this.showBioData ? false : true
            }
        }

    }).$mount("#app"); // also connects vue to your wrapper in HTML
})();