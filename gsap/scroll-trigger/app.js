gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  markers: "true",
  start: "top 80%",
  end: "top 50%",
  trigger: ".box",
  onUpdate: (self) => console.log(self),
  //   onEnter: () => console.log("enter!"),
  //   onLeave: () => console.log("leave!"),
  //   onEnterBack: () => console.log("enterBack!"),
  //   onLeaveBack: () => console.log("leaveBack!"),
});
