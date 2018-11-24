const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');


//create local strategy
const localOptions = { usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
	//verify this username and password, call done with the user if correct email and password otherwise call done with false
	User.findOne({ email: email }, function(err, user) {
		if(err) { return done(err); }
		if(!user) { return done(null, false); }
		//compare passwords - is 'password' equal to user.password?
		//need to decode encrypted stored password to normal password
		user.comparePassword(password, function(err, isMatch) {
			if(err) { return( done(err)); }
			if(!isMatch) { return done(null, false); }

			return done(null, user);
		})

	})
})

// Setup options for JWT Strategy
const jwtOptions = {
	//tells JwtStrategy where to look for token, in this case in the header
	//also need to tell JWT the secret that we use to decode the token
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

// create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
	//see if user id in the payload exists in our database
	//if it is call done with that user
	//otherwise call done without a user object
	User.findById(payload.sub, function(err, user) {
		if(err) { return done(err, false); }
		if(user) { done(null, user); }
			else { done(null, false); }
	})
})

// tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
