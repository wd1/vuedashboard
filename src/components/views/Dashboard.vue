<template>
  <!-- Main content -->
  <section class="content">
    <div class="col-sm-12 col-xs-12"></div>
    <div id="asntbycontainer" class="col-sm-6 col-xs-12 col-lg-4 chart_container"  style="">
      <div id="asntbybox" class="box" style="border-radius: 10px;
    border: 1px solid black;    min-height: 300px;height: 371px;">
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
          <div id="asntbyparent" class="box-body" style="    min-height: 300px;height: 371px;">
              
          </div>
        </div>
      </div>
    </div>
    <div id="asnbscontainer" class="col-sm-6 col-xs-12 col-lg-4 chart_container"  style="">
      <div id="asnbsbox" class="box" style="border-radius: 10px;
    border: 1px solid black;    min-height: 300px;height: 371px;">
        <div class="box-header with-border" style="text-align: center;height: 100%;">
          <h3 class="box-title" style="font-weight: bold;" >ASN by Subregion</h3>
          <div style="float:right;font-size: 12px;">
            <span class="fullview-toggle fa fa-expand" data='asnbs'></span>
          </div>
          <div  id="asnbsparent" class="box-body" style="    min-height: 300px;height: 371px;">
          </div>
        </div>
      </div>
    </div>
    <div id="ipv4tbycontainer" class="col-sm-6 col-xs-12 col-lg-4 chart_container"  style="">
      <div id="ipv4tbybox" class="box" style="border-radius: 10px;
    border: 1px solid black;    min-height: 300px;height: 371px;">
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
          <div id="ipv4tbyparent" class="box-body" style="    min-height: 300px;height: 371px;">
              
          </div>
        </div>
      </div>
    </div>
    <div id="ipv4bscontainer" class="col-sm-6 col-xs-12 col-lg-4 chart_container"  style="">
      <div id="ipv4bsbox" class="box" style="border-radius: 10px;
    border: 1px solid black;    min-height: 300px;height: 371px;">
        <div class="box-header with-border" style="text-align: center;height: 100%;">
          <h3 class="box-title" style="font-weight: bold;" >IPv4 by Subregion</h3>
          <div style="float:right;font-size: 12px;">
            <span class="fullview-toggle fa fa-expand" data='ipv4bs'></span>
          </div>
          <div  id="ipv4bsparent" class="box-body" style="    min-height: 300px;height: 371px;">
          </div>
        </div>
      </div>
    </div>
    <div id="ipv6tbycontainer" class="col-sm-6 col-xs-12 col-lg-4 chart_container"  style="">
      <div id="ipv6tbybox" class="box" style="border-radius: 10px;
    border: 1px solid black;    min-height: 300px;height: 371px;">
        <div class="box-header with-border" style="text-align: center;height: 100%;">
          <h3 class="box-title" style="font-weight: bold;" >IPv6/32 by Year</h3>
          <div style="float:right;font-size: 12px;">
            <span class="fullview-toggle fa fa-expand" data='ipv6tby'></span>
          </div>
          <form name="myForm" action="" style="margin-top: 10px;font-size: 14px;">
            <input type="radio" name="ipv6tby" value="total" checked="checked"> /32
            <input type="radio" name="ipv6tby" value="twobyte" > /48
            <input type="radio" name="ipv6tby" value="fourbyte" > delegation
            <div style="display: inline;float: right;">
              <input type="radio" name="ipv6tby" value="cumulative" style="" > Cumulative
            </div>
          </form>
          <div id="ipv6tbyparent" class="box-body" style="    min-height: 300px;height: 371px;">
              
          </div>
        </div>
      </div>
    </div>
    <div id="ipv6bscontainer" class="col-sm-6 col-xs-12 col-lg-4 chart_container"  style="">
      <div id="ipv6bsbox" class="box" style="border-radius: 10px;
    border: 1px solid black;    min-height: 300px;height: 371px;">
        <div class="box-header with-border" style="text-align: center;height: 100%;">
          <h3 class="box-title" style="font-weight: bold;" >IPv6 by Subregion (/32)</h3>
          <div style="float:right;font-size: 12px;">
            <span class="fullview-toggle fa fa-expand" data='ipv6bs'></span>
          </div>
          <div  id="ipv6bsparent" class="box-body" style="    min-height: 300px;height: 371px;">
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
import Chart from 'chart.js'
import axios from 'axios'

var fields = ['EASTERN ASIA', 'SOUTH-EASTERN ASIA', 'OCEANIA', 'SOUTHERN ASIA']
var colors = ['#3366cc', '#dc3912', '#ff9900', '#109618']
var totaldata = []
var data = {'total': [], 'twobyte': [], 'fourbyte': [], 'cumulative': []}

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
      maintainAspectRatio: !(window.innerWidth <= 800 && window.innerHeight <= 600),
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
    console.log(id + 'container')
    maincontainer.style.display = 'block'
    maincontainer.className += ' fullwindow'
    document.getElementById(id + 'parent').style.height = '100%'
    document.getElementById(id + 'box').style.height = '100%'
  } else {
    maincontainer.className = 'col-sm-6 col-xs-12 col-lg-4 chart_container'
    document.getElementById(id + 'parent').style.height = '371px'
    document.getElementById(id + 'box').style.height = '371px'
    for (i = 0; i < container.length; i++) {
      container[i].style.display = 'block'
    }
  }
  fullwindowflag = !fullwindowflag
}
function drawChart2 (data1, id) {
  var canvas = document.createElement('canvas')
  document.getElementById(id).innerHTML = ''
  document.getElementById(id).appendChild(canvas)
  var piedata = []
  for (var i = 0; i < data1.length; i++) {
    var sum = 0
    for (var j = 0; j < data1[i].data.length; j++) {
      sum = sum + data1[i].data[j]
    }
    piedata.push(sum)
  }
  var ctx = canvas.getContext('2d')
  var config = {
    type: 'pie',
    data: {
      labels: fields,
      datasets: [{
        label: 'CoPilot',
        backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
        data: piedata
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: !(window.innerWidth <= 800 && window.innerHeight <= 600),
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

function readData (data, year) {
  axios.get('https://apnic-api.synthmeat.com/v2/apnic/asn/assigned,allocated/' + year + '/Eastern%20Asia,South-Eastern%20Asia,Oceania,Southern%20Asia?groupBy=subregion')
  .then(response => {
    totaldata.push(response.data)
    if (year < 2012) {
      readData(data, year + 1)
    } else {
      for (var j = 0; j < fields.length; j++) {
        data.total.push({'label': fields[j], 'data': [], backgroundColor: [], borderColor: [], borderWidth: 2})
        data.twobyte.push({'label': fields[j], 'data': [], backgroundColor: [], borderColor: [], borderWidth: 2})
        data.fourbyte.push({'label': fields[j], 'data': [], backgroundColor: [], borderColor: [], borderWidth: 2})
        data.cumulative.push({'label': fields[j], 'data': [], backgroundColor: [], borderColor: [], borderWidth: 2})
      }
      console.log(totaldata)
      for (var i = 0; i < totaldata.length; i++) {
        for (j = 0; j < fields.length; j++) {
          data.total[j].data.push(totaldata[i][fields[j]].asn.total)
          data.total[j].backgroundColor.push(colors[j])
          data.total[j].borderColor.push('none')
          data.twobyte[j].data.push(totaldata[i][fields[j]].asn.twoByte)
          data.twobyte[j].backgroundColor.push(colors[j])
          data.twobyte[j].borderColor.push('none')
          data.fourbyte[j].data.push(totaldata[i][fields[j]].asn.fourByte)
          data.fourbyte[j].backgroundColor.push(colors[j])
          data.fourbyte[j].borderColor.push('none')
          data.cumulative[j].data.push(totaldata[i][fields[j]].asn.fourByte)
          data.cumulative[j].backgroundColor.push(colors[j])
          data.cumulative[j].borderColor.push('none')
        }
      }
      drawChart1(data.total, 'asntbyparent')
      drawChart1(data.total, 'ipv4tbyparent')
      drawChart1(data.total, 'ipv6tbyparent')
      drawChart2(data.total, 'asnbsparent')
      drawChart2(data.total, 'ipv4bsparent')
      drawChart2(data.total, 'ipv6bsparent')
      var rad = document.getElementsByName('asntby')
      for (i = 0; i < rad.length; i++) {
        rad[i].onclick = function () {
          drawChart1(data[this.value], 'asntbyparent')
        }
      }
      var rad1 = document.getElementsByName('ipv4tby')
      for (i = 0; i < rad1.length; i++) {
        rad1[i].onclick = function () {
          drawChart1(data.total, 'ipv4tbyparent')
        }
      }
      var rad2 = document.getElementsByName('ipv6tby')
      for (i = 0; i < rad2.length; i++) {
        rad2[i].onclick = function () {
          drawChart1(data.total, 'ipv6tbyparent')
        }
      }
      var zoom = document.getElementsByClassName('fullview-toggle fa fa-expand')
      for (i = 0; i < zoom.length; i++) {
        zoom[i].onclick = function () {
          console.log(this.getAttribute('data'))
          fullWindow(this.getAttribute('data'))
        }
      }
      console.log(zoom)
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
      readData(data, 2008)
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
