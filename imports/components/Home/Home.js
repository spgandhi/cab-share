import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './Home.html';
 
class Home {
  constructor() {
    
  }
}
 
export default angular.module('travel-buddy', [
  angularMeteor
])
  .component('Home', {
    templateUrl: '/imports/components/Home/Home.html',
    controller: Home
  });