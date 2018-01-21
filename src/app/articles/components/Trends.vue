<template>
  <v-card class="br2 pa4">
    <div>
      <h4 class="tags-title fw4 dib v-mid mv0">Latest trends</h4>
    </div>
    <ul class="tags list f6 pl0 mb0">
      <li class="tags__li pv2">
        <a href="#" class="link lh-title">
          <span class="fw7 underline-hover">#AmazingSerena</span>
          <span class="db grey--text">134.5k mentions</span>
        </a>
      </li>
      <li class="tags__li pv2">
        <a href="#" class="link lh-title">
          <span class="fw7 underline-hover">#womenintech</span>
          <span class="db grey--text">11k mentions</span>
        </a>
      </li>
      <li class="tags__li pv2">
        <a href="#" class="link lh-title">
          <span class="fw7 underline-hover">#SenWarrenRoastsWellsFargo</span>
          <span class="db grey--text">99k mentions</span>
        </a>
      </li>
      <li class="tags__li pv2">
        <a href="#" class="link lh-title">
          <span class="fw7 underline-hover">#blackgirlmagic</span>
          <span class="db grey--text">256.5k mentions</span>
        </a>
      </li>
      <li class="tags__li pv2">
        <a href="#" class="link lh-title">
          <span class="fw7 underline-hover">#becauseofthemwecan</span>
          <span class="db grey--text">4.1k mentions</span>
        </a>
      </li>
      <li class="tags__li pv2">
        <a href="#" class="link lh-title">
          <span class="fw7 underline-hover">#gillscottheron</span>
          <span class="db grey--text">20.11k mentions</span>
        </a>
      </li>
      <li class="tags__li pv2">
        <a href="#" class="link lh-title">
          <span class="fw7 underline-hover">#trending</span>
          <span class="db grey--text">4.1k mentions</span>
        </a>
      </li>
    </ul>
  </v-card>
</template>

<style scoped>
  /* tachyons list component: 
    http://tachyons.io/components/lists/hashtags/index.html
  */
  .ba {
    border-style: solid;
    border-width: 1px;
  }


  .br2 {
    border-radius: .25rem;
  }

  .db {
    display: block;
  }

  .dib {
    display: inline-block;
  }

  .fw4 {
    font-weight: 400;
  }

  .fw7 {
    font-weight: 700;
  }

  .lh-title {
    line-height: 1.25;
  }

  .link {
    color: #408bc9;
    transition: color .15s ease-in;
    text-decoration: none;
  }

  .link:link,
  .link:visited {
    transition: color .15s ease-in;
  }

  .link:hover {
    transition: color .15s ease-in;
  }

  .link:active {
    transition: color .15s ease-in;
  }

  .link:focus {
    transition: color .15s ease-in;
    outline: 1px dotted currentColor;
  }

  .list {
    list-style-type: none;
  }

  .pa4 {
    padding: 2rem;
  }

  .pl0 {
    padding-left: 0;
  }

  .pv2 {
    padding-top: .5rem;
    padding-bottom: .5rem;
  }

  .mb0 {
    margin-bottom: 0;
  }

  .mv0 {
    margin-top: 0;
    margin-bottom: 0;
  }

  .no-underline {
    text-decoration: none;
  }

  .tags-title {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: -0.4px;
    color: rgba(0,0,0, 0.64);
  }

  .f6 {
    font-size: .875rem;
  }

  .v-mid {
    vertical-align: middle;
  }

  .underline-hover:hover,
  .underline-hover:focus {
    text-decoration: underline;
  }
  /* < -- tachyons component end */


  .tags {
    margin-top: .5rem;
  }
</style>
