import Controller from '@ember/controller';

export default Controller.extend({
  showModal: false,
  showListModal: false,
  iconName: 'favorite',
  offIcon: 'favorite_border',

  actions: {
    tabBarChange({ detail }) {
      console.log(detail)
    },
    showModal() {
      this.toggleProperty('showModal')
    },
    toggleCheckbox() {
      this.set('iconName', 'create')
      this.set('offIcon', 'favorite')
    },
    toggleListCheckbox() {
      this.toggleProperty('showListModal')
    },
    hideModal() {
      this.set('showModal', false)
    },
    hideListModal() {
      this.set('showListModal', false)
    }
  }
});
