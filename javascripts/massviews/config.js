/**
 * @file Configuration for Massviews application
 * @author MusikAnimal
 * @copyright 2016 MusikAnimal
 */

/**
 * Configuration for Massviews application.
 * This includes selectors, defaults, and other constants specific to Massviews
 * @type {Object}
 */
const config = {
  agentSelector: '#agent_select',
  chart: '.aqs-chart',
  dateLimit: 31, // num days
  dateRangeSelector: '#range_input',
  defaults: {
    dateRange: 'latest-20',
    project: 'en.wikipedia.org',
    sort: 'views',
    source: 'category',
    sourceProject: '',
    direction: 1,
    outputData: [],
    total: 0,
    view: 'list',
    subjectpage: 0
  },
  linearLegend: (datasets, scope) => {
    return `<strong>${$.i18n('totals')}:</strong> ${scope.formatNumber(scope.outputData.sum)}
      (${scope.formatNumber(Math.round(scope.outputData.average))}/${$.i18n('day')})`;
  },
  logarithmicCheckbox: '.logarithmic-scale-option',
  pageLimit: 500,
  sources: {
    category: {
      placeholder: 'https://en.wikipedia.org/wiki/Category:Folk_musicians_from_New_York',
      type: 'text'
    },
    wikilinks: {
      placeholder: 'https://en.wikipedia.org/wiki/Book:New_York_City',
      type: 'text'
    },
    pagepile: {
      placeholder: '12345',
      type: 'number'
    },
    subpages: {
      placeholder: 'https://en.wikipedia.org/wiki/User:Example',
      type: 'text'
    },
    transclusions: {
      placeholder: 'https://en.wikipedia.org/wiki/Template:Infobox_Olympic_games',
      type: 'text'
    },
    quarry: {
      placeholder: '12345',
      type: 'number'
    }
  },
  platformSelector: '#platform_select',
  sourceButton: '#source_button',
  sourceInput: '#source_input',
  formStates: ['initial', 'processing', 'complete', 'invalid'],
  timestampFormat: 'YYYYMMDD00',
  validateParams: ['source', 'subjectpage', 'platform', 'agent', 'direction', 'sort', 'view'],
  validParams: {
    direction: ['-1', '1'],
    sort: ['title', 'views', 'original'],
    source: ['pagepile', 'category', 'subpages', 'transclusions', 'quarry'],
    view: ['list', 'chart'],
    subjectpage: ['0', '1']
  }
};

module.exports = config;
