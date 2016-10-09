// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-moment';
import 'angular-ui-router';
import 'ionic-scripts';
import 'angular-meteor-auth';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';

import { Meteor } from 'meteor/meteor';
 
// Modules
import Home from '../controllers/home.controller';
import ChatsCtrl from '../controllers/chats.controller';
import ChatCtrl from '../controllers/chat.controller';
import InputDirective from '../directives/input.directive';
import LoginCtrl from '../controllers/login.controller';
import ProfileCtrl from '../controllers/profile.controller';
import SettingsCtrl from '../controllers/settings.controller';
import NewChatService from '../services/new-chat.service';
import ChatNameFilter from '../filters/chat-name.filter';
import ChatPictureFilter from '../filters/chat-picture.filter';


import NewChatCtrl from '../controllers/new-chat.controller';

import Routes from '../routes';

import CalendarFilter from '../filters/calendar.filter';


const App = 'Whatsapp';
 
// App
Angular.module(App, [
  'angular-meteor',
  'angularMoment',
  'angular-meteor.auth',
  'ionic',
  'accounts.ui'
]);
 
new Loader(App)
  .load(Home)
  	.load(ChatsCtrl)
	.load(InputDirective)
	.load(CalendarFilter)
	.load(ChatCtrl)
  .load(ProfileCtrl)
  .load(SettingsCtrl)
  .load(ChatNameFilter)
  .load(ChatPictureFilter)


  .load(LoginCtrl)
    .load(NewChatCtrl)

    .load(NewChatService)
  	  .load(Routes);


// Startup
if (Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
}
else {
  Angular.element(document).ready(onReady);
}
 
function onReady() {
  Angular.bootstrap(document, [App]);
}