/* node szyfruj-plik.js <wejście> <wyjście> <hasło> [--odszyfruj] : AES-256-GCM, PBKDF2-SHA256 600000 */
const fs=require('fs'),c=require('crypto');const [i,o,h,tryb]=process.argv.slice(2);
if(tryb==='--odszyfruj'){const b=fs.readFileSync(i),s=b.subarray(0,16),v=b.subarray(16,28),t=b.subarray(b.length-16),d=b.subarray(28,b.length-16);
 const k=c.pbkdf2Sync(h.normalize('NFC'),s,600000,32,'sha256');const x=c.createDecipheriv('aes-256-gcm',k,v);x.setAuthTag(t);fs.writeFileSync(o,Buffer.concat([x.update(d),x.final()]));}
else{const s=c.randomBytes(16),v=c.randomBytes(12),k=c.pbkdf2Sync(h.normalize('NFC'),s,600000,32,'sha256');const x=c.createCipheriv('aes-256-gcm',k,v);
 fs.writeFileSync(o,Buffer.concat([s,v,x.update(fs.readFileSync(i)),x.final(),x.getAuthTag()]));}
