module.exports = {
  transformDefaults: {
    BADGES: {
      style: 'for-the-badge',
      excludeBadges: ['npmDownloads', 'npmVersion'], // Exclude the "npmVersion" and "npmDownloads" badges
    },
    STRUCTURE: {
      root: '/',
      // showSize: true,
      showDescriptions: true,
      descriptions: {},
    },
    SCRIPTS: {
      format: 'list',
    },
  },
  transforms: {
    BADGES: require('markdown-magic-transform-badges'),
    STRUCTURE: require('markdown-magic-transform-treefile-extended'),
    SCRIPTS: require('markdown-magic-scripts'),
    DEPENDENCIES: require('markdown-magic-transform-acknowledgements'),
  },
};
