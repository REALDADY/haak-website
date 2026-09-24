/**
 * Inline script run before first paint (see app/layout.tsx). It adds `has-intro` to <html>
 * only on the first page view of a session and never when reduced motion is requested,
 * so the intro is CSS-driven, appears at most once per session and never flashes after hydration.
 */
export const introScript = `(function(){try{var d=document.documentElement;if(sessionStorage.getItem('haak-intro-seen')||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;sessionStorage.setItem('haak-intro-seen','1');d.classList.add('has-intro')}catch(e){}})();`
