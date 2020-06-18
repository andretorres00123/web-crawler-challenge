const axios = require('axios');
const cheerio = require("cheerio");
const config = require('../../config/config');
const { checkFilter } = require('../common/utils');

const LONG_TITLES_FILTER = 'longTitles';
const MAX_WORDS = 5;

module.exports = class NewsService {
  constructor(pageData, filter) {
    this.page = pageData;
    this.isLoaded = false;
    this.filter = checkFilter(filter);
    this.data = [];
    this.count = 0;
    this._load();
  }

  _load() {
    if (!this.filter) {
      return this._loadAllNews();
    }
    if (this.filter === LONG_TITLES_FILTER) {
      return this._loadLongTitlesByComments();
    }
    return this._loadShortTitlesByPoints();
  }

  _loadAllNews() {
    const $ = cheerio.load(this.page);
    const news = [];
    $('.athing').each((_, element) => {
      const item = {};
      item.id = $(element).attr('id');
      item.rank = $(element).children('.title').children('.rank').text().replace('.', '');
      item.title = $(element).children('.title').children('.storylink').text();
      item.points = this._getOnlyNumber($(`#score_${item.id}`).text());
      item.comments = this._getOnlyNumber($(`a[href^="item?id=${item.id}"]`).text().split('ago')[1]);
      news.push(item);
    });
    this.data = news;
    this.count = news.length;
    this.isLoaded = true;
  }

  _loadLongTitlesByComments() {
    const $ = cheerio.load(this.page);
    const news = [];
    $('.athing').each((_, element) => {
      const title = $(element).children('.title').children('.storylink').text();
      if (title.split(' ').length <= MAX_WORDS) {
        return;
      }
      const item = {};
      item.id = $(element).attr('id');
      item.rank = $(element).children('.title').children('.rank').text().replace('.', '');
      item.title = title;
      item.points = this._getOnlyNumber($(`#score_${item.id}`).text());
      item.comments = this._getOnlyNumber($(`a[href^="item?id=${item.id}"]`).text().split('ago')[1]);
      news.push(item);
    });
    this.data = this._orderByComments(news);
    this.count = news.length;
    this.isLoaded = true;
  }

  _orderByComments(news) {
    return news.sort((a, b) => b.comments - a.comments);
  }

  _loadShortTitlesByPoints() {
    const $ = cheerio.load(this.page);
    const news = [];
    $('.athing').each((_, element) => {
      const title = $(element).children('.title').children('.storylink').text();
      if (title.split(' ').length > MAX_WORDS) {
        return;
      }
      const item = {};
      item.id = $(element).attr('id');
      item.rank = $(element).children('.title').children('.rank').text().replace('.', '');
      item.title = title;
      item.points = this._getOnlyNumber($(`#score_${item.id}`).text());
      item.comments = this._getOnlyNumber($(`a[href^="item?id=${item.id}"]`).text().split('ago')[1]);
      news.push(item);
    });
    this.data = this._orderByPoints(news);
    this.count = news.length;
    this.isLoaded = true;
  }

  _orderByPoints(news) {
    return news.sort((a, b) => b.points - a.points);
  }

  _getOnlyNumber(text) {
    var regex = /\d+/g;
    var matches = text.match(regex);
    return matches ? parseInt(matches[0], 10) : 0;
  }

  getData() {
    return this.data;
  }

  getCount() {
    return this.count;
  }

  static async init(filter) {
    const { data } = await axios.get(config.crawler.url);
    return new NewsService(data, filter);
  }
}
