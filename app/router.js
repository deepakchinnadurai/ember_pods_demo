import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('input-task' ,{path:'/'});
  this.route('display-task',{path:'/task-list'});
});

export default Router;
