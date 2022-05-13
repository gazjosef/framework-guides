gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  x: 1000,
  duration: 8,
  scrollTrigger: {
    trigger: ".square",
    start: "top 60%",
    end: "top 40%",
    toggleActions: "restart pause resume complete",
    // ^ OnEnter, onLeave, OnEnterBack, onLeaveBack
    // play pause reverse restart reset complete none
    markers: {
      startColor: "purple",
      endColor: "fuchsia",
      fontSize: "3rem",
    },
  },
});
