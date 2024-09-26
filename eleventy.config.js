const dynamicCategories = require('eleventy-plugin-dynamic-categories');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(dynamicCategories, {
    categoryVar: 'categories',
    itemsCollection: 'post',
    perPageCount: 10
  });

  eleventyConfig.addPassthroughCopy('assets');

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_templates'
    }
  };
};
