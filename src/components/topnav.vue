<template>
  <nav id="mainav" class="hoc clear"> 
    <!-- ################################################################################################ -->
    <ul class="clear">
      <li class="active"><a href="index.html">Home</a></li>
      <li><a class="drop" href="#">Pages</a>
        <ul>
          <li><a href="pages/gallery.html">Gallery</a></li>
          <li><a href="pages/full-width.html">Full Width</a></li>
          <li><a href="pages/sidebar-left.html">Sidebar Left</a></li>
          <li><a href="pages/sidebar-right.html">Sidebar Right</a></li>
          <li><a href="pages/basic-grid.html">Basic Grid</a></li>
        </ul>
      </li>
      <li><a class="drop" href="#">Dropdown</a>
        <ul>
          <li><a href="#">Level 2</a></li>
          <li><a class="drop" href="#">Level 2 + Drop</a>
            <ul>
              <li><a href="#">Level 3</a></li>
              <li><a href="#">Level 3</a></li>
              <li><a href="#">Level 3</a></li>
            </ul>
          </li>
          <li><a href="#">Level 2</a></li>
        </ul>
      </li>
      <li><a href="#">Link Text</a></li>
      <li><a href="#">Link Text</a></li>
      <li><a href="#">Link Text</a></li>
      <li><a href="#">Long Link Text</a></li>
    </ul>
    <!-- ################################################################################################ -->
  </nav>
</template>
<style>
#mainav{}
#mainav ul{text-transform:uppercase;}
#mainav ul ul{z-index:9999; position:absolute; width:180px; text-transform:none; text-align:left;}
#mainav ul ul ul{left:180px; top:0;}
#mainav li{display:block; float:left; position:relative; margin:0; padding:0;}
#mainav li:last-child{margin-right:0;}
#mainav li li{width:100%; margin:0;}
#mainav li a{display:block; padding:20px;}
#mainav li li a{border:solid; border-width:0 0 1px 0;}
#mainav .drop{padding-left:15px;}
#mainav li li a, #mainav li li .drop{display:block; margin:0; padding:10px 15px;}
#mainav .drop::after, #mainav li li .drop::after{content:"\f0d7";}
#mainav .drop::after{top:25px; left:5px;}
#mainav li li .drop::after{top:15px; left:5px;}
#mainav ul ul{visibility:hidden; opacity:0;}
#mainav ul li:hover > ul{visibility:visible; opacity:1;}

#mainav form{display:none; margin:0; padding:0;}
#mainav form select, #mainav form select option{display:block; cursor:pointer; outline:none;}
#mainav form select{width:100%; padding:5px; border:none;}
#mainav form select option{margin:5px; padding:0; border:none;}


</style>
