export default ({ app }, inject ) => {

  function scrollDetect(){
    let lastScroll = 0;
    window.onscroll = () => {

      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
      if (currentScroll > 0 && lastScroll <= currentScroll){
          lastScroll = currentScroll;
          this.direction = false;
          // document.getElementById("scrollLoc").innerHTML = "Scrolling DOWN";
      } else {
        lastScroll = currentScroll;
        this.direction = true
        // document.getElementById("scrollLoc").innerHTML = "Scrolling UP";
      }
    }
  };

  inject('scrollDetect', scrollDetect);
}
