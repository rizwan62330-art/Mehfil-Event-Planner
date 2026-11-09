// Helpers; venue records are retrieved from the Laravel API.
export const formatPrice = amount => `PKR ${amount.toLocaleString('en-PK')}`;
export const filterVenues = (items, {query='',city='',category='All venues',sort='recommended'}={}) => {
  const q=query.trim().toLowerCase();
  let result=items.filter(v => (!q || [v.name,v.city,v.area,v.category].some(s=>s.toLowerCase().includes(q))) && (!city || v.city===city) && (category==='All venues' || v.category===category));
  if(sort==='price-low') result=[...result].sort((a,b)=>a.price-b.price);
  else if(sort==='price-high') result=[...result].sort((a,b)=>b.price-a.price);
  else if(sort==='top-rated') result=[...result].sort((a,b)=>b.rating-a.rating);
  return result;
};
