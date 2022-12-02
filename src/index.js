//Robinson

//Mardelys

//Bryan

gsap.config({trialWarn: false});

let mm = gsap.matchMedia();

mm.add({
  isMobile: "(max-width: 912px) and (prefers-reduced-motion: no-preference)",
  isDesktop: "(min-width: 913px) and (prefers-reduced-motion: no-preference)",
}, (context) => {
  let {isMobile, isDesktop} = context.conditions;

	gsap.from('.saw', {
		//left: 0,
		duration: 5,
		delay: 2,
	});

	gsap.to('.saw', {
	rotation: 360,
	ease: 'none',
	repeat: -1,
	duration: 1,
	});

	gsap.from('.saw-b', {
		duration: 5,
		delay: 6.5,
		opacity: 0,
	});

	gsap.to('.saw-b', {
		rotation: 360,
		ease: 'none',
		repeat: -1,
		duration: 1,
	});

	gsap.to('.bodysuit', {
		ease: 'none',
		y: isMobile ? 500 : 250,
		delay: 4,
		duration: 2,
	});

	gsap.to('.body-right', {
		rotation: 90,
		y: isMobile ? 500 : 500,
		delay: 6,
		duration: 8,
	});

	gsap.to('.body-left', {
		rotation: -90,
		y: isMobile ? 500 : 400,
		delay: 6,
		duration: 8,
	});

	gsap.from('.b1',{
		scale: 0,
		duration: 3,
		delay: 6,
	})

	gsap.to('.b1', {
		duration: 3,
		scale: 1,
		delay: 6,
		y: isMobile ? 50 : 250,
		x: isMobile ? 150 : 390,
	});
		
	gsap.from('.b2',{
		scale: 0,
		duration: 3,
		delay: 6,
	})

	gsap.to('.b2', {
		duration: 3,
		scale: 1,
		delay: 6,
		y: isMobile ? 50 : 250,
		x: isMobile ? -150 : -370, 
	});

	gsap.from('.b3',{
		scale: 0,
		duration: 3,
		delay: 6,
	});

	gsap.to('.b3', {
		duration: 3,
		scale: 1,
		delay: 6,
		rotation: -30,
		y: isMobile ? 150 : 400,
	});

	gsap.from('.b4',{
		opacity: 0,
		scale: 0,
		duration: 2,
		delay: 6,
		y:100,
		x:-70,
	})

	gsap.to('.b4', {
		ease: 'none',
		delay: 6.4,
		duration: 2,
		opacity: 1,
	});

	gsap.to('.lung-l', {
		ease: 'none',
		x: isMobile ? -200 : -365,
		y: isMobile ? 150 : 300,
		rotation: 245,
		delay: 6,
		duration: 6,
		opacity: 1,
	});

	gsap.to('.lung-r', {
		ease: 'none',
		x: isMobile ? 200 : 350,
		y: isMobile ? 150 : 350,
		rotation: 255,
		delay: 6,
		duration: 6,
		opacity: 1,
	});

	gsap.to('.brain-l', {
		ease: 'none',
		x: isMobile ? -100 : -350,
		y: isMobile ? 250 : -350,
		rotation: 255,
		delay: 6.4,
		duration: 6,
		opacity: 1,
	});

	gsap.to('.brain-r', {
		ease: 'none',
		x: isMobile ? 100 : 470,
		y: isMobile ? 250 : 450,
		rotation: 260,
		delay: 6.1,
		duration: 6,
		opacity: 1,
	});
});


//Angela

//Andres