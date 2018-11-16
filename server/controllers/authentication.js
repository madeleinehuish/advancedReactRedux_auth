const User = require('../models/user');

exports.signup = function(req, res, next) {

	const email = req.body.email;
	const password = req.body.password;

	//see if a given user exists
	User.findOne({ email: email }, function(err, existingUser) {
		if(err) {
			return next(err);
		}
		//case with no email or no password
		if(!email || !password) {
			return res.status(422).send({ error: 'You must provide both email and password.' })
		}

		//if user with given email does exist return error
		if(existingUser) {
			return res.status(422).send({ error: 'Email is in use already.' });
		}
		//if user with email does NOT exist then create and save user
		const user = new User({
			email: email,
			password: password
		})
		user.save(function(err) {
			if(err) {
				return next(err);
			}
			//respond to request that user was created
			res.json( { success: true });
		})



	})







}
