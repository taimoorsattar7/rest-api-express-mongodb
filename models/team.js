const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/team', {useNewUrlParser: true});

mongoose.connection.once('open', function(){
    console.log('Connection has been made');
}).on('error', function(error){
    console.log('Connection error:', error);
});


const teamSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name field is required']
	},
	ranking: {
		type: String
	},
	win: {
		type: String
	},
	lost: {
		type: String
	},
	accuracy: {
		type: String
	}
});

const Team = mongoose.model('team', teamSchema);

module.exports = Team;