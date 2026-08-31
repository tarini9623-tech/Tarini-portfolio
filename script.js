*{box-sizing:border-box;margin:0;padding:0}

:root{
  --bg:#fffaff;
  --ink:#17152b;
  --muted:#625d70;
  --pink:#ff4fa3;
  --blue:#4d7cff;
  --purple:#9567ff;
  --yellow:#ffd84d;
  --cyan:#67dfff;
  --line:#eadff0;
}

html{scroll-behavior:smooth}

body{
  font-family:"DM Sans",sans-serif;
  background:var(--bg);
  color:var(--ink);
  overflow-x:hidden;
  background-image:
    radial-gradient(circle at 5% 10%,#ffd5ea 0,transparent 25%),
    radial-gradient(circle at 95% 12%,#d7e3ff 0,transparent 28%),
    radial-gradient(circle at 80% 75%,#fff1a8 0,transparent 25%),
    radial-gradient(circle at 15% 85%,#e2d7ff 0,transparent 23%);
}

body:before{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  z-index:-1;
  opacity:.45;
  background-image:linear-gradient(#ffffff55 1px,transparent 1px),
                   linear-gradient(90deg,#ffffff55 1px,transparent 1px);
  background-size:50px 50px;
}

/* NAVBAR */

.nav{
  position:fixed;
  top:14px;
  left:5%;
  right:5%;
  z-index:20;
  height:64px;
  padding:0 20px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  background:#ffffffc9;
  backdrop-filter:blur(18px);
  border:1px solid #ffffff;
  border-radius:22px;
  box-shadow:0 12px 35px #6d4aff12;
}

.logo{
  font-family:"Space Grotesk",sans-serif;
  font-size:25px;
  font-weight:700;
  text-decoration:none;
  color:var(--ink);
}

.logo span{color:var(--pink)}

.nav-links{
  display:flex;
  gap:25px;
}

.nav a{
  text-decoration:none;
  color:var(--ink);
  font-weight:600;
  transition:.25s;
}

.nav-links a:hover{color:var(--pink)}

.nav-cta{
  padding:11px 18px;
  border-radius:30px;
  color:#fff!important;
  background:linear-gradient(135deg,var(--pink),var(--purple));
  box-shadow:0 8px 25px #ff4fa344;
}

.menu-btn{display:none}

/* HERO */

.hero{
  min-height:100vh;
  padding:150px 8% 90px;
  display:grid;
  grid-template-columns:1.05fr .95fr;
  gap:65px;
  align-items:center;
  position:relative;
}

.hero-grid{
  position:absolute;
  inset:0;
  z-index:-2;
  opacity:.25;
  background-image:
    linear-gradient(#ffffff 1px,transparent 1px),
    linear-gradient(90deg,#ffffff 1px,transparent 1px);
  background-size:65px 65px;
  mask-image:linear-gradient(to bottom,black,transparent 90%);
}

.hero-orb{
  position:absolute;
  border-radius:50%;
  filter:blur(5px);
  z-index:-1;
  animation:orbFloat 7s ease-in-out infinite;
}

.orb-one{
  width:260px;
  height:260px;
  background:#ff9dcc;
  left:-90px;
  top:20%;
  opacity:.45;
}

.orb-two{
  width:230px;
  height:230px;
  background:#83b0ff;
  right:5%;
  bottom:5%;
  opacity:.38;
  animation-delay:-3s;
}

.eyebrow{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:9px 15px;
  border-radius:30px;
  background:#fff;
  border:1px solid #f2c9df;
  color:var(--pink);
  font-size:12px;
  font-weight:800;
  letter-spacing:.5px;
  box-shadow:0 8px 25px #0000000d;
}

.pulse{
  width:8px;
  height:8px;
  border-radius:50%;
  background:#49d98a;
  box-shadow:0 0 0 6px #49d98a22;
}

.hero h1{
  font-family:"Space Grotesk",sans-serif;
  font-size:clamp(52px,7vw,92px);
  line-height:.94;
  letter-spacing:-5px;
  margin:25px 0;
}

.gradient-text{
  background:linear-gradient(90deg,var(--pink),var(--purple),var(--blue));
  -webkit-background-clip:text;
  background-clip:text;
  color:transparent;
}

.outline-text{
  color:transparent;
  -webkit-text-stroke:2px var(--blue);
}

.hero-copy{
  max-width:650px;
  color:var(--muted);
  font-size:18px;
  line-height:1.7;
}

.hero-copy strong{color:var(--ink)}

.hero-actions{
  display:flex;
  gap:14px;
  margin:30px 0;
  flex-wrap:wrap;
}

.btn{
  display:inline-block;
  padding:13px 21px;
  border-radius:30px;
  text-decoration:none;
  font-weight:700;
  transition:.3s;
}

.primary{
  color:white!important;
  background:linear-gradient(135deg,var(--pink),var(--purple));
  box-shadow:0 12px 30px #ff4fa344;
}

.secondary{
  color:var(--ink);
  background:white;
  border:1px solid #ded3e6;
}

.btn:hover{
  transform:translateY(-5px);
  box-shadow:0 15px 35px #0002;
}

.hero-meta{
  display:flex;
  align-items:center;
  gap:10px;
  flex-wrap:wrap;
  color:#6f697b;
  font-size:13px;
}

.hero-meta span:not(:nth-child(even)){
  padding:7px 12px;
  border-radius:20px;
  background:#ffffffbb;
  border:1px solid #ffffff;
}

/* CODE CARD */

.hero-card{
  position:relative;
  padding:18px;
  border-radius:30px;
  background:#17152b;
  color:white;
  transform:rotate(2deg);
  border:4px solid white;
  box-shadow:0 30px 70px #5541a344;
  transition:.4s;
}

.hero-card:hover{
  transform:rotate(0deg) translateY(-8px);
}

.hero-card:before{
  content:"";
  position:absolute;
  inset:-9px;
  z-index:-1;
  border-radius:35px;
  background:linear-gradient(135deg,var(--pink),var(--yellow),var(--blue));
}

.card-top{
  display:flex;
  justify-content:space-between;
  padding:7px 5px 15px;
  font-size:11px;
  color:#bcb7d0;
  letter-spacing:1px;
}

.code-window{
  padding:28px;
  border-radius:20px;
  background:#252239;
  box-shadow:inset 0 0 40px #0003;
}

.window-dots{
  display:flex;
  gap:7px;
  margin-bottom:25px;
}

.window-dots i{
  width:9px;
  height:9px;
  border-radius:50%;
  background:#777;
}

.code-window pre{
  font-family:monospace;
  font-size:15px;
  line-height:2;
  white-space:pre-wrap;
}

.purple{color:#c69cff}
.blue{color:#75a9ff}
.pink{color:#ff75ba}
.green{color:#8ee6ad}

.floating-tag{
  position:absolute;
  padding:10px 16px;
  border-radius:20px;
  background:#fff;
  color:var(--ink);
  font-weight:800;
  box-shadow:0 12px 30px #0003;
  animation:tagFloat 4s ease-in-out infinite;
}

.tag-one{
  right:-25px;
  top:12%;
  color:var(--pink);
}

.tag-two{
  left:-35px;
  bottom:13%;
  color:var(--blue);
  animation-delay:-1.5s;
}

.tag-three{
  right:-25px;
  bottom:22%;
  color:var(--purple);
  animation-delay:-3s;
}

/* MARQUEE */

.marquee-strip{
  overflow:hidden;
  padding:17px 0;
  transform:rotate(-1deg) scale(1.03);
  background:linear-gradient(90deg,var(--pink),var(--purple),var(--blue));
  color:white;
  box-shadow:0 12px 30px #7550cc22;
}

.marquee-track{
  display:flex;
  width:max-content;
  gap:28px;
  align-items:center;
  font-family:"Space Grotesk",sans-serif;
  font-weight:700;
  letter-spacing:2px;
  animation:marquee 22s linear infinite;
}

.marquee-track b{
  color:var(--yellow);
}

/* SECTIONS */

.section{
  padding:115px 8%;
}

.section-label{
  color:var(--pink);
  font-size:12px;
  font-weight:800;
  letter-spacing:2px;
}

.section-heading{
  margin:15px 0 45px;
}

.section-heading h2,
.about-grid h2{
  font-family:"Space Grotesk",sans-serif;
  font-size:clamp(38px,5vw,64px);
  line-height:1;
  letter-spacing:-3px;
}

.section-heading p{
  max-width:680px;
  margin-top:18px;
  color:var(--muted);
  line-height:1.7;
}

/* ABOUT */

.about{
  position:relative;
}

.about-grid{
  display:grid;
  grid-template-columns:.9fr 1.1fr;
  gap:80px;
  margin-top:35px;
}

.about-copy{
  color:var(--muted);
  line-height:1.8;
  font-size:16px;
}

.about-copy p+p{margin-top:18px}

.about-copy strong{color:var(--ink)}

.stat-row{
  display:flex;
  gap:35px;
  margin-top:35px;
  flex-wrap:wrap;
}

.stat-row div{
  display:flex;
  flex-direction:column;
}

.stat-row strong{
  font-family:"Space Grotesk",sans-serif;
  font-size:32px;
  color:var(--purple);
}

.stat-row span{
  font-size:12px;
  color:#777;
}

/* SKILLS */

.skills{
  background:linear-gradient(135deg,#fff,#f7f3ff);
}

.skills-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}

.skill-card{
  padding:27px;
  border-radius:25px;
  background:#ffffffc9;
  backdrop-filter:blur(10px);
  border:1px solid #ffffff;
  box-shadow:0 15px 40px #7452bd12;
  transition:.35s;
}

.skill-card:nth-child(2){transform:translateY(22px)}
.skill-card:nth-child(4){transform:translateY(15px)}
.skill-card:nth-child(5){transform:translateY(-5px)}

.skill-card:hover{
  transform:translateY(-9px) rotate(-1deg);
  box-shadow:0 22px 45px #7452bd25;
}

.skill-icon{
  width:48px;
  height:48px;
  display:grid;
  place-items:center;
  margin-bottom:18px;
  border-radius:15px;
  font-weight:800;
  background:linear-gradient(135deg,#ffe0ef,#e2dcff);
  color:var(--pink);
}

.skill-card h3{
  font-family:"Space Grotesk",sans-serif;
  font-size:21px;
}

.skill-card p{
  color:var(--muted);
  font-size:14px;
  line-height:1.6;
  margin:10px 0 18px;
}

.skill-line{
  height:6px;
  background:#eee8f3;
  border-radius:20px;
  overflow:hidden;
}

.skill-line i{
  display:block;
  width:var(--w);
  height:100%;
  border-radius:20px;
  background:linear-gradient(90deg,var(--pink),var(--purple),var(--blue));
}

/* PROJECTS */

.projects{
  background:#17152b;
  color:white;
  position:relative;
}

.projects .section-label{color:var(--yellow)}

.projects .section-heading p{color:#bcb7cc}

.project-feature{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:55px;
  align-items:center;
}

.project-visual{
  position:relative;
  min-height:390px;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  border-radius:32px;
  background:linear-gradient(145deg,#28233e,#17152b);
  border:1px solid #ffffff16;
  box-shadow:0 25px 60px #0005;
}

.project-glow{
  position:absolute;
  width:250px;
  height:250px;
  border-radius:50%;
  background:linear-gradient(135deg,var(--pink),var(--blue));
  filter:blur(55px);
  opacity:.5;
  animation:orbFloat 6s ease-in-out infinite;
}

.glove-illustration{
  position:relative;
  width:170px;
  height:190px;
  z-index:1;
}

.wrist{
  position:absolute;
  width:80px;
  height:90px;
  background:linear-gradient(135deg,#ff82bc,#a77aff);
  left:45px;
  bottom:0;
  border-radius:18px 18px 35px 35px;
  transform:rotate(-5deg);
  box-shadow:0 0 35px #ff65b477;
}

.finger{
  position:absolute;
  width:25px;
  border-radius:20px;
  background:linear-gradient(180deg,#ff9dcb,#8f7bff);
  box-shadow:0 0 20px #a477ff55;
}

.f1{height:105px;left:15px;top:40px;transform:rotate(-25deg)}
.f2{height:130px;left:45px;top:5px}
.f3{height:140px;left:75px;top:-5px}
.f4{height:120px;left:105px;top:15px;transform:rotate(8deg)}
.f5{height:75px;left:132px;top:75px;transform:rotate(40deg)}

.sensor-dot{
  position:absolute;
  width:10px;
  height:10px;
  border-radius:50%;
  background:var(--yellow);
  box-shadow:0 0 18px var(--yellow);
  z-index:2;
}

.d1{left:51px;top:70px}
.d2{left:82px;top:60px}
.d3{left:111px;top:82px}

.visual-label{
  position:absolute;
  bottom:22px;
  left:25px;
  font-size:10px;
  letter-spacing:1.5px;
  color:#bdb7d0;
}

.project-number{
  color:var(--yellow);
  font-size:11px;
  letter-spacing:2px;
  font-weight:800;
}

.project-info h3{
  font-family:"Space Grotesk",sans-serif;
  font-size:55px;
  margin:12px 0;
}

.project-info p{
  color:#c5bfd2;
  line-height:1.75;
  margin-bottom:15px;
}

.project-info strong{color:white}

.tags{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
  margin:22px 0;
}

.tags span{
  padding:7px 12px;
  border-radius:20px;
  background:#ffffff12;
  border:1px solid #ffffff1c;
  color:#eee;
  font-size:11px;
}

.text-link{
  color:var(--yellow);
  text-decoration:none;
  font-weight:700;
}

.mini-projects{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px;
  margin-top:25px;
}

.mini-project{
  display:flex;
  align-items:center;
  gap:20px;
  padding:22px;
  border-radius:20px;
  background:#ffffff09;
  border:1px solid #ffffff12;
  transition:.3s;
}

.mini-project:hover{
  background:#ffffff12;
  transform:translateY(-5px);
}

.mini-project>span{
  color:var(--pink);
  font-size:13px;
  font-weight:800;
}

.mini-project h3{font-size:17px}
.mini-project p{color:#aaa3b9;font-size:13px;margin-top:5px}
.mini-project b{margin-left:auto;color:var(--yellow)}

/* JOURNEY */

.timeline{
  position:relative;
  max-width:900px;
  margin:45px auto 0;
  padding-left:35px;
  border-left:2px dashed #d9cce5;
}

.timeline-item{
  position:relative;
  display:grid;
  grid-template-columns:120px 1fr;
  gap:25px;
  padding:0 0 55px 20px;
}

.timeline-dot{
  position:absolute;
  width:14px;
  height:14px;
  border-radius:50%;
  background:var(--pink);
  left:-43px;
  top:3px;
  border:4px solid var(--bg);
  box-shadow:0 0 0 4px #ff4fa333;
}

.timeline-date{
  font-size:11px;
  font-weight:800;
  color:var(--blue);
  letter-spacing:1px;
}

.timeline-item h3{
  font-family:"Space Grotesk",sans-serif;
  font-size:22px;
}

.timeline-item p{
  color:var(--muted);
  line-height:1.7;
  margin-top:7px;
}

/* ACHIEVEMENTS */

.achievement-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
  margin-top:40px;
}

.achievement-card{
  padding:32px;
  min-height:220px;
  border-radius:25px;
  background:white;
  border:1px solid var(--line);
  box-shadow:0 15px 40px #7452bd10;
  transition:.35s;
}

.achievement-card:nth-child(2){transform:translateY(20px)}
.achievement-card:hover{transform:translateY(-8px)}

.big-icon{
  display:block;
  font-size:35px;
  color:var(--pink);
  margin-bottom:30px;
}

.achievement-card h3{
  font-family:"Space Grotesk",sans-serif;
  font-size:21px;
}

.achievement-card p{
  color:var(--muted);
  line-height:1.6;
  margin-top:8px;
}

/* CONTACT */

.contact{
  background:linear-gradient(135deg,#fff7fc,#f0edff);
}

.contact-card{
  position:relative;
  overflow:hidden;
  padding:70px 30px;
  text-align:center;
  border-radius:35px;
  background:linear-gradient(135deg,#211a38,#4a3a8e);
  box-shadow:0 30px 70px #4a3a8e44;
}

.contact-card .section-label{
  color:var(--yellow);
}

.contact-card h2{
  position:relative;
  z-index:1;
  font-family:"Space Grotesk",sans-serif;
  font-size:clamp(42px,6vw,70px);
  line-height:1;
  margin:18px 0;
  color:white;
}

.contact-card>p{
  position:relative;
  z-index:1;
  color:#d4cee5;
  line-height:1.7;
}

.contact-orb{
  position:absolute;
  width:330px;
  height:330px;
  border-radius:50%;
  background:linear-gradient(135deg,var(--pink),var(--blue));
  filter:blur(70px);
  opacity:.3;
  top:-150px;
  right:-80px;
}

.contact-actions{
  position:relative;
  z-index:1;
  display:flex;
  justify-content:center;
  gap:12px;
  flex-wrap:wrap;
  margin-top:30px;
}

.dark{
  background:#ffffff12;
  border-color:#ffffff30;
  color:white!important;
}

/* FOOTER */

footer{
  display:flex;
  justify-content:space-between;
  gap:15px;
  padding:30px 0 0;
  color:#aaa3b8;
  font-size:12px;
}

/* ANIMATIONS */

@keyframes float{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-12px)}
}

@keyframes tagFloat{
  0%,100%{transform:translateY(0) rotate(0)}
  50%{transform:translateY(-12px) rotate(3deg)}
}

@keyframes orbFloat{
  0%,100%{transform:translate(0,0)}
  50%{transform:translate(25px,-25px)}
}

@keyframes marquee{
  from{transform:translateX(0)}
  to{transform:translateX(-50%)}
}

/* MOBILE */

@media(max-width:900px){

  .nav-links{display:none}
  .menu-btn{display:block}

  .nav-cta{display:none}

  .hero{
    grid-template-columns:1fr;
    padding-top:125px;
  }

  .hero-card{
    max-width:650px;
    width:100%;
    margin:auto;
  }

  .about-grid,
  .project-feature{
    grid-template-columns:1fr;
    gap:40px;
  }

  .skills-grid{
    grid-template-columns:1fr 1fr;
  }

  .skill-card:nth-child(2),
  .skill-card:nth-child(4),
  .skill-card:nth-child(5),
  .achievement-card:nth-child(2){
    transform:none;
  }

  .achievement-grid{
    grid-template-columns:1fr;
  }
}

@media(max-width:600px){

  .nav{
    left:3%;
    right:3%;
  }

  .section{
    padding:85px 6%;
  }

  .hero{
    padding:120px 6% 70px;
  }

  .hero h1{
    font-size:50px;
    letter-spacing:-3px;
  }

  .hero-copy{
    font-size:16px;
  }

  .skills-grid,
  .mini-projects{
    grid-template-columns:1fr;
  }

  .project-info h3{
    font-size:43px;
  }

  .timeline-item{
    grid-template-columns:1fr;
    gap:8px;
  }

  .timeline{
    padding-left:25px;
  }

  .timeline-dot{
    left:-33px;
  }

  .contact-card{
    padding:55px 20px;
  }

  footer{
    flex-direction:column;
    text-align:center;
  }

  .floating-tag{
    font-size:12px;
    padding:8px 12px;
  }

  .tag-one{right:-5px}
  .tag-two{left:-5px}
  .tag-three{right:-5px}
}
