function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./img0001.png
     ./img0002.png
     ./img0003.png
     ./img0004.png
     ./img0005.png
     ./img0006.png
     ./img0007.png
     ./img0008.png
     ./img0009.png
     ./img0010.png
     ./img0011.png
     ./img0012.png
     ./img0013.png
     ./img0014.png
     ./img0015.png
     ./img0016.png
     ./img0017.png
     ./img0018.png
     ./img0019.png
     ./img0020.png
     ./img0021.png
     ./img0022.png
     ./img0023.png
     ./img0024.png
     ./img0025.png
     ./img0026.png
     ./img0027.png
     ./img0028.png
     ./img0029.png
     ./img0030.png
     ./img0031.png
     ./img0032.png
     ./img0033.png
     ./img0034.png
     ./img0035.png
     ./img0036.png
     ./img0037.png
     ./img0038.png
     ./img0039.png
     ./img0040.png
     ./img0041.png
     ./img0042.png
     ./img0043.png
     ./img0044.png
     ./img0045.png
     ./img0046.png
     ./img0047.png
     ./img0048.png
     ./img0049.png
     ./img0050.png
     ./img0051.png
     ./img0052.png
     ./img0053.png
     ./img0054.png
     ./img0055.png
     ./img0056.png
     ./img0057.png
     ./img0058.png
     ./img0059.png
     ./img0060.png
     ./img0061.png
     ./img0062.png
     ./img0063.png
     ./img0064.png
     ./img0065.png
     ./img0066.png
     ./img0067.png
     ./img0068.png
     ./img0069.png
     ./img0070.png
     ./img0071.png
     ./img0072.png
     ./img0073.png
     ./img0074.png
     ./img0075.png
     ./img0076.png
     ./img0077.png
     ./img0078.png
     ./img0079.png
     ./img0080.png
     ./img0081.png
     ./img0082.png
     ./img0083.png
     ./img0084.png
     ./img0085.png
     ./img0086.png
     ./img0087.png
     ./img0088.png
     ./img0089.png
     ./img0090.png
     ./img0091.png
     ./img0092.png
     ./img0093.png
     ./img0094.png
     ./img0095.png
     ./img0096.png
     ./img0097.png
     ./img0098.png
     ./img0099.png
     ./img0100.png
     ./img0101.png
     ./img0102.png
     ./img0103.png
     ./img0104.png
     ./img0105.png
     ./img0106.png
     ./img0107.png
     ./img0108.png
     ./img0109.png
     ./img0110.png
     ./img0111.png
     ./img0112.png
     ./img0113.png
     ./img0114.png
     ./img0115.png
     ./img0116.png
     ./img0117.png
     ./img0118.png
     ./img0119.png
     ./img0120.png
     ./img0121.png
     ./img0122.png
     ./img0123.png
     ./img0124.png
     ./img0125.png
     ./img0126.png
     ./img0127.png
     ./img0128.png
     ./img0129.png
     ./img0130.png
     ./img0131.png
     ./img0132.png
     ./img0133.png
     ./img0134.png
     ./img0135.png
     ./img0136.png
     ./img0137.png
     ./img0138.png
     ./img0139.png
     ./img0140.png
     ./img0141.png
     ./img0142.png
     ./img0143.png
     ./img0144.png
     ./img0145.png
     ./img0146.png
     ./img0147.png
     ./img0148.png
     ./img0149.png
     ./img0150.png
     ./img0151.png
     ./img0152.png
     ./img0153.png
     ./img0154.png
     ./img0155.png
     ./img0156.png
     ./img0157.png
     ./img0158.png
     ./img0159.png
     ./img0160.png
     ./img0161.png
     ./img0162.png
     ./img0163.png
     ./img0164.png
     ./img0165.png
     ./img0166.png
     ./img0167.png
     ./img0168.png
     ./img0169.png
     ./img0170.png
     ./img0171.png
     ./img0172.png
     ./img0173.png
     ./img0174.png
     ./img0175.png
     ./img0176.png
     ./img0177.png
     ./img0178.png
     ./img0179.png
     ./img0180.png
     ./img0181.png
     ./img0182.png
     ./img0183.png
     ./img0184.png
     ./img0185.png
     ./img0186.png
     ./img0187.png
     ./img0188.png
     ./img0189.png
     ./img0190.png
     ./img0191.png
     ./img0192.png
     ./img0193.png
     ./img0194.png
     ./img0195.png
     ./img0196.png
     ./img0197.png
     ./img0198.png
     ./img0199.png
     ./img0200.png
     ./img0201.png
     ./img0202.png
     ./img0203.png
     ./img0204.png
     ./img0205.png
     ./img0206.png
     ./img0207.png
     ./img0208.png
     ./img0209.png
     ./img0210.png
     ./img0211.png
     ./img0212.png
     ./img0213.png
     ./img0214.png
     ./img0215.png
     ./img0216.png
     ./img0217.png
     ./img0218.png
     ./img0219.png
     ./img0220.png
     ./img0221.png
     ./img0222.png
     ./img0223.png
     ./img0224.png
     ./img0225.png
     ./img0226.png
     ./img0227.png
     ./img0228.png
     ./img0229.png
     ./img0230.png
     ./img0231.png
     ./img0232.png
     ./img0233.png
     ./img0234.png
     ./img0235.png
     ./img0236.png
     ./img0237.png
     ./img0238.png
     ./img0239.png
     ./img0240.png
     ./img0241.png
     ./img0242.png
     ./img0243.png
     ./img0244.png
     ./img0245.png
     ./img0246.png
     ./img0247.png
     ./img0248.png
     ./img0249.png
     ./img0250.png
     ./img0251.png
     ./img0252.png
     ./img0253.png
     ./img0254.png
     ./img0255.png
     ./img0256.png
     ./img0257.png
     ./img0258.png
     ./img0259.png
     ./img0260.png
     ./img0261.png
     ./img0262.png
     ./img0263.png
     ./img0264.png
     ./img0265.png
     ./img0266.png
     ./img0267.png
     ./img0268.png
     ./img0269.png
     ./img0270.png
     ./img0271.png
     ./img0272.png
     ./img0273.png
     ./img0274.png
     ./img0275.png
     ./img0276.png
     ./img0277.png
     ./img0278.png
     ./img0279.png
     ./img0280.png
     ./img0281.png
     ./img0282.png
     ./img0283.png
     ./img0284.png
     ./img0285.png
     ./img0286.png
     ./img0287.png
     ./img0288.png
     ./img0289.png
     ./img0290.png
     ./img0291.png
     ./img0292.png
     ./img0293.png
     ./img0294.png
     ./img0295.png
     ./img0296.png
     ./img0297.png
     ./img0298.png
     ./img0299.png
     ./img0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 142;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})