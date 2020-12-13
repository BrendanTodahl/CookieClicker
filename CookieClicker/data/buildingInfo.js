import { Decimal } from 'decimal.js'

export default {
  metaData: [{
    name: 'Cursor',
    baseCost: new Decimal('15'),
    baseCps: new Decimal('0.1')
  }, {
    name: 'Grandma',
    baseCost: new Decimal('100'),
    baseCps: new Decimal('1')
  }, {
    name: 'Farm',
    baseCost: new Decimal('1100'),
    baseCps: new Decimal('8')
  }, {
    name: 'Mine',
    baseCost: new Decimal('12000'),
    baseCps: new Decimal('47')
  }, {
    name: 'Factory',
    baseCost: new Decimal('130000'),
    baseCps: new Decimal('260')
  }, {
    name: 'Bank',
    baseCost: new Decimal('1400000'), // 1.4 million
    baseCps: new Decimal('1400')
  }, {
    name: 'Temple',
    baseCost: new Decimal('20000000'), // 20 million
    baseCps: new Decimal('7800')
  }, {
    name: 'Wizard Tower',
    baseCost: new Decimal('330000000'), // 330 million
    baseCps: new Decimal('44000')
  }, {
    name: 'Shipment',
    baseCost: new Decimal('5100000000'), // 5.1 billion
    baseCps: new Decimal('260000')
  }, {
    name: 'Alchemy Lab',
    baseCost: new Decimal('75000000000'), // 75 billion
    baseCps: new Decimal('1600000') // 1.6 million
  }, {
    name: 'Portal',
    baseCost: new Decimal('1000000000000'), // 1 trillion
    baseCps: new Decimal('10000000') // 10 million
  }, {
    name: 'Time Machine',
    baseCost: new Decimal('14000000000000'), // 14 trillion
    baseCps: new Decimal('65000000') // 65 million
  }, {
    name: 'Antimatter Condenser',
    baseCost: new Decimal('170000000000000'), // 170 trillion
    baseCps: new Decimal('430000000') // 430 million
  }, {
    name: 'Prism',
    baseCost: new Decimal('2100000000000000'), // 2.1 quadrillion
    baseCps: new Decimal('2900000000') // 2.9 billion
  }, {
    name: 'Chancemaker',
    baseCost: new Decimal('26000000000000000'), // 26 quadrillion
    baseCps: new Decimal('21000000000') // 21 billion
  }, {
    name: 'Fractal Engine',
    baseCost: new Decimal('310000000000000000'), // 310 quadrillion
    baseCps: new Decimal('150000000000') // 150 billion
  }, {
    name: 'Javascript Console',
    baseCost: new Decimal('71000000000000000000'), // 71 quintillion
    baseCps: new Decimal('1100000000000') // 1.1 trillion
  }, {
    name: 'Idleverse',
    baseCost: new Decimal('12000000000000000000000'), // 12 sextillion
    baseCps: new Decimal('8300000000000') // 8.3 trillion
  }]
}
