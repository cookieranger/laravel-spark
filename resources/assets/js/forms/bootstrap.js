/**
 * Define the form error collection class.
 */
require('./errors');

/**
 * Load the SparkForm helper class.
 */
require('./instance');

/**
 * Add additional form helpers to the Spark object.
 */
_.extend(Spark, require('./http'));

/**
 * Initialize the Spark form extension points.
 */
Spark.forms = {
    registration: {},
    updateProfileBasics: {},
    updateTeamOwnerBasics: {}
};

/**
 * Define the Spark form input components.
 */
require('./components');
