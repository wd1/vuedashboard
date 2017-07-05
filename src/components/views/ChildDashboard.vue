<template>
  <!-- Main content -->
  <section class="content" style="height:800px;">
    <div id="routename" class="objecthidden">{{$route.meta[$route.meta.length-1].message}}</div>
    <div id="routename1" class="objecthidden">{{$route.name.replace("%27","'")}}</div>
    <div class="col-sm-12 col-xs-12"></div>
    <div id="asntbycontainer" class="col-sm-6 col-xs-12 col-lg-4 chart_container"  style="height:100%;">
      <div id="asntbybox" class="box" style="border-radius: 10px;
    border: 1px solid black;    min-height: 300px;height: 100%;">
        <div class="box-header with-border" style="text-align: center;height: 100%;">
          <h3 class="box-title" style="font-weight: bold;" >ASN 4 Total by Year</h3>
          <div style="float:right;font-size: 12px;">
            <span class="fullview-toggle fa fa-expand" data='asntby'></span>
          </div>
          <form name="myForm" action="" style="margin-top: 10px;font-size: 14px;">
            <input type="radio" name="asntby" value="total" checked="checked"> Total
            <input type="radio" name="asntby" value="twobyte" > 2 Byte
            <input type="radio" name="asntby" value="fourbyte" > 4 Byte
            <div style="display: inline;float: right;">
              <input type="radio" name="asntby" value="cumulative" style="" > Cumulative
            </div>
          </form>
          <div id="asntbyparent" class="box-body" style="height: 80%;">
              
          </div>
        </div>
      </div>
    </div>
    <div id="ipv4tbycontainer" class="col-sm-6 col-xs-12 col-lg-4 chart_container"  style="height:100%;">
      <div id="ipv4tbybox" class="box" style="border-radius: 10px;
    border: 1px solid black;    min-height: 300px;height: 100%;">
        <div class="box-header with-border" style="text-align: center;height: 100%;">
          <h3 class="box-title" style="font-weight: bold;" >IPv4 Total by Year</h3>
          <div style="float:right;font-size: 12px;">
            <span class="fullview-toggle fa fa-expand" data='ipv4tby'></span>
          </div>
          <form name="myForm" action="" style="margin-top: 10px;font-size: 14px;">
            <input type="radio" name="ipv4tby" value="total" checked="checked"> Total
            <input type="radio" name="ipv4tby" value="twobyte" > /24
            <input type="radio" name="ipv4tby" value="fourbyte" > delegation
            <div style="display: inline;float: right;">
              <input type="radio" name="ipv4tby" value="cumulative" style="" > Cumulative
            </div>
          </form>
          <div id="ipv4tbyparent" class="box-body" style="height: 80%;">
              
          </div>
        </div>
      </div>
    </div>
    <div id="ipv6tbycontainer" class="col-sm-6 col-xs-12 col-lg-4 chart_container"  style="height:100%;">
      <div id="ipv6tbybox" class="box" style="border-radius: 10px;
    border: 1px solid black;    min-height: 300px;height: 100%;">
        <div class="box-header with-border" style="text-align: center;height: 100%;">
          <h3 class="box-title" style="font-weight: bold;" >IPv6/32 by Year</h3>
          <div style="float:right;font-size: 12px;">
            <span class="fullview-toggle fa fa-expand" data='ipv6tby'></span>
          </div>
          <form name="myForm" action="" style="margin-top: 10px;font-size: 14px;">
            <input type="radio" name="ipv6tby" value="total" checked="checked"> /32
            <input type="radio" name="ipv6tby" value="twobyte" > /48
            <input type="radio" name="ipv6tby" value="fourbyte" > delegation
            <div style="display: inline; float: right;">
              <input type="radio" name="ipv6tby" value="cumulative" style="" > Cumulative
            </div>
          </form>
          <div id="ipv6tbyparent" class="box-body" style="height: 80%;">
              
          </div>
        </div>
      </div>
    </div>
    <div style="clear:both;"></div>
    <!-- /.row -->
  </section>
  <!-- /.content -->
</template>
<script>
var list = [
  {
    id: 'all',
    label: 'ALL',
    color: '#ff7faa',
    countries: [
      {
        id: 'all',
        label: 'ALL',
        color: '#ff7faa'
      }
    ]
  },
  {
    id: 'southern asia',
    label: 'SOUTHERN ASIA',
    color: '#546ef8',
    countries: [
      {
        id: 'af',
        label: 'AFGHANISTAN',
        color: '#3c8f00'
      },
      {
        id: 'bd',
        label: 'BANGLADESH',
        color: '#7a2ab0'
      },
      {
        id: 'bt',
        label: 'BHUTAN',
        color: '#ffac19'
      },
      {
        id: 'in',
        label: 'INDIA',
        color: '#546ef8'
      },
      {
        id: 'io',
        label: 'BRITISH INDIAN OCEAN TERRITORY',
        color: '#547500'
      },
      {
        id: 'lk',
        label: 'SRI LANKA',
        color: '#f18aff'
      },
      {
        id: 'mv',
        label: 'MALDIVES',
        color: '#00b576'
      },
      {
        id: 'np',
        label: 'NEPAL',
        color: '#b00081'
      },
      {
        id: 'pk',
        label: 'PAKISTAN',
        color: '#82d6b7'
      }
    ]
  },
  {
    id: 'oceania',
    label: 'OCEANIA',
    color: '#82d6b7',
    countries: [
      {
        id: 'as',
        label: 'AMERICAN SAMOA',
        color: '#3c8f00'
      },
      {
        id: 'au',
        label: 'AUSTRALIA',
        color: '#7a2ab0'
      },
      {
        id: 'ck',
        label: 'COOK ISLANDS',
        color: '#ffac19'
      },
      {
        id: 'fj',
        label: 'FIJI',
        color: '#546ef8'
      },
      {
        id: 'fm',
        label: 'MICRONESIA {FEDERATED STATES OF}',
        color: '#547500'
      },
      {
        id: 'gu',
        label: 'GUAM',
        color: '#f18aff'
      },
      {
        id: 'ki',
        label: 'KIRIBATI',
        color: '#00b576'
      },
      {
        id: 'mh',
        label: 'MARSHALL ISLANDS',
        color: '#b00081'
      },
      {
        id: 'mp',
        label: 'NORTHERN MARIANA ISLANDS',
        color: '#82d6b7'
      },
      {
        id: 'nc',
        label: 'NEW CALEDONIA',
        color: '#8c2388'
      },
      {
        id: 'nf',
        label: 'NORFOLK ISLAND',
        color: '#e1c37a'
      },
      {
        id: 'nr',
        label: 'NAURU',
        color: '#3647b2'
      },
      {
        id: 'nu',
        label: 'NIUE',
        color: '#f24f30'
      },
      {
        id: 'nz',
        label: 'NEW ZEALAND',
        color: '#44b1ff'
      },
      {
        id: 'pf',
        label: 'FRENCH POLYNESIA',
        color: '#886400'
      },
      {
        id: 'pg',
        label: 'PAPUA NEW GUINEA',
        color: '#bf97ff'
      },
      {
        id: 'pn',
        label: 'PITCAIRN',
        color: '#893651'
      },
      {
        id: 'pw',
        label: 'PALAU',
        color: '#0091bc'
      },
      {
        id: 'sb',
        label: 'SOLOMON ISLANDS',
        color: '#b77a9d'
      },
      {
        id: 'tf',
        label: 'FRENCH SOUTHERN TERRITORIES',
        color: '#325386'
      },
      {
        id: 'tk',
        label: 'TOKELAU',
        color: '#a7c4ff'
      },
      {
        id: 'to',
        label: 'TONGA'
      },
      {
        id: 'tv',
        label: 'TUVALU'
      },
      {
        id: 'vu',
        label: 'VANUATU'
      },
      {
        id: 'wf',
        label: 'WALLIS AND FUTUNA ISLANDS'
      },
      {
        id: 'ws',
        label: 'SAMOA'
      }
    ]
  },
  {
    id: 'south-eastern asia',
    label: 'SOUTH-EASTERN ASIA',
    color: '#bf97ff',
    countries: [
      {
        id: 'bn',
        label: 'BRUNEI DARUSSALAM',
        color: '#3c8f00'
      },
      {
        id: 'cc',
        label: 'COCOS  AND KEELING ISLANDS',
        color: '#7a2ab0'
      },
      {
        id: 'cx',
        label: 'CHRISTMAS ISLAND',
        color: '#ffac19'
      },
      {
        id: 'id',
        label: 'INDONESIA',
        color: '#546ef8'
      },
      {
        id: 'kh',
        label: 'CAMBODIA',
        color: '#547500'
      },
      {
        id: 'la',
        label: "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
        color: '#f18aff'
      },
      {
        id: 'mm',
        label: 'MYANMAR',
        color: '#00b576'
      },
      {
        id: 'my',
        label: 'MALAYSIA',
        color: '#b00081'
      },
      {
        id: 'ph',
        label: 'PHILIPPINES',
        color: '#82d6b7'
      },
      {
        id: 'sg',
        label: 'SINGAPORE',
        color: '#8c2388'
      },
      {
        id: 'th',
        label: 'THAILAND',
        color: '#e1c37a'
      },
      {
        id: 'tl',
        label: 'TIMOR-LESTE',
        color: '#3647b2'
      },
      {
        id: 'vn',
        label: 'VIETNAM',
        color: '#f24f30'
      }
    ]
  },
  {
    id: 'eastern asia',
    label: 'EASTERN ASIA',
    color: '#b77a9d',
    countries: [
      {
        id: 'cn',
        label: 'CHINA',
        color: '#3c8f00'
      },
      {
        id: 'hk',
        label: 'HONG KONG SPECIAL ADMINISTRATIVE REGION OF CHINA',
        color: '#7a2ab0'
      },
      {
        id: 'jp',
        label: 'JAPAN',
        color: '#ffac19'
      },
      {
        id: 'kp',
        label: "DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA",
        color: '#546ef8'
      },
      {
        id: 'kr',
        label: 'REPUBLIC OF KOREA',
        color: '#547500'
      },
      {
        id: 'mn',
        label: 'MONGOLIA',
        color: '#f18aff'
      },
      {
        id: 'mo',
        label: 'MACAO SPECIAL ADMINISTRATIVE REGION OF CHINA',
        color: '#00b576'
      },
      {
        id: 'tw',
        label: 'TAIWAN',
        color: '#b00081'
      }
    ]
  }
]

import Chart from 'chart.js'
import axios from 'axios'

var fields = []
var totaldata = []
var totaldata1 = []
var totaldata2 = []
var data = {'total': [], 'twobyte': [], 'fourbyte': [], 'cumulative': []}
var data1 = {'total': [], 'twobyte': [], 'fourbyte': [], 'cumulative': []}
var data2 = {'total': [], 'twobyte': [], 'fourbyte': [], 'cumulative': []}
function drawChart1 (mydata, id) {
  var canvas = document.createElement('canvas')
  document.getElementById(id).innerHTML = ''
  document.getElementById(id).appendChild(canvas)
  var ctx = canvas.getContext('2d')
  var config = {
    type: 'bar',
    data: {
      labels: [2008, 2009, 2010, 2011, 2012],
      datasets: mydata
    },
    options: {
      scales: {
        yAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: 'Count(Thousands of Unique Numbers)'
          }
        }],
        xAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: 'Year'
          }
        }]

      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        display: false
      },
      tooltips: {
        mode: 'label',
        xPadding: 10,
        yPadding: 10,
        bodySpacing: 10
      }
    }
  }
  new Chart(ctx, config) // eslint-disable-line no-new
}
var fullwindowflag = true
function fullWindow (id) {
  var container = document.getElementsByClassName('chart_container')
  var maincontainer = document.getElementById(id + 'container')
  if (fullwindowflag) {
    for (var i = 0; i < container.length; i++) {
      container[i].style.display = 'none'
    }
    maincontainer.style.display = 'block'
    maincontainer.className += ' fullwindow'
    maincontainer.parentNode.style.height = '800px'
    document.getElementById(id + 'parent').style.height = '80%'
    document.getElementById(id + 'box').style.height = '100%'
  } else {
    maincontainer.className = 'col-sm-6 col-xs-12 col-lg-4 chart_container'
    document.getElementById(id + 'parent').style.height = '80%'
    document.getElementById(id + 'box').style.height = '100%'
    for (i = 0; i < container.length; i++) {
      container[i].style.display = 'block'
    }
  }
  fullwindowflag = !fullwindowflag
}

function readData (data, year, dataname, id) {
  axios.get('https://apnic-api.synthmeat.com/v2/apnic/' + id + '/assigned,allocated/' + year + '/' + (document.getElementById('routename').innerHTML).replace(' ', '%20'))
  .then(response => {
    dataname.push(response.data)
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === document.getElementById('routename').innerHTML.toLowerCase()) {
        for (var x = 0; x < list[i].countries.length; x++) {
          if (list[i].countries[x].label === document.getElementById('routename1').innerHTML) {
            var obj = {'label': list[i].countries[x].id, color: list[i].countries[x].color}
            fields[0] = obj
          }
        }
      }
    }
    if (year < 2012) {
      readData(data, year + 1, dataname, id)
    } else {
      for (var j = 0; j < fields.length; j++) {
        data.total.push({'label': fields[j].label, 'data': [], backgroundColor: [], borderColor: [], borderWidth: 2})
        data.twobyte.push({'label': fields[j].label, 'data': [], backgroundColor: [], borderColor: [], borderWidth: 2})
        data.fourbyte.push({'label': fields[j].label, 'data': [], backgroundColor: [], borderColor: [], borderWidth: 2})
        data.cumulative.push({'label': fields[j].label, 'data': [], backgroundColor: [], borderColor: [], borderWidth: 2})
      }
      for (i = 0; i < dataname.length; i++) {
        for (j = 0; j < fields.length; j++) {
          data.total[j].data.push(dataname[i][fields[j].label][id].total)
          data.total[j].backgroundColor.push(fields[j].color)
          data.total[j].borderColor.push('white')
          data.twobyte[j].data.push(dataname[i][fields[j].label][id].twoByte)
          data.twobyte[j].backgroundColor.push(fields[j].color)
          data.twobyte[j].borderColor.push('white')
          data.fourbyte[j].data.push(dataname[i][fields[j].label][id].fourByte)
          data.fourbyte[j].backgroundColor.push(fields[j].color)
          data.fourbyte[j].borderColor.push('white')
          data.cumulative[j].data.push(dataname[i][fields[j].label][id].fourByte)
          data.cumulative[j].backgroundColor.push(fields[j].color)
          data.cumulative[j].borderColor.push('white')
        }
      }
      drawChart1(data.total, id + 'tbyparent')
      var rad = document.getElementsByName(id + 'tby')
      for (i = 0; i < rad.length; i++) {
        rad[i].onclick = function () {
          drawChart1(data[this.value], id + 'tbyparent')
        }
      }
      var zoom = document.getElementsByClassName('fullview-toggle fa fa-expand')
      for (i = 0; i < zoom.length; i++) {
        zoom[i].onclick = function () {
          fullWindow(this.getAttribute('data'))
        }
      }
    }
  })
  .catch(error => {
    console.log('error')
    console.log(error)
  })
}

export default {
  data () {
    return {
      generateRandomNumbers (numbers, max, min) {
        var a = []
        for (var i = 0; i < numbers; i++) {
          a.push(Math.floor(Math.random() * (max - min + 1)) + max)
        }
        return a
      }
    }
  },
  computed: {
    coPilotNumbers () {
      return this.generateRandomNumbers(12, 1000000, 10000)
    },
    personalNumbers () {
      return this.generateRandomNumbers(12, 1000000, 10000)
    },
    isMobile () {
      return (window.innerWidth <= 800 && window.innerHeight <= 600)
    }
  },
  mounted () {
    this.$nextTick(() => {
      readData(data, 2008, totaldata, 'asn')
      readData(data1, 2008, totaldata1, 'ipv4')
      readData(data2, 2008, totaldata2, 'ipv6')
    })
  }
}

</script>
<style>
.fullwindow {
  display: block;
  width: 100%;
  height: 100%;
}
.info-box {
  cursor: pointer;
}
.info-box-content {
  text-align: center;
  vertical-align: middle;
  display: inherit;
}
.fullCanvas {
  width: 100%;
}
</style>
