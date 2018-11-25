var mongoose = require('mongoose');
mongoose.connect('mongodb://esraa.project:esraa123456789@ds115664.mlab.com:15664/phone-book');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var phoneSchema = mongoose.Schema({
  name: String,
  phoneNumber: Number
});

var Phone = mongoose.model('Phone', phoneSchema);
var save = (data) => {
  let phone = new Phone(data);
  phone.save(function(err) {
    if (err) {
      console.log("error", err);
      return handleError(err);
    }
    console.log('Saved correctly');
  })
}
var get = (name, callback) => {
  Phone.findOne({name: name}, function (err, data) {
    callback(data);
  });
}

var selectAll = function(callback) {
  Phone.find({}, function(err, phones) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, phones);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.save = save;
module.exports.get = get