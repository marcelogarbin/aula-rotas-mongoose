var Model = require('./model');

var Controller = {
	create: function(req, res){
		var dados = {
  		  name: 'Skol',
  		  description: 'Mijo de rato',
  		  alcohol: 4.5,
  		  price: 3.0,
  		  category: 'pilsen'
  		}
  		, model = new Model(dados)
  		, msg = ''
  		;

  		var model = new Model(dados);

  		model.save(function (err, data){
  		  if (err){
  		    console.log('Erro: ', err);
  		    msg = 'Erro: ' + err;
  		  }else{
  		    console.log('Cerveja inserida: ', data);
  		    msg = 'Cerveja Inserida: ' + data;
  		  }
  			res.end(msg);
  		});
	},
	update: function(req, res){
    var query = {name: '/skol/i'};

		  var mod = {
  			name: 'Brahma',
  			alcohol: 4,
  			price: 6,
  			category: 'pilsen'
  		};

  		var optional = {
  			upsert: false,
  			multi: false
  		};

  		Model.update(query, mod, function (err, data){
  			if(err){
  				console.log('Erro: ', err);
  		    msg = 'Erro: ' + err;
  			}else{
  				console.log('Cervejas atualizadas com sucesso: ', data);
  		    msg = 'Cervejas atualizadas com sucesso: ' + data.nModified;

  			}
  			res.end(msg);
  		});
	},
	retrieve: function(req, res){
		var query = {};

		Model.find(query, function(err, data){
		  if (err){
		    console.log('Erro: ', err);
		    msg = 'Erro: ' + err;
		  }
		  else {
		    console.log('Listagem: ', data);
		    msg = 'Listagem: ' + data;
		  }
		  res.end(msg);
		});
	},
	delete: function(req, res){
		var query = {name: /Brahma/i };

		// É multi: true CUIDADO!
		Model.remove(query, function(err, data){
			if(err){
				console.log(err);
		    msg = 'Erro: ' + err;
			}else{
				console.log('Cerveja deletada com sucesso, quantidade: ', data.result);
				msg = 'Cerveja deletada com sucesso, quantidade: ' + data;
			}
			res.end(msg);
		});
	}
}

module.exports = Controller;