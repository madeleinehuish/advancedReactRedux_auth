module.exports = function(app) {
	app.get('/', function(req, res, next) {
		res.send(['water', 'fire', 'earth', 'air', 'space'])
	})
}
