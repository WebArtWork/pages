var Pages = require(__dirname+'/schema.js');
module.exports = function(sd) {
	var router = sd._initRouter('/waw/pages');
	var templates;
	for (let i = sd._parts.length - 1; i >= 0; i--) {
		if(sd._parts[i].name=='pages'||sd._parts[i].name=='Pages'){
			console.log(sd._parts[i].info.templates);
			templates = sd._parts[i].info.templetes;
		}
	}
	router.get('/templetes', function(req, res){
		res.json(templates);
	});


	sd['ensure_get_pages'] = function(req, res, next) {
		console.log(req.user);
		next();
	};
	sd['query_get_pages'] = function(req, res) {
		return {};
	};
	sd['query_update_all_pages'] = function(req, res) {
		return {};
	};
	sd['query_unique_field_pages'] = function(req, res) {
		return {};
	};

	router.post("/file", function(req, res) {
		Pages.findOne({
			_id: req.body._id,
			moderators: req.user._id
		}, function(err, doc){
			if(err||!doc) return res.json(false);
			doc.avatarUrl = '/api/pages/file/' + doc._id + '.jpg?' + Date.now();
			sd._parallel([function(n){
				doc.save(n);
			}, function(n){
				sd._dataUrlToLocation(req.body.dataUrl,
					__dirname + '/files/', doc._id + '.jpg', n);
			}], function(){
				res.json(doc.avatarUrl);
			});
		});
	});

	router.get("/file/:file", function(req, res) {
		res.sendFile(__dirname + '/files/' + req.params.file);
	});
	router.get("/default.png", function(req, res) {
		res.sendFile(__dirname + '/files/avatar.png');
	});
	router.get('/', function(req, res){
		if(req.user){
			res.sendFile(__dirname+'/manager/dist/manager/index.html');
		}
		/*else{
			res.redirect('/Recent/Blogs');
		}*/
	});
};