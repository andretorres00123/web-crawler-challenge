const supertest = require('supertest');
const responseTestData = require('../../tests/data/news');
const { buildAppForSuccess } = require('../../tests/app-builder');

const expectedSuccessData = [
  { "comments": 5, "id": "23535373", "points": 35, "rank": "1", "title": "Hacker Dosed with LSD While Restoring Historical Synth" },
  { "comments": 7, "id": "23534974", "points": 71, "rank": "2", "title": "Generics and Compile-Time in Rust" },
  { "comments": 396, "id": "23528182", "points": 708, "rank": "3", "title": "Adobe to remove Flash Player from web site after December 2020" },
  { "comments": 104, "id": "23524605", "points": 202, "rank": "4", "title": "How many of you know that the team is working on something that no-one wants?" },
  { "comments": 103, "id": "23531825", "points": 302, "rank": "5", "title": "Recently minted database technologies that I find intriguing" },
  { "comments": 158, "id": "23534540", "points": 150, "rank": "6", "title": "Model S Long Range Plus: Building the First 400-Mile Electric Vehicle" },
  { "comments": 9, "id": "23534422", "points": 41, "rank": "7", "title": "Basics of Pneumatic Logic" },
  { "comments": 18, "id": "23533283", "points": 103, "rank": "8", "title": "An exploratory statistical analysis of Akira and Ghost in the Shell" },
  { "comments": 63, "id": "23532662", "points": 127, "rank": "9", "title": "AWS’s Share of Amazon’s Profit" },
  { "comments": 56, "id": "23529954", "points": 216, "rank": "10", "title": "Looking Back at Postgres" },
  { "comments": 94, "id": "23528831", "points": 261, "rank": "11", "title": "WD Red DM-SMR Update: 3 Vendors Bail and WD Knew of ZFS Issues" },
  { "comments": 107, "id": "23528080", "points": 220, "rank": "12", "title": "The Sun seen through the Earth in “neutrino light” (2007)" },
  { "comments": 76, "id": "23525068", "points": 203, "rank": "13", "title": "New Lego Mindstorms Robot Inventor" },
  { "comments": 1, "id": "23525139", "points": 6, "rank": "14", "title": "A sort-middle architecture for 2D graphics" },
  { "comments": 23, "id": "23525456", "points": 40, "rank": "15", "title": "Ask HN: What are your go to SaaS products for startups/MVPs?" },
  { "comments": 1, "id": "23523850", "points": 12, "rank": "16", "title": "UNM researchers document the first use of maize in Mesoamerica" },
  { "comments": 13, "id": "23532981", "points": 47, "rank": "17", "title": "Zeltini Z-Triton" },
  { "comments": 10, "id": "23524779", "points": 22, "rank": "18", "title": "Solving Online Events" },
  { "comments": 70, "id": "23528970", "points": 99, "rank": "19", "title": "Destruction of Nuclear Bombs Using Ultra-High Energy Neutrino Beam (2003)" },
  { "comments": 4, "id": "23535528", "points": 17, "rank": "20", "title": "Harvard University Won’t Require Sat, Act for Admissions Next Year" },
  { "comments": 3, "id": "23534026", "points": 18, "rank": "21", "title": "Show HN: Find journalists, bloggers and webmasters covering your niche" },
  { "comments": 43, "id": "23528571", "points": 124, "rank": "22", "title": "PinePhone: PostmarketOS Community Edition" },
  { "comments": 21, "id": "23528247", "points": 121, "rank": "23", "title": "Gated Linear Networks" },
  { "comments": 11, "id": "23521856", "points": 59, "rank": "24", "title": "Intel’s port 7 AGU blunder (2019)" },
  { "comments": 22, "id": "23524662", "points": 57, "rank": "25", "title": "Stanford JavaScript Crypto Library" },
  { "comments": 164, "id": "23532560", "points": 280, "rank": "26", "title": "T-Mobile, Verizon and AT&T phone calls are failing across the US" },
  { "comments": 184, "id": "23529035", "points": 547, "rank": "27", "title": "Six eBay executives and employees charged over alleged cyberstalking campaign" },
  { "comments": 0, "id": "23535192", "points": 14, "rank": "29", "title": "“Massive DDoS attack” just T-Mobile error" },
  { "comments": 17, "id": "23526437", "points": 95, "rank": "30", "title": "Generation of diagrams and flowcharts from text in a similar manner as markdown" },
]

describe('News Routes', () => {
  let app, axios;
  const appPath = '/api';

  beforeAll(() => {
    const appData = buildAppForSuccess();
    app = appData.app;
    axios = appData.axios;
  });

  describe(`GET ${appPath}/news`, () => {
    const executeValidRequest = () => {
      return supertest(app).get(`${appPath}/news`);
    };

    beforeEach(() => {
      axios.get.mockReset();
    });

    describe('when request is good', () => {
      beforeEach(() => {
        axios.get.mockImplementation(() => {
          return Promise.resolve({ 'data': responseTestData });
        });
      });

      test('should return 200 and expected reponse', async () => {
        const response = await executeValidRequest();
        expect(response.status).toEqual(200);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(response.body).toEqual({ data: expectedSuccessData, count: 29 });
      });
    });
  });

});
