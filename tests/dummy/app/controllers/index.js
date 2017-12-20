import Controller from '@ember/controller';

export default Controller.extend({
  showModal: false,
  showListModal: false,

  actions: {
    toggleCheckbox() {
      this.toggleProperty('showModal')
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
