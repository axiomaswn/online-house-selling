const House = require('../model/house');
module.exports = {
  create : function(req, res, next){
    House.create({
      judul     : req.body.judul,
      harga     : req.body.harga,
      alamat    : req.body.alamat,
      status    : req.body.status,
      deskripsi : req.body.deskripsi,
      gambar    : req.body.gambar,
      lat       : req.body.lat,
      long      : req.body.long
    }, function (err, data){
      res.send(data);
    })
  }
  ,

  find : function(req, res, next) {
    House.find({}, function (err, data){
      res.send(data);
    })
  },

  delete : function(req, res, next) {
    House.remove({_id: req.params.id}, function (err, data){
        if (err) throw err
      res.send({message:`rumah dengan id ${req.params.id} berhasil dihapus`})
    })
  },

  update : function(req, res, next) {
    House.findOneAndUpdate({_id: req.params.id},{
      judul   : req.body.judul,
      harga   : req.body.harga,
      alamat  : req.body.alamat})
      .then(function(result){
        res.send(result)
      })
      .catch(function(err){
        res.json('error')
      })
  }
}
