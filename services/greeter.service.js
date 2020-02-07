"use strict";

module.exports = {
	// /greater ->
	name: "greeter",

	/**
	 * Service settings
	 */
	settings: {

	},

	/**
	 * Service dependencies
	 */
	dependencies: [],	

	/**
	 * Actions
	 */
	actions: {
		// /Hello ->

		/**
		 * Say a 'Hello'
		 *
		 * @returns
		 */
		hello() {
			return "This is my service";
		},

		/**
		 * Welcome a username
		 *
		 * @param {String} name - User name
		 * @param {String} userName - User name
		 * @param {String} password - User Password
		 */

		// /welcome?name=John
		welcome: {
			params: {
				name: "string"
			},
			handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		},
		login: {
			params: {
				userName: "string",
				password: "string"
			},
			handler(ctx) {
				return `Welcome, ${ctx.params.userName}`;
			}
		},
		
	},
	
	

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};