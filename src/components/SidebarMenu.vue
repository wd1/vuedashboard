<template>
  <ul class="sidebar-menu">
    <li class="active pageLink" v-on:click="toggleMenu">
      <router-link to="/"><i class="fa fa-desktop"></i>
        <span class="page">APNIC</span>
      </router-link>
    </li>
    <li class="treeview" v-on:click="">
      <router-link to="/EasternAsia"><i class="fa fa-tasks"></i>
        <span class="page">Eastern Asia</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left fa-fw pull-right"></i>
        </span>
      </router-link>
      <ul class="treeview-menu">
        <li>
          <a href="EasternAsia/china">
            <i class=""></i>CHINA
          </a>
        </li>
        <li>
          <a href="EasternAsia/hongkong">
            <i class=""></i>HONG KONG SPECIAL <br/> ADMINISTRATIVE <br/>REGION OF CHINA
          </a>
        </li>
        <li>
          <a href="EasternAsia/japan">
            <i class=""></i>JAPAN
          </a>
        </li>
        <li>
          <a href="EasternAsia/dkorea">
            <i class=""></i>DEMOCRATIC PEOPLE'S <br/>REPUBLIC OF KOREA
          </a>
        </li>
        <li>
          <a href="EasternAsia/rkorea">
            <i class=""></i>REPUBLIC OF KOREA
          </a>
        </li>
        <li>
          <a href="EasternAsia/mongolia">
            <i class=""></i>MONGOLIA
          </a>
        </li>
        <li>
          <a href="EasternAsia/macao">
            <i class=""></i>MACAO SPECIAL ADMINISTRATIVE<br/>REGION OF CHINA
          </a>
        </li>
        <li>
          <a href="EasternAsia/taiwan">
            <i class=""></i>TAIWAN
          </a>
        </li>
      </ul>
    </li>


    <li class="treeview" v-on:click="">
      <router-link to="/SouthEasternAsia">
        <i class="fa fa-tasks"></i>
        <span class="page">South-Eastern Asia</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left fa-fw pull-right"></i>
        </span>
      </router-link>
      <ul class="treeview-menu">
        <li>
          <a href="SouthEasternAsia/brunei">
            <i class=""></i>BRUNEI DARUSSALAM
          </a>
        </li>
        <li>
          <a href="SouthEasternAsia/cocos">
            <i class=""></i>COCOS AND KEELING ISLANDS
          </a>
        </li>
        <li>
          <a href="SouthEasternAsia/christmas">
            <i class=""></i>CHRISTMAS ISLAND
          </a>
        </li>
        <li>
          <a href="SouthEasternAsia/indonesia">
            <i class=""></i>INDONESIA
          </a>
        </li>
        <li>
          <a href="SouthEasternAsia/cambodia">
            <i class=""></i>CAMBODIA
          </a>
        </li>
        <li>
          <a href="SouthEasternAsia/lao">
            <i class=""></i>LAO PEOPLE'S DEMOCRATIC <br/> REPUBLIC
          </a>
        </li>
        <li>
          <a href="SouthEasternAsia/myanmar">
            <i class=""></i>MYANMAR
          </a>
        </li>
        <li>
          <a href="SouthEasternAsia/malaysia">
            <i class=""></i>MALAYSIA
          </a>
        </li>
        <li>
          <a href="SouthEasternAsia/philippines">
            <i class=""></i>PHILIPPINES
          </a>
        </li>
        <li>
          <a href="SouthEasternAsia/singapore">
            <i class=""></i>SINGAPORE
          </a>
        </li>
        <li>
          <a href="SouthEasternAsia/thailand">
            <i class=""></i>THAILAND
          </a>
        </li>
        <li>
          <a href="SouthEasternAsia/timor">
            <i class=""></i>TIMOR-LESTE
          </a>
        </li>
        <li>
          <a href="SouthEasternAsia/vietnam">
            <i class=""></i>VIETNAM
          </a>
        </li>
      </ul>
    </li>
    <li class="treeview" v-on:click="">
      <router-link to="/Oceania">
        <i class="fa fa-tasks"></i>
        <span class="page">Oceania</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left fa-fw pull-right"></i>
        </span>
      </router-link>
      <ul class="treeview-menu">
        <li>
          <a href="Oceania/american">
            <i class=""></i>AMERICAN SAMOA
          </a>
        </li>
        <li>
          <a href="Oceania/australia">
            <i class=""></i>AUSTRALIA
          </a>
        </li>
        <li>
          <a href="Oceania/cook">
            <i class=""></i>COOK ISLANDS
          </a>
        </li>
        <li>
          <a href="Oceania/fiji">
            <i class=""></i>FIJI
          </a>
        </li>
        <li>
          <a href="Oceania/micronesia">
            <i class=""></i>MICRONESIA <br/>(FEDERATED STATES OF)
          </a>
        </li>
        <li>
          <a href="Oceania/guam">
            <i class=""></i>GUAM
          </a>
        </li>
        <li>
          <a href="Oceania/kiribati">
            <i class=""></i>KIRIBATI
          </a>
        </li>
        <li>
          <a href="Oceania/marshall">
            <i class=""></i>MARSHALL ISLANDS
          </a>
        </li>
        <li>
          <a href="Oceania/northern">
            <i class=""></i>NORTHERN MARIANA ISLANDS
          </a>
        </li>
        <li>
          <a href="Oceania/new">
            <i class=""></i>NEW CALEDONIA
          </a>
        </li>
        <li>
          <a href="Oceania/norfolk">
            <i class=""></i>NORFOLK ISLAND
          </a>
        </li>
        <li>
          <a href="Oceania/nauru">
            <i class=""></i>NAURU
          </a>
        </li>
        <li>
          <a href="Oceania/niue">
            <i class=""></i>NIUE
          </a>
        </li>
        <li>
          <a href="Oceania/zealand">
            <i class=""></i>NEW ZEALAND
          </a>
        </li>
        <li>
          <a href="Oceania/french">
            <i class=""></i>FRENCH POLYNESIA
          </a>
        </li>
        <li>
          <a href="Oceania/papua">
            <i class=""></i>PAPUA NEW GUINEA
          </a>
        </li>
        <li>
          <a href="Oceania/pitcairn">
            <i class=""></i>PITCAIRN
          </a>
        </li>
        <li>
          <a href="Oceania/palau">
            <i class=""></i>PALAU
          </a>
        </li>
        <li>
          <a href="Oceania/solomon">
            <i class=""></i>SOLOMON ISLANDS
          </a>
        </li>
        <li>
          <a href="Oceania/territories">
            <i class=""></i>FRENCH SOUTHERN TERRITORIES
          </a>
        </li>
        <li>
          <a href="Oceania/tokelau">
            <i class=""></i>TOKELAU
          </a>
        </li>
        <li>
          <a href="Oceania/tonga">
            <i class=""></i>TONGA
          </a>
        </li>
        <li>
          <a href="Oceania/tuvalu">
            <i class=""></i>TUVALU
          </a>
        </li>
        <li>
          <a href="Oceania/vanuatu">
            <i class=""></i>VANUATU
          </a>
        </li>
        <li>
          <a href="Oceania/wallis">
            <i class=""></i>WALLIS AND FUTUNA ISLANDS
          </a>
        </li>
        <li>
          <a href="Oceania/samoa">
            <i class=""></i>SAMOA
          </a>
        </li>
      </ul>
    </li>
    <li class="treeview">
      <router-link to="/SouthernAsia">
        <i class="fa fa-tasks"></i>
        <span class="page">Southern Asia</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left fa-fw pull-right"></i>
        </span>
      </router-link>
      <ul class="treeview-menu">
        <li>
          <a href="SouthernAsia/afghanistan">
            <i class=""></i>AFGHANISTAN
          </a>
        </li>
        <li>
          <a href="SouthernAsia/bangladesh">
            <i class=""></i>BANGLADESH
          </a>
        </li>
        <li>
          <a href="SouthernAsia/bhutan">
            <i class=""></i>BHUTAN
          </a>
        </li>
        <li>
          <a href="SouthernAsia/india">
            <i class=""></i>INDIA
          </a>
        </li>
        <li>
          <a href="SouthernAsia/british">
            <i class=""></i>BRITISH INDIAN OCEAN TERRITORY
          </a>
        </li>
        <li>
          <a href="SouthernAsia/sri">
            <i class=""></i>SRI LANKA
          </a>
        </li>
        <li>
          <a href="SouthernAsia/maldives">
            <i class=""></i>MALDIVES
          </a>
        </li>
        <li>
          <a href="SouthernAsia/nepal">
            <i class=""></i>NEPAL
          </a>
        </li>
        <li>
          <a href="SouthernAsia/pakistan">
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
