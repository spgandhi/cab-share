import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class Home extends Controller {

	constructor(){
		super();
		this.day = 'today';
		this.something = this.getAllHours();
		console.log(this.day);
		console.log(this.something);
	}

	autocompleteLoad(id){
		new google.maps.places.Autocomplete((document.getElementById(id)));
	}

	getAllHours(){
		hours = [];
	    if(this.day == 'today' ){
	      console.log('today');
	      date = new Date();
	      for(i=date.getHours();i<24; i++){
	        hours.push(i);
	      }
	    }else{
	      console.log('tomorrow');
	      for(i=0; i<24; i++){
	        hours.push(i);
	      }
	    }
	    return hours;
  	}

  	addPost(){



  		post = {
  			origin : document.getElementById('origin').value,
  			destination : document.getElementById('destination').value,
  			time : new Date(),
  			genderPref : 'any',
  			flexible : true,
  			user: ''
  		}

      // var geocoder = new google.maps.Geocoder();

      // geocoder.geocode({'address': post.origin}, function(results, status) {
      //     if (status === 'OK') {
      //       console.log(results);
      //     } else {
      //       alert('Geocode was not successful for the following reason: ' + status);
      //     }
      //   });

  		Meteor.call('addPost', post, function(err, result){
  			if(!err)
  				console.log('inserted');
  			else
  				console.log(err);
  		})
  	}

}

Home.$inject = ['$state', '$ionicPopup', '$log'];
