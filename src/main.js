import './styles/index.scss';
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import sidebarView from './views/sidebarView.js';
import mainView from './views/mainView.js';


new sidebarView();
new mainView();