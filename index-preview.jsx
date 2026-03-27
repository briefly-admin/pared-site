import { useState, useEffect, useRef } from "react";

const PAINTINGS = {
  hero: { src: "https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg", artist: "Henri Fantin-Latour", title: "Still Life with Flowers and Fruit, 1866", credit: "The Metropolitan Museum of Art, CC0" },
  divider1: { src: "https://images.metmuseum.org/CRDImages/ep/original/DP-14936-023.jpg", artist: "Claude Monet", title: "Garden at Sainte-Adresse, 1867", credit: "The Metropolitan Museum of Art, CC0" },
  divider2: { src: "https://images.metmuseum.org/CRDImages/ep/original/DT1877.jpg", artist: "Odilon Redon", title: "Bouquet of Flowers, c. 1905", credit: "The Metropolitan Museum of Art, CC0" },
  about: { src: "https://images.metmuseum.org/CRDImages/ep/original/DP346474.jpg", artist: "John Singer Sargent", title: "Carnation, Lily, Lily, Rose, 1885-86", credit: "Tate Britain, Public Domain" },
  footer: { src: "https://images.metmuseum.org/CRDImages/ep/original/DT4180.jpg", artist: "Winslow Homer", title: "Sunlight and Shadow, 1872", credit: "The Metropolitan Museum of Art, CC0" },
  email: { src: "https://images.metmuseum.org/CRDImages/ep/original/DP-25425-001.jpg", artist: "Berthe Morisot", title: "Young Woman Knitting, 1883", credit: "The Metropolitan Museum of Art, CC0" },
};

const PRODUCTS = [
  { id: 1, brand: "MATE the Label", name: "Organic Cotton Layering Tank", price: 48, category: "Clothing", badge: "Editor's Pick", url: "https://matethelabel.com/products/organic-cotton-layering-tank-true-white", img: "https://matethelabel.com/cdn/shop/files/MATE_PDP_OrganicCottonLayeringTank_Bone_01.jpg?v=1738969429&width=600" },
  { id: 2, brand: "Lotuff Leather", name: "The Sling Crossbody", price: 450, category: "Accessories", badge: "Investment Piece", url: "https://lotuffleather.com/collections/handbags", img: "https://lotuffleather.com/cdn/shop/files/Lotuff-Leather-The-Sling-Indigo-1_600x.jpg?v=1707943019" },
  { id: 3, brand: "Primally Pure", name: "Everything Spray", price: 22, category: "Body Care", badge: "Under $25", url: "https://primallypure.com/products/everything-spray", img: "https://primallypure.com/cdn/shop/files/EverythingSpray_Lavender_PDP_01.jpg?v=1701207523&width=600" },
  { id: 4, brand: "Harvest & Mill", name: "Organic Cotton Joggers", price: 128, category: "Clothing", badge: "Editor's Pick", url: "https://harvestandmill.com/collections/women", img: "https://harvestandmill.com/cdn/shop/products/harvest-and-mill-organic-cotton-womens-jogger-natural_600x.jpg?v=1635539159" },
  { id: 5, brand: "True Botanicals", name: "Pure Radiance Oil", price: 110, category: "Body Care", badge: "Best Seller", url: "https://truebotanicals.com/products/pure-radiance-oil-dry", img: "https://truebotanicals.com/cdn/shop/files/PureRadianceOil_Dry_PDP_1_600x.jpg?v=1700157638" },
  { id: 6, brand: "Smithey Ironware", name: "No. 10 Cast Iron Skillet", price: 200, category: "Kitchen", badge: "Editor's Pick", url: "https://smithey.com/products/no-10-cast-iron-skillet", img: "https://smithey.com/cdn/shop/products/Smithey_No.10_Skillet_01_600x.jpg?v=1664388091" },
  { id: 7, brand: "Faribault Mill", name: "Herringbone Wool Throw", price: 245, category: "Home", badge: "Heritage Brand", url: "https://faribaultmill.com/collections/throws", img: "https://faribaultmill.com/cdn/shop/products/bone-herringbone-wool-throw_600x.jpg?v=1666886989" },
  { id: 8, brand: "Frank Clegg", name: "Small Leather Tote", price: 495, category: "Accessories", badge: "Investment Piece", url: "https://frankcleggleatherworks.com/leather-bags/women.html", img: "https://frankcleggleatherworks.com/media/catalog/product/cache/1/image/600x/9df78eab33525d08d6e5fb8d27136e95/f/c/fc-small-tote-cognac-front.jpg" },
  { id: 9, brand: "Blue Canoe", name: "Organic Cotton Bralette", price: 48, category: "Clothing", badge: "Since 1989", url: "https://www.bluecanoe.com/collections/bras", img: "https://www.bluecanoe.com/cdn/shop/products/light-support-bra-natural-1_600x.jpg?v=1635197744" },
  { id: 10, brand: "Portland Leather", name: "Classic Tote", price: 185, category: "Accessories", badge: "Best Seller", url: "https://www.portlandleathergoods.com/products/the-tote", img: "https://www.portlandleathergoods.com/cdn/shop/products/portland-leather-goods-tote-grizzly_600x.jpg?v=1677010203" },
  { id: 11, brand: "Herbivore Botanicals", name: "Pink Cloud Moisturizer", price: 48, category: "Body Care", badge: "Editor's Pick", url: "https://www.herbivorebotanicals.com/products/pink-cloud", img: "https://www.herbivorebotanicals.com/cdn/shop/products/pink-cloud-rosewater-tremella-creamy-jelly-cleanser-herbivore_600x.jpg?v=1660847583" },
  { id: 12, brand: "Mountain Valley", name: "Glass Spring Water 12pk", price: 23, category: "Provisions", badge: "Under $25", url: "https://mountainvalleyspring.com", img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=600&fit=crop" },
  { id: 13, brand: "Avocado Green", name: "Organic Cotton Sheet Set", price: 229, category: "Home", badge: "Editor's Pick", url: "https://www.avocadogreenmattress.com/collections/organic-cotton-sheets", img: "https://www.avocadogreenmattress.com/cdn/shop/products/organic-cotton-sheets-white_600x.jpg?v=1663190203" },
  { id: 14, brand: "Brynn Capella", name: "Lauren Crossbody", price: 398, category: "Accessories", badge: "Artisan Made", url: "https://brynncapella.com", img: "https://brynncapella.com/cdn/shop/files/Lauren-crossbody-saddle-front_600x.jpg?v=1697225443" },
  { id: 15, brand: "One Love Organics", name: "Vitamin D Moisture Mist", price: 39, category: "Body Care", badge: "Small Batch", url: "https://oneloveorganics.com", img: "https://oneloveorganics.com/cdn/shop/products/vitamin-d-moisture-mist-one-love-organics_600x.jpg?v=1640025825" },
  { id: 16, brand: "Jungmaven", name: "Hemp + Cotton Tee", price: 58, category: "Clothing", badge: "Editor's Pick", url: "https://jungmaven.com", img: "https://jungmaven.com/cdn/shop/products/baja-pocket-tee-washed-white-1_600x.jpg?v=1663785200" },
  { id: 17, brand: "ABLE", name: "Emnet Foldover Tote", price: 178, category: "Accessories", badge: "Fair Wage", url: "https://www.livefashionable.com/products/emnet-foldover-tote-cognac", img: "https://www.livefashionable.com/cdn/shop/products/emnet-foldover-tote-cognac-1_600x.jpg?v=1660776003" },
  { id: 18, brand: "Open Door Tea", name: "Steel Tea Infuser", price: 12, category: "Kitchen", badge: "Under $25", url: "https://opendoortea.com", img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&h=600&fit=crop" },
];

const CATEGORIES = ["All", "Clothing", "Accessories", "Body Care", "Home", "Kitchen", "Provisions"];

const s = document.createElement("style");
s.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
:root{--bg:#F7F3EE;--tx:#2C2420;--ac:#C4836A;--sg:#8B9E7E;--cr:#FAF8F5;--mu:#9B9188;--dk:#1A1614;--su:#E8E0D6;--sf:'Cormorant Garamond',Georgia,serif;--sn:'DM Sans',-apple-system,sans-serif}
*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
body{font-family:var(--sn);background:var(--bg);color:var(--tx);-webkit-font-smoothing:antialiased;overflow-x:hidden}
::selection{background:var(--ac);color:#fff}a{text-decoration:none;color:inherit}button{cursor:pointer;border:none;background:none;font-family:inherit}

.nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:0 clamp(1.5rem,4vw,4rem);height:72px;display:flex;align-items:center;justify-content:space-between;background:rgba(247,243,238,0.85);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid rgba(44,36,32,0.06);transition:all .4s}
.nav.scrolled{height:60px;background:rgba(247,243,238,0.95)}
.nav-logo{font-family:var(--sf);font-size:1.75rem;font-weight:400;letter-spacing:.15em}
.nav-links{display:flex;gap:2.5rem;list-style:none}
.nav-links a{font-size:.8rem;letter-spacing:.12em;text-transform:uppercase;color:var(--mu);transition:color .3s;font-weight:400}
.nav-links a:hover{color:var(--tx)}

.hero{min-height:100vh;display:flex;align-items:center;padding:0;position:relative;overflow:hidden}
.hero-art{position:absolute;top:0;right:0;width:50%;height:100%;overflow:hidden}
.hero-art img{width:100%;height:100%;object-fit:cover;opacity:.3;filter:saturate(.7)}
.hero-art::after{content:'';position:absolute;inset:0;background:linear-gradient(to right,var(--bg) 0%,transparent 40%,transparent 100%)}
.hero-content{position:relative;z-index:2;padding:6rem clamp(1.5rem,6vw,8rem) 4rem;max-width:650px}
.hero-overline{font-size:.7rem;letter-spacing:.25em;text-transform:uppercase;color:var(--ac);margin-bottom:2rem;font-weight:500}
.hero h1{font-family:var(--sf);font-size:clamp(2.5rem,5.5vw,4.5rem);font-weight:300;line-height:1.12;letter-spacing:-.01em}
.hero h1 em{font-style:italic;color:var(--ac)}
.hero-sub{font-size:1.05rem;color:var(--mu);margin-top:2rem;max-width:460px;line-height:1.65;font-weight:300}
.hero-cta{margin-top:3rem;display:flex;gap:1rem;align-items:center}
.btn-p{display:inline-block;padding:.85rem 2.5rem;background:var(--tx);color:var(--bg);font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;font-weight:500;transition:all .3s;font-family:var(--sn)}
.btn-p:hover{background:var(--ac)}
.btn-g{display:inline-block;padding:.85rem 2.5rem;border:1px solid rgba(44,36,32,.2);font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;font-weight:500;color:var(--tx);transition:all .3s;font-family:var(--sn)}
.btn-g:hover{border-color:var(--tx)}

.art-credit{position:absolute;bottom:1.5rem;right:1.5rem;font-size:.6rem;color:var(--mu);letter-spacing:.05em;font-style:italic;font-family:var(--sf);z-index:3;text-align:right;line-height:1.4;opacity:.7}

.marquee{padding:1.5rem 0;border-top:1px solid rgba(44,36,32,.06);border-bottom:1px solid rgba(44,36,32,.06);overflow:hidden}
.mq-track{display:flex;gap:3rem;animation:mq 30s linear infinite;width:max-content}
.mq-item{font-family:var(--sf);font-size:.95rem;color:var(--mu);white-space:nowrap;display:flex;align-items:center;gap:3rem;font-style:italic}
.mq-dot{width:4px;height:4px;border-radius:50%;background:var(--ac);flex-shrink:0}
@keyframes mq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

.art-banner{position:relative;height:360px;overflow:hidden;margin:0}
.art-banner img{width:100%;height:100%;object-fit:cover}
.art-banner::after{content:'';position:absolute;inset:0;background:linear-gradient(to bottom,var(--bg),transparent 20%,transparent 80%,var(--bg))}
.art-banner .art-credit{bottom:1rem;right:1.5rem}

.sh{text-align:center;padding:5rem clamp(1.5rem,4vw,4rem) 3rem}
.sh h2{font-family:var(--sf);font-size:clamp(2rem,4vw,3.2rem);font-weight:300;letter-spacing:-.01em}
.sh p{color:var(--mu);margin-top:1rem;font-size:.95rem;font-weight:300;max-width:480px;margin-left:auto;margin-right:auto;line-height:1.6}

.fb{display:flex;justify-content:center;gap:.25rem;padding:0 clamp(1.5rem,4vw,4rem) 3rem;flex-wrap:wrap}
.fb button{padding:.5rem 1.25rem;font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--mu);border:1px solid transparent;transition:all .3s;font-family:var(--sn);font-weight:400}
.fb button:hover{color:var(--tx)}
.fb button.active{color:var(--tx);border-color:rgba(44,36,32,.15);background:var(--cr)}

.pg{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.5rem;padding:0 clamp(1.5rem,4vw,4rem) 5rem;max-width:1400px;margin:0 auto}
.pc{display:block;background:var(--cr);overflow:hidden;transition:transform .4s,box-shadow .4s;cursor:pointer;position:relative}
.pc:hover{transform:translateY(-4px);box-shadow:0 20px 60px rgba(44,36,32,.08)}
.pc-iw{overflow:hidden;position:relative}
.pc-img{width:100%;aspect-ratio:1;object-fit:cover;display:block;transition:transform .6s;background:var(--su)}
.pc:hover .pc-img{transform:scale(1.03)}
.pc-badge{position:absolute;top:1rem;left:1rem;background:var(--bg);padding:.3rem .8rem;font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--ac);font-weight:500}
.pc-info{padding:1.25rem 1.25rem 1.5rem}
.pc-brand{font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:var(--mu);margin-bottom:.35rem;font-weight:500}
.pc-name{font-family:var(--sf);font-size:1.2rem;font-weight:400;color:var(--tx);margin-bottom:.5rem;line-height:1.3}
.pc-price{font-size:.9rem;color:var(--tx);font-weight:500}

.email-sec{position:relative;overflow:hidden;padding:6rem clamp(1.5rem,4vw,4rem);text-align:center}
.email-bg{position:absolute;inset:0;z-index:0}
.email-bg img{width:100%;height:100%;object-fit:cover;opacity:.15;filter:saturate(.5)}
.email-bg::after{content:'';position:absolute;inset:0;background:var(--dk)}
.email-inner{position:relative;z-index:2}
.email-sec h2{font-family:var(--sf);font-size:clamp(2rem,4vw,3rem);font-weight:300;color:var(--bg);letter-spacing:-.01em}
.email-sec p{color:rgba(247,243,238,.5);margin-top:1rem;font-size:.95rem;font-weight:300;max-width:420px;margin-left:auto;margin-right:auto;line-height:1.6}
.ef{margin-top:2.5rem;display:flex;justify-content:center;gap:0;max-width:460px;margin-left:auto;margin-right:auto}
.ei{flex:1;padding:.9rem 1.25rem;background:rgba(247,243,238,.08);border:1px solid rgba(247,243,238,.15);border-right:none;color:var(--bg);font-family:var(--sn);font-size:.85rem;outline:none;transition:border-color .3s}
.ei::placeholder{color:rgba(247,243,238,.35)}
.ei:focus{border-color:var(--ac)}
.es{padding:.9rem 2rem;background:var(--ac);color:#fff;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;font-weight:500;border:1px solid var(--ac);font-family:var(--sn);transition:all .3s}
.es:hover{background:#b3725a}

.about-sec{padding:8rem clamp(1.5rem,4vw,4rem) 4rem;max-width:700px;margin:0 auto;text-align:center}
.about-sec h2{font-family:var(--sf);font-size:clamp(2rem,4vw,3rem);font-weight:300;margin-bottom:2rem}
.about-sec p{color:var(--mu);font-size:1rem;line-height:1.75;font-weight:300}
.about-sec p+p{margin-top:1.25rem}
.about-sec em{font-family:var(--sf);font-style:italic;color:var(--tx)}
.vg{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;padding:2rem clamp(1.5rem,4vw,4rem) 5rem;max-width:900px;margin:0 auto;text-align:center}
.vi h3{font-family:var(--sf);font-size:1.3rem;font-weight:400;margin-bottom:.5rem;color:var(--ac)}
.vi p{font-size:.85rem;color:var(--mu);line-height:1.55;font-weight:300}

.footer{border-top:1px solid rgba(44,36,32,.08);padding:3rem clamp(1.5rem,4vw,4rem);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem}
.footer-logo{font-family:var(--sf);font-size:1.2rem;letter-spacing:.15em}
.fl{display:flex;gap:2rem}
.fl a{font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--mu);transition:color .3s}
.fl a:hover{color:var(--tx)}
.fc{font-size:.7rem;color:var(--mu);width:100%;text-align:center;margin-top:2rem;padding-top:2rem;border-top:1px solid rgba(44,36,32,.06)}

.fi{opacity:0;transform:translateY(24px);transition:opacity .8s,transform .8s}.fi.vis{opacity:1;transform:translateY(0)}

.scroll-ind{position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:.5rem;animation:fl 3s ease-in-out infinite}
.scroll-ind span{font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:var(--mu)}
.scroll-line{width:1px;height:40px;background:linear-gradient(to bottom,var(--ac),transparent)}
@keyframes fl{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(8px)}}

.art-quote{text-align:center;padding:3rem clamp(1.5rem,4vw,4rem);max-width:600px;margin:0 auto}
.art-quote blockquote{font-family:var(--sf);font-size:clamp(1.4rem,3vw,1.8rem);font-weight:300;font-style:italic;color:var(--tx);line-height:1.5}
.art-quote cite{display:block;margin-top:1rem;font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--mu);font-style:normal}

@media(max-width:768px){.nav-links{display:none}.vg{grid-template-columns:1fr}.hero-cta{flex-direction:column}.ef{flex-direction:column}.ei{border-right:1px solid rgba(247,243,238,.15);border-bottom:none}.footer{flex-direction:column;text-align:center}.fl{justify-content:center;flex-wrap:wrap}.hero-art{width:100%;opacity:.2}.hero-content{max-width:100%}.art-banner{height:240px}}
`;
document.head.appendChild(s);

function useInView(t=.15){const r=useRef();const[v,setV]=useState(false);useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([x])=>{if(x.isIntersecting){setV(true);o.unobserve(e)}},{threshold:t});o.observe(e);return()=>o.disconnect()},[]);return[r,v]}
function FI({children,className="",delay=0}){const[r,v]=useInView();return<div ref={r} className={`fi ${v?"vis":""} ${className}`} style={{transitionDelay:`${delay}ms`}}>{children}</div>}

function ProductCard({product,index}){
  const [imgError, setImgError] = useState(false);
  return(
    <FI delay={index*80}>
      <a href={product.url} target="_blank" rel="noopener noreferrer" className="pc">
        <div className="pc-iw">
          <img
            src={imgError ? `https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop` : product.img}
            alt={product.name}
            className="pc-img"
            loading="lazy"
            onError={() => setImgError(true)}
          />
          <div className="pc-badge">{product.badge}</div>
        </div>
        <div className="pc-info">
          <div className="pc-brand">{product.brand}</div>
          <div className="pc-name">{product.name}</div>
          <div className="pc-price">${product.price}</div>
        </div>
      </a>
    </FI>
  )
}

export default function Pared(){
  const[filter,setFilter]=useState("All");
  const[scrolled,setScrolled]=useState(false);
  const[page,setPage]=useState("home");
  const[email,setEmail]=useState("");
  const[subbed,setSubbed]=useState(false);

  useEffect(()=>{const h=()=>setScrolled(window.scrollY>40);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h)},[]);

  const filtered=filter==="All"?PRODUCTS:PRODUCTS.filter(p=>p.category===filter);
  const mqItems=["Zero Plastic","Natural Materials","Non-Toxic","Made in USA","Quality Tested","Curated With Care","Zero Plastic","Natural Materials","Non-Toxic","Made in USA","Quality Tested","Curated With Care"];

  const handleSub=(e)=>{e.preventDefault();if(email)setSubbed(true)};

  const nav=(
    <nav className={`nav ${scrolled?"scrolled":""}`}>
      <a href="#" className="nav-logo" onClick={e=>{e.preventDefault();setPage("home");window.scrollTo({top:0,behavior:"smooth"})}}>PARED</a>
      <ul className="nav-links">
        <li><a href="#" onClick={e=>{e.preventDefault();setPage("home");window.scrollTo({top:0,behavior:"smooth"})}}>Discover</a></li>
        <li><a href="#collection" onClick={e=>{e.preventDefault();setPage("home");setTimeout(()=>document.getElementById("collection")?.scrollIntoView({behavior:"smooth"}),100)}}>Browse</a></li>
        <li><a href="#" onClick={e=>{e.preventDefault();setPage("about");window.scrollTo({top:0,behavior:"smooth"})}}>About</a></li>
      </ul>
    </nav>
  );

  const emailSection=(heading,sub)=>(
    <div className="email-sec">
      <div className="email-bg"><img src={PAINTINGS.email.src} alt="" /><div/></div>
      <div className="email-inner">
        <FI>
          <h2>{heading||"Pared back to what matters"}</h2>
          <p>{sub||"Subscribe for curated emails featuring quality, non-toxic products from brands we trust."}</p>
          <form className="ef" onSubmit={handleSub}>
            {subbed?<p style={{color:"var(--ac)",fontSize:".9rem"}}>Welcome to Pared. We'll be in touch.</p>:(<><input type="email" className="ei" placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} required/><button type="submit" className="es">Subscribe</button></>)}
          </form>
        </FI>
      </div>
      <div className="art-credit">{PAINTINGS.email.artist}, {PAINTINGS.email.title}<br/>{PAINTINGS.email.credit}</div>
    </div>
  );

  const footerEl=(
    <footer className="footer">
      <a href="#" className="footer-logo" onClick={e=>{e.preventDefault();setPage("home");window.scrollTo({top:0,behavior:"smooth"})}}>PARED</a>
      <div className="fl">
        <a href="#" onClick={e=>{e.preventDefault();setPage("home");window.scrollTo({top:0,behavior:"smooth"})}}>Home</a>
        <a href="#collection" onClick={e=>{e.preventDefault();setPage("home");setTimeout(()=>document.getElementById("collection")?.scrollIntoView({behavior:"smooth"}),100)}}>Collection</a>
        <a href="#" onClick={e=>{e.preventDefault();setPage("about");window.scrollTo({top:0,behavior:"smooth"})}}>About</a>
        <a href="https://x.com/paredshop" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <div className="fc">&copy; 2026 Pared. All artwork used is in the public domain (CC0). Pared back to what matters.</div>
    </footer>
  );

  if(page==="about") return(
    <div>
      {nav}
      <div style={{paddingTop:"72px"}}>
        <div className="art-banner">
          <img src={PAINTINGS.about.src} alt="" />
          <div className="art-credit">{PAINTINGS.about.artist}<br/>{PAINTINGS.about.title}</div>
        </div>
        <div className="about-sec">
          <FI>
            <div className="hero-overline" style={{marginBottom:"2rem"}}>About</div>
            <h2>We've become numb to the noise of low-quality, uninspired products...</h2>
          </FI>
          <FI delay={200}>
            <p style={{marginTop:"2.5rem"}}>I started Pared to give conscious women a guide to finding quality, life-tested, non-toxic products made with intention. Every item featured contains <em>zero plastic or synthetic materials</em>, and we prioritize products made in the USA.</p>
            <p>This isn't an exhaustive list. These are products I've tried, my friends have tried, or things I've researched extensively. Most come from brands with many items meeting our criteria.</p>
            <p><em>Pared back to what matters.</em> That's the whole philosophy. Strip away the synthetic, the harmful, the disposable — and what you're left with is quality that lasts.</p>
            <p>The paintings you see throughout this site are public domain masterworks — flowers, landscapes, quiet moments. Art made with real hands, real pigment, centuries ago. They remind us that beauty doesn't need to be manufactured. It just needs to be cared for.</p>
          </FI>
        </div>
        <FI><div className="vg">
          <div className="vi"><h3>Natural</h3><p>Zero plastic. Zero synthetics. Only products made from materials the earth intended.</p></div>
          <div className="vi"><h3>Non-Toxic</h3><p>Free from harmful chemicals, endocrine disruptors, and ingredients you can't pronounce.</p></div>
          <div className="vi"><h3>American</h3><p>Made in the USA, or at minimum from American companies with transparent practices.</p></div>
        </div></FI>
      </div>
      {emailSection("Come along for the ride")}
      {footerEl}
    </div>
  );

  return(
    <div>
      {nav}
      <section className="hero">
        <div className="hero-art">
          <img src={PAINTINGS.hero.src} alt="" />
        </div>
        <div className="hero-content">
          <FI><div className="hero-overline">A curated collection for her</div></FI>
          <FI delay={150}><h1>Quality goods made from <em>natural materials</em> in the USA</h1></FI>
          <FI delay={300}><p className="hero-sub">Pared is a curated collection of non-toxic, plastic-free products for women who care about what they put on their bodies and in their homes.</p></FI>
          <FI delay={450}><div className="hero-cta">
            <button className="btn-p" onClick={()=>document.getElementById("collection")?.scrollIntoView({behavior:"smooth"})}>Browse Collection</button>
            <button className="btn-g" onClick={()=>{setPage("about");window.scrollTo({top:0,behavior:"smooth"})}}>Our Story</button>
          </div></FI>
        </div>
        <div className="art-credit">{PAINTINGS.hero.artist}<br/>{PAINTINGS.hero.title}<br/>{PAINTINGS.hero.credit}</div>
        <div className="scroll-ind"><span>Scroll</span><div className="scroll-line"/></div>
      </section>

      <div className="marquee"><div className="mq-track">{mqItems.map((m,i)=><div key={i} className="mq-item">{m}<div className="mq-dot"/></div>)}</div></div>

      <div className="art-quote"><FI>
        <blockquote>"The creation of something new is not accomplished by the intellect but by the play instinct."</blockquote>
        <cite>Carl Jung</cite>
      </FI></div>

      <div id="collection">
        <div className="sh"><FI><h2>The Collection</h2><p>Every product is tried, tested, and vetted for quality, materials, and origin.</p></FI></div>
        <div className="fb">{CATEGORIES.map(c=><button key={c} className={filter===c?"active":""} onClick={()=>setFilter(c)}>{c}</button>)}</div>
        <div className="pg">{filtered.map((p,i)=><ProductCard key={p.id} product={p} index={i}/>)}</div>
      </div>

      <div className="art-banner" style={{marginTop:"2rem"}}>
        <img src={PAINTINGS.divider1.src} alt="" />
        <div className="art-credit">{PAINTINGS.divider1.artist}<br/>{PAINTINGS.divider1.title}<br/>{PAINTINGS.divider1.credit}</div>
      </div>

      {emailSection()}
      {footerEl}
    </div>
  );
}
