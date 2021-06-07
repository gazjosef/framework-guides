// * The Object that is executing the current function

// * Method -> Object

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  // showTags() {
  //   this.tags.forEach(tag => {
  //     console.log(this.title, tag);
  //   });
  // },
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
    });
  }
};

video.showTags();

// * Function -> Global Object (window browser / global)

// function Video(title) {
//   this.title = title;
//   console.log(this);
// }

// const v = new Video("b");
