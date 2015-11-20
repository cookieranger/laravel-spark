Vue.component('spark-settings-security-two-factor-screen', {
    /*
     * Bootstrap the component. Load the initial data.
     */
    ready: function () {
        //
    },


    /*
     * Initial state of the component's data.
     */
    data: function () {
        return {
            user: null,

            forms: {
                enableTwoFactorAuth: new SparkForm({
                    country_code: '',
                    phone_number: '',
                    enabled: false
                }),

                disableTwoFactorAuth: new SparkForm({})
            }
        };
    },


    events: {
        /*
         * Handle the "userRetrieved" event.
         */
        userRetrieved: function (user) {
            this.user = user;

            this.forms.enableTwoFactorAuth.country_code = this.user.phone_country_code;
            this.forms.enableTwoFactorAuth.phone_number = this.user.phone_number;

            return true;
        }
    },


    methods: {
        /**
         * Enable two-factor authentication for the user.
         */
        enableTwoFactorAuth: function () {
            var self = this;

            Spark.post('/settings/user/two-factor', this.forms.enableTwoFactorAuth)
                .then(function () {
                    self.$dispatch('updateUser');

                    self.forms.enableTwoFactorAuth.enabled = true;
                });
        },


        /**
         * Disable two-factor authentication for the user.
         */
        disableTwoFactorAuth: function () {
            var self = this;

            this.forms.enableTwoFactorAuth.enabled = false;

            Spark.delete('/settings/user/two-factor', this.forms.disableTwoFactorAuth)
                .then(function () {
                    self.$dispatch('updateUser');
                });
        }
    }
});
