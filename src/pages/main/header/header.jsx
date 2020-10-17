import React from 'react';
import './header.css';



function Header() {
  return <React.Fragment> 

<div class="header">


<div class="inner-header flex">


<div class='for-p'>We Are Getting Married

<div class='for-h1'>Gustiani & Deni</div>

31 October 2020</div>

</div>

<div>

<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g class="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(103, 156, 136,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(131, 178, 162,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(82, 134, 112,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(82, 134, 112)" />
</g>
</svg>

</div>

</div>


  </React.Fragment>
}

export default Header;