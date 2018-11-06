/* eslint-env node */
module.exports = {
  description: 'Inject slick-carousel in project',

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall() {
    return this.addPackagesToProject([
      { name: 'slick-carousel', target: '~1.8.1' }
    ]);
  }
};
