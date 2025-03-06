console.log('This would be the main JS file.');


// stars = document.getElementById("stars");
// starCanvas = document.getElementsByClassName("stars-container")[0];
// starCanvasArea = starCanvas.getBoundingClientRect();
// headerContainer = document.getElementsByClassName("line-offset")[0];



document.addEventListener("DOMContentLoaded", (event) => {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 800px)", () => {
    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
    gsap.to('.animated--bg', {
      transform: 'translateY(-35vh)', 
      // rotation: -120,
      scrollTrigger: {
        trigger: 'h2',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
    });
  });
});