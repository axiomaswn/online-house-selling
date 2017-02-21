var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var houseSchema = new Schema({
  judul     : String,
  harga     : String,
  alamat    : String,
  status    : String,
  deskripsi : String,
  gambar    : String,
  lat       : String,
  long      : String
});

module.exports = mongoose.model('house', houseSchema);
