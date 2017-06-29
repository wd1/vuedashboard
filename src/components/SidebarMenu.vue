<template>
  <ul class="sidebar-menu">
    <li class="active pageLink" v-on:click="toggleMenu">
      <router-link to="/"><i class="fa fa-desktop"></i>
        <span class="page">APNIC</span>
      </router-link>
    </li>
    <li class="treeview" v-on:click="">
      <router-link to="/tables"><i class="fa fa-tasks"></i>
        <span class="page">Eastern Asia</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left fa-fw pull-right"></i>
        </span>
      </router-link>
      <ul class="treeview-menu">
        <li>
          <a href="tables/china">
            <i class=""></i>CHINA
          </a>
        </li>
        <li>
          <a href="tables/hongkong">
            <i class=""></i>HONG KONG SPECIAL <br/> ADMINISTRATIVE <br/>REGION OF CHINA
          </a>
        </li>
        <li>
          <a href="tables/japan">
            <i class=""></i>JAPAN
          </a>
        </li>
        <li>
          <a href="tables/dkorea">
            <i class=""></i>DEMOCRATIC PEOPLE'S <br/>REPUBLIC OF KOREA
          </a>
        </li>
        <li>
          <a href="tables/rkorea">
            <i class=""></i>REPUBLIC OF KOREA
          </a>
        </li>
        <li>
          <a href="tables/mongolia">
            <i class=""></i>MONGOLIA
          </a>
        </li>
        <li>
          <a href="tables/macao">
            <i class=""></i>MACAO SPECIAL ADMINISTRATIVE<br/>REGION OF CHINA
          </a>
        </li>
        <li>
          <a href="tables/taiwan">
            <i class=""></i>TAIWAN
          </a>
        </li>
      </ul>
    </li>


    <li class="treeview" v-on:click="">
      <router-link to="/tasks">
        <i class="fa fa-tasks"></i>
        <span class="page">South-Eastern Asia</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left fa-fw pull-right"></i>
        </span>
      </router-link>
      <ul class="treeview-menu">
        <li>
          <a href="#">
            <i class=""></i>BRUNEI DARUSSALAM
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>COCOS AND KEELING ISLANDS
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>CHRISTMAS ISLAND
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>INDONESIA
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>CAMBODIA
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>LAO PEOPLE'S DEMOCRATIC <br/> REPUBLIC
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>MYANMAR
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>MALAYSIA
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>PHILIPPINES
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>SINGAPORE
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>THAILAND
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>TIMOR-LESTE
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>VIETNAM
          </a>
        </li>
      </ul>
    </li>
    <li class="treeview" v-on:click="">
      <router-link to="/setting">
        <i class="fa fa-tasks"></i>
        <span class="page">Oceania</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left fa-fw pull-right"></i>
        </span>
      </router-link>
      <ul class="treeview-menu">
        <li>
          <a href="#">
            <i class=""></i>AMERICAN SAMOA
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>AUSTRALIA
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>COOK ISLANDS
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>FIJI
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>MICRONESIA <br/>(FEDERATED STATES OF)
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>GUAM
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>KIRIBATI
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>MARSHALL ISLANDS
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>NORTHERN MARIANA ISLANDS
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>NEW CALEDONIA
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>NORFOLK ISLAND
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>NAURU
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>NIUE
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>NEW ZEALAND
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>FRENCH POLYNESIA
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>PAPUA NEW GUINEA
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>PITCAIRN
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>PALAU
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>SOLOMON ISLANDS
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>FRENCH SOUTHERN TERRITORIES
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>TOKELAU
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>TONGA
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>TUVALU
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>VANUATU
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>WALLIS AND FUTUNA ISLANDS
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>SAMOA
          </a>
        </li>
      </ul>
    </li>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-tasks"></i>
        <span>Southern Asia</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left fa-fw pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li>
          <a href="#">
            <i class=""></i>AFGHANISTAN
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>BANGLADESH
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>BHUTAN
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>INDIA
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>BRITISH INDIAN OCEAN TERRITORY
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>SRI LANKA
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>MALDIVES
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>NEPAL
          </a>
        </li>
        <li>
          <a href="#">
            <i class=""></i>PAKISTAN
          </a>
        </li>
      </ul>
    </li>
<!--
    <li class="header">LOGS</li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/access"><i class="fa fa-book"></i>
        <span class="page">Access</span>
      </router-link>
    </li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/server"><i class="fa fa-hdd-o"></i>
        <span class="page">Server</span>
      </router-link>
    </li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/repos"><i class="fa fa-heart"></i>
        <span class="page">Repos</span>
        <small class="label pull-right bg-green">AJAX</small>
      </router-link>
    </li>

    <li class="header">PAGES</li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/login">
        <i class="fa fa-circle-o text-yellow"></i>
        <span class="page"> Login</span>
      </router-link>
    </li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/404"><i class="fa fa-circle-o text-red"></i>
        <span class="page"> 404</span>
      </router-link>
    </li> -->
  </ul>
</template>
<script>
export default {
  name: 'SidebarName',
  methods: {
    toggleMenu (event) {
      // remove active from li
      var active = document.querySelector('li.pageLink.active')

      if (active) {
        active.classList.remove('active')
      }
      // window.$('li.pageLink.active').removeClass('active')
      // Add it to the item that was clicked
      event.toElement.parentElement.className = 'pageLink active'
    }
  }
}
</script>
<style>
  /* override default */
  .sidebar-menu>li>a {
    padding: 12px 15px 12px 15px;
  }

  .sidebar-menu li.active>a>.fa-angle-left, .sidebar-menu li.active>a>.pull-right-container>.fa-angle-left {
    animation-name: rotate;
    animation-duration: .2s;
    animation-fill-mode: forwards;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-90deg);
    }
  }
</style>
