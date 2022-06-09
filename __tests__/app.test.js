const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const herbs = require('../data/herb-data');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/herbs should return list of all herbs', async () => {
    const res = await request(app).get('/herbs');
    const expected = herbs.map((herb) => {
      return {
        id: herb.id,
        name: herb.name,
        scientific_name: herb.scientific_name,
        properties: herb.properties,
        direct_sunlight: herb.direct_sunlight,
        uses: herb.uses,
      };
    });
    expect(res.body).toEqual(expected);
  });

  it('/herbs/:id should return one herbs details', async () => {
    const res = await request(app).get('/herbs/1');
    const calendula = {
      id: '1',
      name: 'Calendula',
      scientific_name: 'Calendula officinalis',
      healing_properties: 'antiseptic, detoxifying, antispasmodic',
      direct_sunlight: true,
      uses: 'tea for internal and external ailments',
    };
    expect(res.body).toEqual(calendula);
  });

  afterAll(() => {
    pool.end();
  });
});
