<template>
  <ul class="sidebar-menu">
    <div id="routename" ref="routename" class="objecthidden" v-if="$route.meta.length">{{$route.meta[$route.meta.length-1].message}}</div>
    <div id="routename1" ref="routename1" class="objecthidden">{{$route.name}}</div>
    <li class="active pageLink" v-on:click="toggleMenu">
      <router-link to="/"><i class="fa fa-desktop"></i>
        <span class="page">APNIC</span>
      </router-link>
    </li>
    <li class="treeview" v-on:click="">
      <router-link to="/EasternAsia"><i class="fa fa-tasks"></i>
        <span class="page">Eastern Asia</span>
        <i class="fa fa-angle-left fa-fw pull-right"></i>
        <span class="pull-right-container">
          
        </span>
      </router-link>
      <ul class="treeview-menu">
        <li>
          <router-link to="/EasternAsia/china">
            <i class="subpage"></i>CHINA
          </router-link>
        </li>
        <li>
          <router-link to="/EasternAsia/hongkong">
            <i class="subpage"></i>HONG KONG SPECIAL <br/> ADMINISTRATIVE <br/>REGION OF CHINA
          </router-link>
        </li>
        <li>
          <router-link to="/EasternAsia/japan">
            <i class="subpage"></i>JAPAN
          </router-link>
        </li>
        <li>
          <router-link to="/EasternAsia/dkorea">
            <i class="subpage"></i>DEMOCRATIC PEOPLE'S <br/>REPUBLIC OF KOREA
          </router-link>
        </li>
        <li>
          <router-link to="/EasternAsia/rkorea">
            <i class="subpage"></i>REPUBLIC OF KOREA
          </router-link>
        </li>
        <li>
          <router-link to="/EasternAsia/mongolia">
            <i class="subpage"></i>MONGOLIA
          </router-link>
        </li>
        <li>
          <router-link to="/EasternAsia/macao">
            <i class="subpage"></i>MACAO SPECIAL ADMINISTRATIVE<br/>REGION OF CHINA
          </router-link>
        </li>
        <li>
          <router-link to="/EasternAsia/taiwan">
            <i class="subpage"></i>TAIWAN
          </router-link>
        </li>
      </ul>
    </li>


    <li class="treeview" v-on:click="">
      <router-link to="/SouthEasternAsia">
        <i class="fa fa-tasks"></i>
        <span class="page">South-Eastern Asia</span>
        <i class="fa fa-angle-left fa-fw pull-right"></i>
        <span class="pull-right-container">
          
        </span>
      </router-link>
      <ul class="treeview-menu">
        <li>
          <router-link to="/SouthEasternAsia/brunei">
            <i class="subpage"></i>BRUNEI DARUSSALAM
          </router-link>
        </li>
        <li>
          <router-link to="/SouthEasternAsia/cocos">
            <i class="subpage"></i>COCOS AND KEELING ISLANDS
          </router-link>
        </li>
        <li>
          <router-link to="/SouthEasternAsia/christmas">
            <i class="subpage"></i>CHRISTMAS ISLAND
          </router-link>
        </li>
        <li>
          <router-link to="/SouthEasternAsia/indonesia">
            <i class="subpage"></i>INDONESIA
          </router-link>
        </li>
        <li>
          <router-link to="/SouthEasternAsia/cambodia">
            <i class="subpage"></i>CAMBODIA
          </router-link>
        </li>
        <li>
          <router-link to="/SouthEasternAsia/lao">
            <i class="subpage"></i>LAO PEOPLE'S DEMOCRATIC <br/> REPUBLIC
          </router-link>
        </li>
        <li>
          <router-link to="/SouthEasternAsia/myanmar">
            <i class="subpage"></i>MYANMAR
          </router-link>
        </li>
        <li>
          <router-link to="/SouthEasternAsia/malaysia">
            <i class="subpage"></i>MALAYSIA
          </router-link>
        </li>
        <li>
          <router-link to="/SouthEasternAsia/philippines">
            <i class="subpage"></i>PHILIPPINES
          </router-link>
        </li>
        <li>
          <router-link to="/SouthEasternAsia/singapore">
            <i class="subpage"></i>SINGAPORE
          </router-link>
        </li>
        <li>
          <router-link to="/SouthEasternAsia/thailand">
            <i class="subpage"></i>THAILAND
          </router-link>
        </li>
        <li>
          <router-link to="/SouthEasternAsia/timor">
            <i class="subpage"></i>TIMOR-LESTE
          </router-link>
        </li>
        <li>
          <router-link to="/SouthEasternAsia/vietnam">
            <i class="subpage"></i>VIETNAM
          </router-link>
        </li>
      </ul>
    </li>
    <li class="treeview" v-on:click="">
      <router-link to="/Oceania">
        <i class="fa fa-tasks"></i>
        <span class="page">Oceania</span>
        <i class="fa fa-angle-left fa-fw pull-right"></i>
        <span class="pull-right-container">
          
        </span>
      </router-link>
      <ul class="treeview-menu">
        <li>
          <router-link to="/Oceania/american">
            <i class="subpage"></i>AMERICAN SAMOA
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/australia">
            <i class="subpage"></i>AUSTRALIA
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/cook">
            <i class="subpage"></i>COOK ISLANDS
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/fiji">
            <i class="subpage"></i>FIJI
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/micronesia">
            <i class="subpage"></i>MICRONESIA <br/>(FEDERATED STATES OF)
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/guam">
            <i class="subpage"></i>GUAM
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/kiribati">
            <i class="subpage"></i>KIRIBATI
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/marshall">
            <i class="subpage"></i>MARSHALL ISLANDS
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/northern">
            <i class="subpage"></i>NORTHERN MARIANA ISLANDS
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/new">
            <i class="subpage"></i>NEW CALEDONIA
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/norfolk">
            <i class="subpage"></i>NORFOLK ISLAND
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/nauru">
            <i class="subpage"></i>NAURU
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/niue">
            <i class="subpage"></i>NIUE
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/zealand">
            <i class="subpage"></i>NEW ZEALAND
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/french">
            <i class="subpage"></i>FRENCH POLYNESIA
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/papua">
            <i class="subpage"></i>PAPUA NEW GUINEA
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/pitcairn">
            <i class="subpage"></i>PITCAIRN
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/palau">
            <i class="subpage"></i>PALAU
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/solomon">
            <i class="subpage"></i>SOLOMON ISLANDS
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/territories">
            <i class="subpage"></i>FRENCH SOUTHERN TERRITORIES
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/tokelau">
            <i class="subpage"></i>TOKELAU
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/tonga">
            <i class="subpage"></i>TONGA
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/tuvalu">
            <i class="subpage"></i>TUVALU
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/vanuatu">
            <i class="subpage"></i>VANUATU
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/wallis">
            <i class="subpage"></i>WALLIS AND FUTUNA ISLANDS
          </router-link>
        </li>
        <li>
          <router-link to="/Oceania/samoa">
            <i class="subpage"></i>SAMOA
          </router-link>
        </li>
      </ul>
    </li>
    <li class="treeview">
      <router-link to="/SouthernAsia">
        <i class="fa fa-tasks"></i>
        <span class="page">Southern Asia</span>
        <i class="fa fa-angle-left fa-fw pull-right"></i>
        <span class="pull-right-container">
          
        </span>
      </router-link>
      <ul class="treeview-menu">
        <li>
          <router-link to="/SouthernAsia/afghanistan">
            <i class="subpage"></i>AFGHANISTAN
          </router-link>
        </li>
        <li>
          <router-link to="/SouthernAsia/bangladesh">
            <i class="subpage"></i>BANGLADESH
          </router-link>
        </li>
        <li>
          <router-link to="/SouthernAsia/bhutan">
            <i class="subpage"></i>BHUTAN
          </router-link>
        </li>
        <li>
          <router-link to="/SouthernAsia/india">
            <i class="subpage"></i>INDIA
          </router-link>
        </li>
        <li>
          <router-link to="/SouthernAsia/british">
            <i class="subpage"></i>BRITISH INDIAN OCEAN TERRITORY
          </router-link>
        </li>
        <li>
          <router-link to="/SouthernAsia/sri">
            <i class="subpage"></i>SRI LANKA
          </router-link>
        </li>
        <li>
          <router-link to="/SouthernAsia/maldives">
            <i class="subpage"></i>MALDIVES
          </router-link>
        </li>
        <li>
          <router-link to="/SouthernAsia/nepal">
            <i class="subpage"></i>NEPAL
          </router-link>
        </li>
        <li>
          <router-link to="/SouthernAsia/pakistan">
            <i class="subpage"></i>PAKISTAN
          </router-link>
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
function menuActive (data, data1) {
  var els = document.getElementsByClassName('page')
  for (var i = 0; i < els.length; i++) {
    if (els[i].innerText === data1) {
      els[i].parentNode.parentNode.className += ' active'
      els[i].parentNode.parentNode.getElementsByClassName('treeview-menu')[0].style.display = 'block'
    }
  }
  els = document.getElementsByClassName('subpage')
  for (i = 0; i < els.length; i++) {
    var text = els[i].parentNode.innerText.replace(/(?:\r\n|\r|\n)/g, '')
    text = text.trim().replace(/\s/g, '').substr(0, 10)
    var text1 = data1.replace(/(\r\n|\n|\r)/gm, '')
    text1 = text1.trim().replace(/\s/g, '').substr(0, 10)
    els[i].parentNode.style = 'color:#8aa4af;background-color: transparent;'
    if (text === text1) {
      console.log(els[i].parentNode)
      els[i].parentNode.parentNode.parentNode.parentNode.className += ' active'
      els[i].parentNode.style = 'color:white;background-color:cadetblue;'
      console.log(els[i].parentNode)
      els[i].parentNode.parentNode.parentNode.style.display = 'block'
    }
  }
}
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
  },
  computed: function () {
    console.log('coputed')
  },
  watch: {
  },
  mounted () {
    this.$nextTick(() => {
      var links = document.getElementsByClassName('subpage')
      console.log(links)
      for (var i = 0; i < links.length; i++) {
        links[i].parentNode.onclick = function () {
          menuActive(document.getElementById('routename').innerText, document.getElementById('routename1').innerText)
        }
      }
      if (this.$refs.routename) {
        menuActive(this.$refs.routename.innerText, this.$refs.routename1.innerText)
      } else {
        menuActive('', this.$refs.routename1.innerText)
      }
    })
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

  .subpageactive {
    color:white;
    background-color:cadetblue;
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
