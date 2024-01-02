$(function(){
    $('#btn').click(function(e){
        e.preventDefault();
    })
})

$( "#autoWidth" ).lightSlider({ 
    autoWidth:true,
    gallery: false,
    loop: true, 
    slideMargin: 0,
    enableTouch: true,
    enableDrag: true, 
    keyPress: true,
    currentPagerPosition: 'middle',
    onSliderLoad: function() {
        $('#autoWidth').removeClass('cs-hidden');
    } 
});

$(function(){
    var loading = new TimelineMax();
    loading.fromTo('#loader p', 1.5, {
        autoAlpha:0
    },{
        autoAlpha:1,
        ease: Power1.easeInOut,
    })
    .to('#loader', 1.5, {
        yPercent:-100,
        ease: Power2.easeInOut,
    })
    .fromTo('.shape-ex1', {
        yPercent:-150,
    },{
        ease: Power1.easeInOut,
    },"-=5")
    .to('.shape-ex1', 1, {
        yPercent:0,
        ease: Power2.easeInOut,
    })
    .fromTo('#home h1', 0.5 ,{
        autoAlpha: 0,
    },{
        autoAlpha: 0.75,
        duration: 1
    })
    .fromTo('#home img', 0.7, {
        autoAlpha:0,
        y: 20,
    },{
        autoAlpha:1,
        y: 0,
        ease: Power1.easeInOut,
    })
    .fromTo('#home .introduce', 0.7, {
        autoAlpha:0,
        x: 30,
    },{
        autoAlpha:1,
        x: 0,
        ease: Power1.easeInOut,
    })
    .fromTo('.shape-ex3', 0 , {
        xPercent:150,
    },{
        ease: Power1.easeInOut,
    },"<0.2")
    .to('.shape-ex3', 1, {
        xPercent:0,
        ease: Power2.easeInOut,
    })
});

if(document.getElementById("status") != null){
    var idPost=document.getElementById("status").innerHTML;
}


document.onpageshow = function(event) {
    if (event.persisted) {
        document.location.reload()
    }
};


/*
gsap.registerPlugin(ScrollTrigger);

gsap.to("#aboutme h1", {
      x: 300,
      duration: 3,
      rotation: 360,
      scrollTrigger: {
        trigger: "#aboutme h1", //觸發得物件
        start: "top top", // (物件開始位置, 卷軸開始位置) top center bottom px
        end: "+=1000", //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
        pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
        scrub: true, // 物件動畫根據卷軸捲動程度跑
        toggleClass: "active", // 增加移除的class，class名稱須為字串
        markers: true // 顯示標記
    }
})

function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {
        x: x,
        y: y,
        autoAlpha: 0
    }, {
        duration: 1.25, 
        x: 0,
        y: 0, 
        autoAlpha: 1, 
        ease: "expo", 
        overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {
        autoAlpha: 0
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });
  */