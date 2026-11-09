export const readLocal=(key,fallback)=>{try{const value=JSON.parse(localStorage.getItem(key));return value??fallback}catch{return fallback}};
export const saveLocal=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value))}catch{}};
