import test from 'node:test';
import assert from 'node:assert/strict';
import {filterVenues,formatPrice} from '../src/data.js';
const venues=[{name:'The Grand Marquee',city:'Islamabad',category:'Wedding',area:'E-11',price:150000,rating:4.5},{name:'Rose Garden',city:'Rawalpindi',category:'Outdoor',area:'Bahria Town',price:110000,rating:4.2}];
test('search matches case-insensitively',()=>assert.deepEqual(filterVenues(venues,{query:'GRAND'}).map(v=>v.name),['The Grand Marquee']));
test('category and city filtering',()=>assert.equal(filterVenues(venues,{city:'Islamabad',category:'Outdoor'}).length,0));
test('sorting by price',()=>assert.equal(filterVenues(venues,{sort:'price-low'})[0].name,'Rose Garden'));
test('price formatting',()=>assert.match(formatPrice(5000),/PKR/));
