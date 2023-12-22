import"./assets/styles-8194e3e2.js";import{a as r}from"./assets/vendor-a61d8330.js";const c="/js-product/assets/symbol-defs-a3120aea.svg",l="https://food-boutique.b.goit.study/api/products";function e(i,t){return r.get(`${l}`,{params:{page:i,limit:t}})}const n=document.querySelector(".main-container");async function u(){let i=1,t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6;try{const{data:s}=await e(i,t);console.log(s);const{results:o}=s;console.log(o),a(o),n.innerHTML+=a(o)}catch(s){console.error("Error fetching products",s)}}u();function a(i){return`<ul class="card-container-list">${i.map(t=>{const s=t.category.split("_").join(" ");return`
            <li class="photo-card-list">
                <a class="product-modal-list" href="МОДАЛЬНЕ ВІКНО"> </a>
                    <div class="img-container-list">
                        <img class="product-image-list" src="${t.img}" alt="${t.name} photo" width=140 height=140 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <h2 class="product-name-list">${t.name}</h2>
                        <div class='product-atributes-list'>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Category:</b> ${s}
                            </p>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Size:</b> ${t.size}
                            </p>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Popularity:</b> ${t.popularity}
                            </p>
                        </div>
                        
                        <div class="price-and-btn-list">
                            <h2 class="product-price-list">$${t.price}</h2>
                            <button class='cart-btn-list' type="button">          
                                <svg class="list-cart-svg-list" width="18" height="18">
                                    <use href="${c}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
                        </div>
                    </div>
               
            </li>
        `}).join("")}</ul>`}
//# sourceMappingURL=commonHelpers2.js.map
