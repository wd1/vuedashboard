<template>
  <!-- Main content -->
  <section class="content" style="">
    <div id="routename" class="objecthidden">{{$route.meta[$route.meta.length-1].message}}</div>
    <div id="routename1" class="objecthidden">{{$route.name.replace("%27","'")}}</div>
    <div class="col-sm-12 col-xs-12"></div>
    <div id="asntbycontainer" class="col-sm-6 col-xs-12 col-lg-4 chart_container" >
      <div id="asntbybox" class="box" style="border-radius: 10px;
    border: 1px solid black;    min-height: 300px;height: 800px; margin-top: 10%;">
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
          <div id="asntbyparent" class="box-body" style="height: 80%;margin-top:5%;">
              
          </div>
        </div>
      </div>
    </div>
    <div id="ipv4tbycontainer" class="col-sm-6 col-xs-12 col-lg-4 chart_container"  style="">
      <div id="ipv4tbybox" class="box" style="border-radius: 10px;
    border: 1px solid black;    min-height: 300px;height: 800px; margin-top: 10%;">
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
          <div id="ipv4tbyparent" class="box-body" style="height: 80%;margin-top:5%;">
              
          </div>
        </div>
      </div>
    </div>
    <div id="ipv6tbycontainer" class="col-sm-6 col-xs-12 col-lg-4 chart_container"  style="">
      <div id="ipv6tbybox" class="box" style="border-radius: 10px;
    border: 1px solid black;    min-height: 300px;height: 800px; margin-top: 10%;">
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
          <div id="ipv6tbyparent" class="box-body" style="height: 80%;margin-top:5%;">
              
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
    color: 'rgba(255,127,170,0.5)',
    countries: [
      {
        id: 'all',
        label: 'ALL',
        color: 'rgba(255,127,170,0.5)'
      }
    ]
  },
  {
    id: 'southern asia',
    label: 'SOUTHERN ASIA',
    color: 'rgba(84,110,248,0.5)',
    countries: [
      {
        id: 'af',
        label: 'AFGHANISTAN',
        color: 'rgba(60,143,0,0.5)'
      },
      {
        id: 'bd',
        label: 'BANGLADESH',
        color: 'rgba(122,42,176,0.5)'
      },
      {
        id: 'bt',
        label: 'BHUTAN',
        color: 'rgba(255,172,25,0.5)'
      },
      {
        id: 'in',
        label: 'INDIA',
        color: 'rgba(84,110,248,0.5)'
      },
      {
        id: 'io',
        label: 'BRITISH INDIAN OCEAN TERRITORY',
        color: 'rgba(84,117,0,0.5)'
      },
      {
        id: 'lk',
        label: 'SRI LANKA',
        color: 'rgba(241,138,255,0.5)'
      },
      {
        id: 'mv',
        label: 'MALDIVES',
        color: 'rgba(0,181,118,0.5)'
      },
      {
        id: 'np',
        label: 'NEPAL',
        color: 'rgba(176,0,129.0.5)'
      },
      {
        id: 'pk',
        label: 'PAKISTAN',
        color: 'rgba(130,214,183,0.5)'
      }
    ]
  },
  {
    id: 'oceania',
    label: 'OCEANIA',
    color: 'rgba(130,214,183,0.5)',
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
    color: 'rgba(191,151,255,0.5)',
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
    color: 'rgba(183,122,157,0.5)',
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
import Highcharts from 'highcharts'
import axios from 'axios'

var fields = []
var totaldata = []
var totaldata1 = []
var totaldata2 = []
var historydata = {}
var data = {'total': [], 'twobyte': [], 'fourbyte': [], 'cumulative': []}
var data1 = {'total': [], 'twobyte': [], 'fourbyte': [], 'cumulative': []}
var data2 = {'total': [], 'twobyte': [], 'fourbyte': [], 'cumulative': []}
var chartsarray = {}
var itemfields = {'asn': ['total', 'twoByte', 'fourByte', 'count'], 'ipv4': ['total', 'twentyFourBit', 'twentyFourBit', 'count'], 'ipv6': ['thirtyTwoBit', 'fourtyEightBit', 'total', 'count']}
function drawChart1 (mydata, id) {
  chartsarray[id] = Highcharts.chart(id, {
    chart: {
      type: 'column'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: [2008, 2009, 2010, 2011, 2012]
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Count(Thousands of Unique Numbers)'
      },
      stackLabels: {
        enabled: false,
        style: {
          fontWeight: 'bold',
          color: 'gray'
        }
      }
    },
    legend: {
      enabled: false,
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: false,
          color: 'white'
        }
      }
    },
    series: mydata
  })
  chartsarray[id].redraw()
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
    maincontainer.parentNode.style.height = window.innerHeight * 0.8 + 'px'
    document.getElementById(id + 'parent').style.height = '80%'
    document.getElementById(id + 'box').style.height = '100%'
  } else {
    maincontainer.className = 'col-sm-6 col-xs-12 col-lg-4 chart_container'
    document.getElementById(id + 'parent').style.height = '80%'
    document.getElementById(id + 'box').style.height = '800px'
    for (i = 0; i < container.length; i++) {
      container[i].style.display = 'block'
    }
  }
  fullwindowflag = !fullwindowflag
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
