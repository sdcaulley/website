export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets');

  return {
    markdownTemplateEngine: 'njk',

    dir: {
      input: 'src',
      output: '_site',
      includes: '_templates'
    }
  };
};
