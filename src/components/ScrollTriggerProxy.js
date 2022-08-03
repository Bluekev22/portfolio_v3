// To use gsap with locomotive scroll, we have to use scroller proxy provided by gsap
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { gsap } from "gsap"
gsap.registerPlugin(ScrollTrigger)

const ScrollTriggerProxy = () => {
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el;
      console.log(element.style)
      scroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: element.style.transform ? "transform" : "fixed",
      });
    }

    return () => {
      ScrollTrigger.addEventListener("refresh", () => scroll?.update());
      ScrollTrigger.refresh();
    };
  }, [scroll]);

  return null;
};


export default ScrollTriggerProxy;
