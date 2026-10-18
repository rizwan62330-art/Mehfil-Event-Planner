import {ArrowUpRight} from 'lucide-react';
import Button from '../ui/Button';
export default function OwnerCallout({setClaimOpen}){
  return (
<section className="overflow-hidden bg-forest py-20 text-white"><div className="container-wide flex flex-col items-start justify-between gap-9 md:flex-row md:items-center"><div><p className="eyebrow mb-4 !text-[#d5b58b]">For venue owners</p><h2 className="max-w-[680px] font-display text-[clamp(34px,4.5vw,58px)] leading-tight">Your extraordinary space deserves to be discovered.</h2><p className="mt-5 max-w-lg text-sm leading-7 text-white/70">Own or manage a venue? Request to claim your listing and be part of the Mehfil directory.</p></div><Button variant="white" className="shrink-0 px-8" onClick={()=>setClaimOpen(true)}>Claim your venue <ArrowUpRight size={17}/></Button></div></section>
  );
}
