
const productModel = require('./models/products_model')

function SaveProducts(data) {

	const product = new productModel({
		name: data.name,
		model: data.model,
		description: data.description,
		filename: data.filename,
		height: data.height,
		width: data.width,
		price: data.price,
		rating: data.rating
	})

	product.save(function (err) {
		err === null ? console.log("saved") : console.log(err)
	})
}

module.exports = {
	name: "mongo",

	settings: {

	},

	dependencies: [],

	actions: {
		SaveProducts(ctx) {
			SaveProducts(ctx)
		},
		getProducts: {
			params: {
				name: "string",
				model: "string",
			},
			handler(ctx) {
				return this.findProduct(ctx);
			}
		}
	},

	events: {
	},

	methods: {
		// private funtions are delcared here
		findProduct(ctx) {
			var p = new Promise(function (resolve, reject) {
				productModel.findOne({
					name: ctx.params.name,
					model: ctx.params.model,
				}, function (err, docs) {
					err === null ? resolve(docs) : reject(err);
				})
			});
			return p;
		}
	},

	created() {
	},

	started() {
	},

	stopped() {
	}

};

