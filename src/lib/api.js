const BASE=(import.meta.env.VITE_API_URL||'http://127.0.0.1:8000/api').replace(/\/$/,'');
const KEY='mehfil-auth-token';
export const getToken=()=>sessionStorage.getItem(KEY);
export const setToken=token=>token?sessionStorage.setItem(KEY,token):sessionStorage.removeItem(KEY);
export async function api(path,{method='GET',body,token=getToken()}={}){
 let response;
 try {response=await fetch(`${BASE}${path}`,{method,headers:{'Accept':'application/json',...(body?{'Content-Type':'application/json'}:{}),...(token?{'Authorization':`Bearer ${token}`}:{})},...(body?{body:JSON.stringify(body)}:{})});}
 catch {throw new Error('Cannot reach the server. Check the backend URL and that Laravel is running.');}
 const data=await response.json().catch(()=>({}));
 if(!response.ok){const validation=data.errors?Object.values(data.errors).flat().join(' '):null;throw new Error(validation||data.message||`Request failed (${response.status})`);}
 return data;
}
