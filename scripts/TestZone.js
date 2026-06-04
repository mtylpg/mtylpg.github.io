console.log('This would be the main JS file.');


 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(".scroll-letter", { 
    y: "-70vh", 
    stagger: {
      amount:.7,
      from:"end"
    },
    scrollTrigger: {
      trigger: '.work',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      },
    duration: 1 });
  // gsap code here!
 });

// document.addEventListener("DOMContentLoaded", (event) => {
//   gsap.to(".box", { x: 200 })
//   gsap.to('.box', {
//     y: 100,
//     stagger: 0.1 // 0.1 seconds between when each ".box" element starts animating
//   });
//   gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
//   gsap.to('.scroll-letter', {
//     // transform: 'translateY(-1000px)', 
//     y: 100, 
//     // rotation: -120,
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: '.work',
//         start: 'top bottom',
//         end: 'bottom top',
//         scrub: true
//       }
//     });
// });