const pool = require('../utils/pool');

module.exports = class Herb {
  id;
  name;
  scientific_name;
  healing_properties;
  direct_sunlight;
  uses;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.scientific_name = row.scientific_name;
    this.healing_properties = row.healing_properties;
    this.direct_sunlight = row.direct_sunlight;
    this.uses = row.uses;
  }

  static async getAllHerbs() {
    const { rows } = await pool.query('SELECT * FROM herbs;');
    return rows.map((row) => new Herb(row));
  }

  static async getHerbById(id) {
    const { rows } = await pool.query('SELECT * from herbs where id=$1;', [id]);
    if (!rows[0]) return null;

    return new Herb(rows[0]);
  }
};
