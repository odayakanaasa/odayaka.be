<template>
  <main id="home">

    <Hero/>

    <Card id="thucdonquanan" class="light">
      <h3 slot='cardTitle'>Menu thực đơn quán ăn</h3>
      <div slot='cardContent'>
        <p><span>2017-2018</span>Menu được làm lại theo đơn đặt hàng của Trà Sữa Chip Chip Phú Quốc, với danh mục 45 món ăn mới của quán, Phối theo phong cách tự do không theo khuôn khổ nào, thỏa mãn nhu cầu đẹp, bắt mắt, và trọng tâm.</p>
        <div class="buttons">
          <router-link to="/thucdonquanan/" class='button'><span class="highlighter">Case study</span><svg width="9" height="14" viewBox="0 0 9 14"><path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/></svg></router-link>
          <a href="mailto:xuantiep.pham@gmail.com" class='button' target="_blank"><span class="highlighter">Get file .PSD Photoshop</span><svg width="9" height="14" viewBox="0 0 9 14"><path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/></svg></a>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>Art Direction</h4></li>
        <li><h4>Branding</h4></li>
        <li><h4>Product Design</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Illustration</h4></li>
        <li><h4>Icons</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item tablet"><img src='../assets/a1.jpg' alt="Thực đơn của quán ăn view" width="1280" height="960"/></figure>
        <figure class="item portrait"><img src='../assets/a2.jpg' alt="Thực đơn của quán ăn view" width="1280" height="960"/></figure>
      </Flickity>
    </Card>

    <Card id="mirage" class="dark">
      <h3 slot='cardTitle'>Menu Trà Sữa</h3>
      <div slot='cardContent'>
        <p><span>2017</span>Trong một lần tình cờ vì công việc gia đình, có quen biết chủ quán Trà Sữa ở Phú Quốc, nên nhân dịp này mình cũng triển khai làm một menu tặng để làm quen luôn, đây là bản menu thiết kế hồn nhiên vô tư nhất, vì sau 5 năm không làm thiết kế mà bắt đầu làm trở lại.</p>
        <div class="buttons">
          <router-link to="/menutrasua/" class='button'><span class="highlighter">Case study</span><svg width="9" height="14" viewBox="0 0 9 14"><path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/></svg></router-link>
	  <a href="mailto:xuantiep.pham@gmail.com" class='button' target="_blank"><span class="highlighter">Bản thiết kế đã cũ</span><svg width="9" height="14" viewBox="0 0 9 14"><path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/></svg></a>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>Art Direction</h4></li>
        <li><h4>Branding</h4></li>
        <li><h4>Product Design</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Icons</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item phone"><img src='../assets/b1.jpg' alt="Mirage Now Playing View" width="750" height="1334"/></figure>
        <figure class="item tablet"><img src='../assets/b2.jpg' alt="Mirage Collection View" width="1280" height="960"/></figure>
        <figure class="item phone"><img src='../assets/b3.jpg' alt="Mirage Album View" width="750" height="1334"/></figure>
      </Flickity>
    </Card>

    <Card id="explain" class="light">
      <h3 slot='cardTitle'>Love</h3>
      <div slot='cardContent'>
        <p><span>2016&mdash;2017</span>Những thiết kế để tưởng nhớ những người phụ nữ đã đi qua trong cuộc đời, chia ly mãi mãi trong bầu trời xanh.</p>
        <div class="buttons">
          <a href="https://itunes.apple.com/app/id1020339980?mt=8" target="_blank" class="button"><span class="highlighter">Get it on the App Store</span><svg width="9" height="14" viewBox="0 0 9 14">
          <path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/>
          </svg></a>
          <a href="https://play.google.com/store/apps/details?id=com.explaineverything.explaineverything" target="_blank" class="button"><span class="highlighter">Get it on Google Play</span><svg width="9" height="14" viewBox="0 0 9 14">
          <path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/>
          </svg></a>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>Personal Design</h4></li>
        <li><h4>Love Design</h4></li>
        <li><h4>Yêu</h4></li>
        <li><h4>Hoạt Họa</h4></li>
        <li><h4>Minh họa</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item tablet"><img src='../assets/c2.jpg' alt="Explain Everything Collection View" width="1280" height="960"/></figure>
        <figure class="item phone"><img src='../assets/c3.jpg' alt="Explain Everything iPhone" width="750" height="1334"/></figure>
        <figure class="item tablet"><img src='../assets/c1.jpg' alt="Explain Everything Art View" width="1280" height="960"/></figure>
	<figure class="item tablet"><img src='../assets/c0-1.jpg' alt="Explain Everything Art View" width="1280" height="960"/></figure>
	<figure class="item tablet"><img src='../assets/c0-2.jpg' alt="Explain Everything Art View" width="1280" height="960"/></figure>
	<figure class="item tablet"><img src='../assets/c0-3.jpg' alt="Explain Everything Art View" width="1280" height="960"/></figure>
      </Flickity>
    </Card>

    <Card id="juice" class="dark">
      <h3 slot='cardTitle'>New Year</h3>
      <div slot='cardContent'>
        <p><span>2015</span>Bản thiết kế dành tặng cho bà dì nhân dịp tết bán gà ta, vịt xiêm, bánh trưng, bánh tét. Trong giai đoạn này mình thiết kế cực kỳ phức tạp nên không hề nhớ rõ cấu trúc của nó nữa.</p>
      </div>
      <ul slot='cardList'>
        <li><h4>UI Design</h4></li>
				<li><h4>Interaction Design</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Animation</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item tablet"><img src='../assets/e1.jpg' alt="Tết" width="1280" height="960"/></figure>
        <figure class="item phone"><img src='../assets/e2.jpg' alt="Juice Activity View" width="750" height="1334"/></figure>
        <figure class="item phone"><img src='../assets/e3.jpg' alt="Juice Distance View" width="750" height="1334"/></figure>
      </Flickity>
    </Card>

    <Card id="mosaic" class="light">
      <h3 slot='cardTitle'>Mosaic</h3>
      <div slot='cardContent'>
        <p><span>2016&mdash;Present</span>Mosaic is an app we’ve made with a friend for creating pixel art on the iPhone and iPad. It has just the right tools and limitations needed to easily draw artworks or use the camera and turn photos into your canvas. Mosaic also allows for easy printing and sharing and nicely integrates with messaging apps turning the keyboard into a drawing canvas.</p>
      </div>
      <ul slot='cardList'>
        <li><h4>Art Direction</h4></li>
        <li><h4>Product Design</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Brand</h4></li>
        <li><h4>Animation</h4></li>
        <li><h4>Icons</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item phone"><img src='../assets/d2.jpg' alt="Mosaic Welcome Screen" width="750" height="1334"/></figure>
        <figure class="item tablet"><img src='../assets/d1.jpg' alt="Mosaic Art View" width="1280" height="960"/></figure>
        <figure class="item phone"><img src='../assets/d3.jpg' alt="Mosaic Collection View" width="750" height="1334"/></figure>
      </Flickity>
    </Card>

		<Card id="opera" class="light">
      <h3 slot='cardTitle'>Báo cáo</h3>
      <div slot='cardContent'>
        <p><span>2011&mdash;2012</span>Bản thiết kế mẫu báo cáo tài chính của Phạm Xuân Tiếp và em gái Nhâm Thị Thanh Lam.</p>
				<div class="buttons">
          <a href="http://www.opera.com" target="_blank" class="button"><span class="highlighter">Download Opera</span><svg width="9" height="14" viewBox="0 0 9 14">
          <path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/>
          </svg></a>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>Product Design</h4></li>
        <li><h4>Prototyping</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item desktop"><img src='../assets/f1.jpg' alt="Opera Browser" width="2048" height="1440"/></figure>
        <figure class="item desktop"><img src='../assets/f2.jpg' alt="Messenger Panel" width="2048" height="1440"/></figure>
        <figure class="item desktop"><img src='../assets/f3.jpg' alt="Speed Dial" width="2048" height="1440"/></figure>
      </Flickity>
    </Card>

  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Card from '@/components/Card.vue'
import Flickity from '@/components/Flickity.vue'

export default {
  mounted () {
    var navBar = document.getElementById('navigationBar');
    navBar.className += " expanded";
  },
  data () {
    return {
      flickityOptions: {
        freeScroll: true,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: false,
        selectedAttraction: 0.032,
        friction: 0.28
      }
    }
  },
  components: {
    Hero,
    Card,
    Flickity
  },
}
</script>

<style lang="scss" scoped>

@import
'../scss/variables';

.content p span {
  color: $yellow;
  margin-right: 1rem;
}
.buttons {
	margin-top: 2rem;
	display: flex;
	justify-content: flex-start;
}
ul {
	max-width: 20vw;
	font-size: 0;
}

#itondo .gallery::before {
  background-color: hsl(315, 90%, 90%);
  background-image: linear-gradient(340deg, hsl(315, 90%, 90%) 0%, hsl(280, 20%, 90%) 100%);
}
#itondo .item {
	box-shadow: 0 15px 60px hsla(320,50%,40%, 0.35);
}

#mirage .gallery::before {
  background-color: hsl(190,55%,80%);
  background-image: linear-gradient(340deg, hsl(200,75%,70%) 0%, hsl(180,55%,80%) 100%);
}
#mirage .item {
  box-shadow: 0 15px 60px hsla(190,70%,0%, 0.4);
}

#explain .gallery::before {
  background-color: hsl(220, 40%, 70%);
  background-image: linear-gradient(5deg, hsl(220, 40%, 70%) 0%, hsl(145, 25%, 90%) 100%);
}
#explain .item {
  box-shadow: 0 15px 60px hsla(220,60%,30%, 0.35);
}
#explain .content h3 {
  margin-left: 8%;
  width: 17%;
  min-width: 232px;
}

#mosaic .gallery::before {
  background-color: hsl(320,85%,80%);
  background-image: linear-gradient(340deg, hsl(320,85%,80%) 0%, hsl(230,45%,85%) 100%);
}
#mosaic .item {
  box-shadow: 0 15px 60px hsla(300,40%,30%, 0.35);
}

#juice .gallery::before {
  background-color: hsl(120,80%,75%);
  background-image: linear-gradient(340deg, hsl(120,80%,75%) 0%, hsl(65,95%,65%) 100%);
}
#juice .item {
  box-shadow: 0 15px 60px hsla(150,70%,0%, 0.4);
}

#opera .gallery::before {
  background-color: hsl(355,90%,75%);
  background-image: linear-gradient(340deg, hsl(335,90%,75%) 0%, hsl(15,80%,85%));
}
#opera .item {
  box-shadow: 0 15px 60px hsla(355,70%,30%, 0.4);
}

#juice p, #mosaic p {
  margin-bottom: 3vh;
}

@media (min-width: 1600px) {
	#explain .content h3 {
		margin-left: 10%;
		width: 15%;
	}
}
@media (max-width: 960px) {
  #explain .content h3 {
		margin-left: 0;
    width: 100%;
	}
  ul {
		margin: 1.5rem 0 1rem 0;
		max-width: 100%;
	}
	ul li {
		display: inline-block;
		margin-right: 2.5vw;
	}
}
@media (max-width: 560px) {
	.buttons {
		flex-direction: column;
	}
}
</style>
