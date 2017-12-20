import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    toolbarChange(evt) {
      let flexibleExpansionRatio = evt.detail.flexibleExpansionRatio;
      console.log(flexibleExpansionRatio.toFixed(2));
    }
  }
});
