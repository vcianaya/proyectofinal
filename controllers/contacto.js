var models = require('../models/model.js');



exports.registroContacto = function (req, res){
	var contacto= models.Contacto.build({ nombres: "Nombre",
									apellidoPaterno: "Paterno",
									apellidoMaterno: "Materno",
									telefonoPersonal: 0,
									telefonoDomicilio: 0,
									cumpleanos: new Date()});

	res.render('registroContacto', {titulo:'Registro de Contacto', contacto: contacto});
}

exports.respuestaContacto = function (req, res){
	res.render('respuestaContacto', {mensaje:'Se registro el contacto'});
}


exports.guardarContacto = function(req, res){
 
 // var contacto = models.Contacto.build({
   // nombres: req.body.contacto.nombres
  //});
  var contacto = models.Contacto.build (req.body.contacto);
    //a continuacion guardamos los campos que recibimos del formulario
    contacto.save ({fields:["nombres",
                "apellidoPaterno",
                "apellidoMaterno",
                "telefonoPersonal",
                "telefonoDomicilio",
                "cumpleanos"
                ]
           }).then(function(){
            console.log("ingresa a redirecr");
            res.redirect('/');
           });    
}

exports.index = function (req, res, next){
    models.Contacto.findAll().then(function(contactos){
         res.render('index',{title: 'Avances en computacion',contactos: contactos});
    })
}

    
                    
                    
    

