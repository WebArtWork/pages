module.exports = function(sd) {
	sd['query_update_all_pages_author'] = function(req, res) {
		return {
			_id: req.body._id,
			author: req.user._id
		};
	};
	sd['query_unique_field_pages'] = function(req, res) {
		return {
			_id: req.body._id,
			author: req.user._id
		};
	};
}