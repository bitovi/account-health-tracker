import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './breadcrumb.less';
import template from './breadcrumb.stache';

export const ViewModel = DefineMap.extend({
  // fetch active company,client, and project
  // based on route or query params?
  company: {
    value: 'Bitovi'
  },
  client: {
    value: 'CALI'
  },
  project: {
    value: 'A2J 6'
  }
});

export default Component.extend({
  tag: 'aht-breadcrumb',
  ViewModel: ViewModel,
  template
});
