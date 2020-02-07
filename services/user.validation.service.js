const userModels = require('./models/userModel');

module.exports = {
	name: "userValidation",
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

		validate: {
			params: {
				email: "string",
				password: "string"
			},
			handler(ctx) {
				return this.validateUser(ctx);
			}
		},
		CreateUser: {
			params: {
				email: "string",
				name: "string",
				password: "string",
				secondPassword: "string",
			},
			handler(ctx) {
				return this.createAccount(ctx);
			}
		}
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
		// private funtions are delcared here
		
		async validateUser(ctx) {
			return new Promise(function(resolve,reject){
				 userModels.findOne({
					email:ctx.params.email,
					password: ctx.params.password,
				},function(err,account){
					account === null ? reject({Account:"false"}) : resolve({Account:"true"})
				})
			})	
		},

		async createAccount(ctx) {

			const user = new userModels({
				name: ctx.params.name,
				email: ctx.params.email,
				password: ctx.params.password,
				secondPassword: ctx.params.secondPassword,
			})

			return new Promise(function(resolve,reject){
				 userModels.findOne({
					 email:user.email,
					 password:user.password,
				},function(err,person){
					person === null ? user.save(function(error){
						error === null ? resolve({saved:true}) : reject({saved:false})
 					}) : resolve({person: 'already exist'}) 
				})
			})
		}
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