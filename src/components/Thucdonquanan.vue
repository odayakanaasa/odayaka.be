<template>
  <main id="caseThucdonquanan" class="caseStudy">

    <CaseHero>
      <ul slot='headerRole'>
        <li><h5>Vai trò</h5></li>
        <li><h5>Người thiết kế</h5></li>
      </ul>
      <ul slot='headerScope'>
        <li><h5>Trong phạm vi</h5></li>
        <li><h5>Thiết kế sản phẩm</h5></li>
        <li><h5>Chỉ đạo hướng thiết kế, thương hiệu</h5></li>
        <li><h5>Hoạt họa, Minh họa</h5></li>
        <li><h5>Sáng tạo mẫu</h5></li>
      </ul>
      <ul slot='headerDeliverables'>
        <li><h5>Ý tưởng từ</h5></li>
        <li><h5>Hình ảnh cho trước</h5></li>
        <li><h5>Japanese Restaurant</h5></li>
        <li><h5>Lễ hội</h5></li>
      </ul>
      <ul slot='headerDuration'>
        <li><h5>Thời gian hoàn thành</h5></li>
        <li><h5>2 tuần</h5></li>
      </ul>
      <h3 slot='headerTitle'>Menu thực đơn quán ăn</h3>
      <ul slot='headerChallenges'>
        <li><h5>Yêu cầu</h5></li>
        <li><div><span>1</span><p>Thiết kế bản menu đặc biệt, vừa có nét cổ xưa, hiện đại vẫn làm nổi bật món ăn.</p></div></li>
        <li><div><span>2</span><p>Các hình ảnh và giá cả, tên món ăn phải được làm nổi bật</p></div></li>
        <li><div><span>3</span><p>Làm thu hút những món ăn ruột của quán.</p></div></li>
      </ul>
      <div slot='headerPic' class="h-pic"></div>
    </CaseHero>

    <article>
      Odayaka bắt đầu đảm nhận dự án phác họa lại menu mới dành cho quán ăn của Trà Sữa Chip Chip, Phú Quốc. Thông qua cuộc trò chuyện về việc phát triển quán do lượng khách đông đảo hơn, nên đã nhập đa dạng nhiều nguyên liệu để làm đa dạng lựa chọn món ăn cho khách hàng, thông qua Phan Huỳnh Nga, chủ quán Trà Sữa, cung cấp hình ảnh và danh sách món ăn, Odayaka bắt đầu bước vào quá trình phác họa hình thành bản nháp xem trước, rất may mắn là bên quán ăn họ rất dễ dàng chấp nhận mọi bản thiết kế mà không đòi hỏi phức tạp nên Odayaka có thể tự nhiên thiết kế mẫu theo ý muốn của mình.
    </article>

    <Card class="light">
      <h3 slot='cardTitle'>Tranh<br />treo wall</h3>
      <div slot='cardContent'>
        <p>Một vài hình ảnh sản phẩm thiết kế để treo tường cho quán Trà Sữa, lấy ý tưởng từ anime Food War của Nhật Bản.</p>
      </div>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item tablet"><img src='../assets/a5.jpg' alt="Tranh treo 1" width="1280" height="960"/></figure>
        <figure class="item tablet"><img src='../assets/a6.jpg' alt="Tranh treo 2" width="1280" height="960"/></figure>
	<figure class="item tablet"><img src='../assets/a6-1.jpg' alt="Tranh treo 3" width="1280" height="960"/></figure>
	<figure class="item tablet"><img src='../assets/a6-2.jpg' alt="Tranh treo 4" width="1280" height="960"/></figure>
      </Flickity>
    </Card>

    <article>
      The next step was to create a brand identity for Itondo. Between its name which translates to a round painting and the AR module, I had plenty enough to work with. For the app icon/logotype, I went with a round camera iris with brush strokes in place of blades. I knew from the start that I want the interface to be simple in form and for that to work I needed a dedicated typeface. After some trial and error, I’ve chosen <a href="http://ffmark.com"><span class="highlighter">FF Mark</span></a>, a neo-grotesque with wide proportions and a warmer tone than other geometric sans serifs. Paired with the icon it gave me a perfect read on where to go further with the design, and that was round shapes, restrained use of warm tones and unrestrained white space. Now for the last piece of the puzzle, I introduced watercolors, the single detail that would complete the brand.
    </article>

    <Card class="light">
      <h3 slot='cardTitle'>Brand</h3>
      <div slot='cardContent'>
        <p>I’ve created a number of illustrations to accompany the Itondo onboarding process. I wanted them to be an extension of the interface and not to be confused with art, hence the simple blocky appearance and warm tones. The magenta colour was a choice of the client and I’ve grown to really like it. I feel like for this design any bold color could work.</p>
      </div>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item picture"><img src='../assets/a8.jpg' alt="Illustration" width="1160" height="1024"/></figure>
        <figure class="item picture"><img src='../assets/a9.jpg' alt="App Icon" width="1160" height="1024"/></figure>
        <figure class="item picture"><img src='../assets/a10.jpg' alt="Colour and type" width="1160" height="1024"/></figure>
      </Flickity>
    </Card>

    <article>
      Having a working AR module and visual identity in place, I could proceed to design the rest of the app. My idea was to create a blank canvas to showcase the paintings – once you have great content you don’t really need to compensate with the UI. Still, I wanted to inject some character into the UI and that’s where the brand elements like watercolors, typography and creative use of animation came into play. I’m super proud of the result, which balances the modernist simplicity you’d find in art galleries with some offbeat details more common to modern apps. We’ve also convinced the client to pursue an iPhone version, providing them with an exact timeframe, cost and making a strong case for its wide adoption that could help tap into a broader market. For the iPhone app to work all I had to do really was to transition from collection to table based layouts and fine tune some details.
    </article>

    <Card class="light">
      <h3 slot='cardTitle'>Design</h3>
      <div slot='cardContent'>
        <p>The interface uses standard iOS components like popovers, tab bars, and navigation controllers, only customized to appear airier. I’ve chosen to transition to a dark lightroom for viewing individual paintings so that art buyers could get a better feeling of the colors and details on screen. To facilitate art discovery, I’ve created a dedicated space that lists paintings not only by gallery and artists but also emotion, color or size. I also love how the artist profiles came out — we even built our own framework that samples the colors in profile picture and mixes them with a random watercolor below.</p>
      </div>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item tablet"><img src='../assets/a1.jpg' alt="Itondo Collection View" width="1280" height="960"/></figure>
        <figure class="item portrait"><img src='../assets/a2.jpg' alt="Itondo Artist View" width="960" height="1280"/></figure>
        <figure class="item tablet"><img src='../assets/a4.jpg' alt="Itondo Search View" width="1280" height="960"/></figure>
        <figure class="item tablet"><img src='../assets/a3.jpg' alt="Itondo Art View" width="1280" height="960"/></figure>
        <figure class="item phone"><img src='../assets/a7.jpg' alt="Itondo Welcome View" width="750" height="1334"/></figure>
      </Flickity>
    </Card>

    <article>
      For this project, I’ve skipped the use of wireframes and went straight ahead to prototyping the real thing. The layout was simple enough and I knew precisely what I want with the design. What I didn’t know was how to connect the different pieces of the interface together. That’s where <a href="https://framer.com" target="_blank"><span class="highlighter">Framer</span></a>, a code based prototyping tool, helped me figure out the connections – the delightful micro-interactions that tied it all together. I didn’t foresee animation playing such a huge role in establishing the look and feel of the app but after prototyping my ideas, testing and showing them around we all felt that animation was pivotal and worth the added effort.
    </article>

    <Card class="light">
      <h3 slot='cardTitle'>Prototype</h3>
      <div slot='cardContent'>
        <p>I believe motion has a certain storytelling quality and done properly it can give you a sense of spatial awareness and guide you through the interface. I’ve introduced animation at a very early stage of design and it has influenced the way the entire app is laid out. In a way prototyping Itondo gave me insight into how the app is used by real people and the confidence to proceed with ideas that otherwise I’d find too frivolous or against established patterns.</p>
      </div>
      <div slot='cardStatic' class='gallery static'>
        <figure class='item tablet-video'><video width="682" height="512" loop autoplay playsinline><source src='../assets/itondo.mp4' type="video/mp4" /></video></figure>
      </div>
    </Card>

    <LinkGroup>
      <router-link to="/" slot='backLink' class='button'><span class="highlighter">Go back</span></router-link>
      <a href="https://itunes.apple.com/au/app/itondo/id1004978847?mt=8" slot='storeLink' class='button' target="_blank"><span class="highlighter">Get it on the App Store</span><svg width="9" height="14" viewBox="0 0 9 14"><path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/></svg></a>
      <router-link to="/menutrasua/" slot='nextLink' class='button'><span class="highlighter">Next</span><svg width="9" height="14" viewBox="0 0 9 14"><path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/></svg></router-link>
    </LinkGroup>

  </main>
</template>

<script>
import CaseHero from '@/components/CaseHero.vue'
import Card from '@/components/Card.vue'
import LinkGroup from '@/components/LinkGroup.vue'
import Credits from '@/components/Credits.vue'
import Flickity from '@/components/Flickity.vue'

export default {
  mounted () {
    var navBar = document.getElementById('navigationBar')
    navBar.classList.remove("expanded")
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
    CaseHero,
    Card,
    LinkGroup,
    Credits,
    Flickity
  }
}
</script>

<style lang="scss" scoped>

@import
'../scss/variables';

.h-right {
	background-image: linear-gradient(to top, #FDCAF1 0%, #E6DEE9 100%);
}
.h-pic {
	width: 1380px; height: 750px;
	background: url('../assets/thucdonquanan-heo.jpg') no-repeat 0 0;
	background-size: contain;
}
.gallery::before {
  background-color: hsl(315, 90%, 90%);
  background-image: linear-gradient(340deg, hsl(315, 90%, 90%) 0%, hsl(280, 20%, 90%) 100%);
}
.tablet-video, video {
	width: 682px; height: 512px;
}
.picture {
	width: 640px; height: 572px;
	padding: 30px;
	background-color: white;
}
.item {
	box-shadow: 0 15px 60px hsla(320,50%,40%, 0.35);
}

@import
'../scss/cases';

@media (max-width: 680px) {
  .tablet-video, video {
		width: 512px; height: 384px;
	}
  .picture {
		width: 580px; height: 512px;
		padding: 0;
	}
}
@media (max-width: 560px) {
	.h-pic {
		margin-left: -18.5rem;
	}
	.tablet-video, video {
		width: 480px; height: 360px;
	}
	.picture {
		width: 464px; height: 410px;
	}
}
@media (max-width: 500px) {
	.tablet-video, video {
		width: 416px; height: 312px;
	}
	.picture {
		width: 406px; height: 358px;
	}
}
@media (max-width: 420px) {
	.tablet-video, video {
		width: 320px; height: 240px;
	}
	.picture {
		width: 290px; height: 256px;
	}
}
@media (max-width: 320px) {
	.tablet-video, video {
		width: 288px; height: 216px;
	}
}

</style>
