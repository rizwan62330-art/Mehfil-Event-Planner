import {ArrowRight} from 'lucide-react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

export default function ClaimModal({setClaimOpen,submitClaim,venues}){
  return (
<Modal onClose={()=>setClaimOpen(false)}><div className="p-8 sm:p-10"><p className="eyebrow mb-3">Venue owners</p><h2 className="font-display text-4xl">Claim your listing</h2><p className="mt-3 text-sm leading-6 text-gray-500">Send an ownership request. Our team must verify your details before any listing ownership changes.</p><form onSubmit={submitClaim} className="mt-7 space-y-4"><label className="block text-sm font-semibold">Your name<input name="name" className="form-field mt-2" required placeholder="Full name"/></label><label className="block text-sm font-semibold">Business email<input name="email" className="form-field mt-2" required type="email" placeholder="owner@example.com"/></label><label className="block text-sm font-semibold">Venue name<select name="venue" required className="form-field mt-2"><option value="">Select venue</option>{venues.map(v=><option key={v.id} value={v.id}>{v.name}</option>)}</select></label><label className="block text-sm font-semibold">Ownership details<textarea name="details" required minLength={10} rows={3} className="form-field mt-2" placeholder="Explain your connection to the venue"/></label><Button className="w-full" type="submit">Submit request <ArrowRight size={17}/></Button></form></div></Modal>
  );
}
