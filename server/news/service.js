const axios = require('axios');
const cheerio = require("cheerio");
const config = require('../../config/config');

module.exports = class NewsService  {
  constructor(pageData) {
    this.page = pageData;
    this.isLoaded = false;
    this.data = [];
    this.count = 0;
    this._load();
  }

  _load() {
    const $ = cheerio.load(this.page);
    const news = [];
    $('.athing').each((_, element) => {
      const item = {};
      item.id = $(element).attr('id');
      item.rank = $(element).children('.title').children('.rank').text().replace('.', '');
      item.title = $(element).children('.title').children('.storylink').text();
      item.points = $(`#score_${item.id}`).text().replace('points', '').trim();
      const comments = $(`a[href^="item?id=${item.id}"]`).text().split('ago')[1].replace('comment', '').replace('s', '').trim();
      item.comments = isNaN(parseInt(comments, 10)) ? "0" : comments;
      news.push(item);
    });
    this.data = news;
    this.count = news.length;
    this.isLoaded = true;
  }

  getData() {
    return this.data;
  }

  getCount() {
    return this.count;
  }

  static async init() {
    const { data } = await axios.get(config.crawler.url);
    return new NewsService(data);
  }
}
