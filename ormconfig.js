module.exports = {
  type: 'mongodb',
  seeds: ['src/database/seeders/**/*{.ts,.js}'],
  factories: ['src/database/factories/**/*{.ts,.js}'],
  useUnifiedTopology: true,
  database: 'cars',
  entities: ['src/models/**/entities/*{.ts,.js}'],
  logging: true,
};
