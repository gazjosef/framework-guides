gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  x: 1000,
  duration: 8,
  scrollTrigger: {
    trigger: ".square",
    start: "top 80%",
    end: "top 30%",
    scrub: 4,
    toggleActions: "restart none none none",
    // ^ OnEnter, onLeave, OnEnterBack, onLeaveBack
    // play pause reverse restart reset complete none
    markers: {
      startColor: "purple",
      endColor: "fuchsia",
      fontSize: "3rem",
    },
  },
});
