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
          <div id="asntbyparent" class="box-body" style="height: 80%;">            
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
          <div  id="asnbsparent" class="box-body" style="height: 80%;margin-top:5%;">
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
          <div id="ipv4tbyparent" class="box-body" style="height: 80%;">
              
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
          <div  id="ipv4bsparent" class="box-body" style="height: 80%;margin-top:5%;">
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
          <div id="ipv6tbyparent" class="box-body" style="height: 80%;">
              
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
          <div  id="ipv6bsparent" class="box-body" style="height: 80%;margin-top:5%;">
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
