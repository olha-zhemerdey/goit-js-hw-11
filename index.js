import{i as l,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="46775903-5820c4e6d789cb0cb95772c39",m="https://pixabay.com/api/?";function g(s,r=1){const o=new URLSearchParams({key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9,page:r});return fetch(`${m}${o}`).then(i=>{if(!i.ok)throw iziToast.error({title:"Error",message:"Ups.. Something wrong",position:"topRight"}),new Error("Network response was not ok");return i.json()}).catch(i=>{console.error("error:",i)})}function f(s){return s.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:n,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${i}"
              width="360"
            />
          </a>
          <ul class="gallery-item-info">
                <li class="info-block">
                  <h5>Likes</h5>
                  <p>${e}</p>
                </li>
                <li class="info-block">
                  <h5>Views</h5>
                  <p>${t}</p>
                </li>
                <li class="info-block">
                  <h5>Comments</h5>
                  <p>${n}</p>
                </li>
                <li class="info-block">
                  <h5>Downloads</h5>
                  <p>${u}</p>
                </li>
              </ul>
            </li>`).join("")}const y=document.querySelector(".feedback-form"),c=document.querySelector(".gallery"),a=document.querySelector(".loader");let d=1;a.style.display="none";y.addEventListener("submit",b);function b(s){s.preventDefault(),a.style.display="block",c.innerHTML="";const r=s.target.elements.input.value.trim();if(r.length===0)return a.style.display="none",l.error({title:"Error",backgroundColor:"tomato",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"20",position:"bottomRight",close:!0,displayMode:2});g(r,d).then(o=>{if(o.hits.length===0)return c.innerHTML="",l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"});c.insertAdjacentHTML("beforeend",f(o.hits)),w.refresh()}).catch(o=>{console.log(o),l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{a.style.display="none"})}const w=new p(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
