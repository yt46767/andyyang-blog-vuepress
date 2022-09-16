## 定义画图类型
https://www.highcharts.com.cn/docs/chart-types

## x轴坐标刻度值设置

方法：

`categories: ['12:00:00', '13:10:00', '14:20:00', '15:30:00', '16:40:00', '17:50:00', '18:60:00', '19:70:00']`

示例：

```
 // X轴
    xAxis: {
        title: {
            text: ''
        },
        // 数据项
        categories: ['12:00:00', '13:10:00', '14:20:00', '15:30:00', '16:40:00', '17:50:00', '18:60:00', '19:70:00']
        // time = Date.UTC(2013,11,14,0,0,0,0);  // UTC格式时间戳
    },
```



## 改变图的线柱颜色

方法：

 `color: "#b0b0b0", `

示例：

```
series: [{ 
   name: 'A', 
   color: "#b0b0b0", 
   data: [[38,42],[39,39],[35,45],[35,54],{x:36,y:35,marker:{radius:8,symbol:'circle'}} 
   ] 
   }, { 
   name: 'B', 
   color: "#b0b0b0", 
   data: [[46,56],[47,67],[48,69],[50,55],{x:52,y:57,marker:{radius:8,symbol:'circle'}} 
   ] 
   }] 
  }); 
```

## 多线图-30个标签 legend
![image-20210831173503538](https://gitee.com/yt46767/doc/raw/master/image-20210831173503538.png)

var chart = Highcharts.chart('container', {
    title: {
        text: ''
    },
    // subtitle: {
    //     text: '数据来源：thesolarfoundation.com'
    // },
    yAxis: {
        title: {
            text: '就业人数'
        }
    },
    // legend: {
    //     layout: 'horizontal',
    //     align: 'top',
    //     verticalAlign: 'top'
    // },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },
    series: [{
        name: '黑龙江1',
        data: [1, 2, 3, 4, 5, 6, 7, 8]
    }, {
        name: '黑龙江2',
        data: [22, 5, 33, 12, 32, 11, 12, 3]
    }, {
        name: '黑龙江3',
        data: [2, 7, 8, 97, 6, 45, 56, 7]
    }, {
        name: '黑龙江4',
        data: [23, 45, 5, 44, 34, 25, 42, 4]
    }, {
        name: '黑龙江5',
        data: [4, 6, 6, 3, 2, 12, 33, 3]
    },{
        name: '黑龙江6',
        data: [13, 22, 34, 24, 55, 86, 7, 28]
    }, {
        name: '黑龙江7',
        data: [1, 13, 3, 4, 2, 11, 9, 31]
    }, {
        name: '黑龙江8',
        data: [21, 7, 38, 7, 6, 5, 6, 7]
    }, {
        name: '黑龙江9',
        data: [2, 4, 5, 44, 4, 2, 42, 4]
    }, {
        name: '黑龙江10',
        data: [14, 6, 36, 3, 2, 2, 33, 13]
    },{
        name: '黑龙江11',
        data: [1, 12, 3, 4, 15, 6, 7, 18]
    }, {
        name: '黑龙江12',
        data: [22, 1, 33, 12, 32, 11, 12, 3]
    }, {
        name: '黑龙江13',
        data: [2, 7, 8, 97, 6, 45, 56, 7]
    }, {
        name: '黑龙江14',
        data: [23, 45, 5, 44, 34, 25, 42, 4]
    }, {
        name: '黑龙江15',
        data: [4, 6, 6, 3, 2, 12, 33, 3]
    },{
        name: '黑龙江16',
        data: [13, 22, 34, 24, 55, 86, 7, 28]
    }, {
        name: '黑龙江17',
        data: [1, 13, 3, 14, 2, 11, 9, 31]
    }, {
        name: '黑龙江18',
        data: [21, 7, 38, 7, 6, 15, 6, 17]
    }, {
        name: '黑龙江19',
        data: [12, 4, 15, 44, 4, 12, 42, 4]
    }, {
        name: '黑龙江20',
        data: [14, 6, 36, 3, 2, 2, 33, 13]
    },{
        name: '黑龙江21',
        data: [4, 25, 8, 6, 13, 6, 01, 14]
    }, {
        name: '黑龙江22',
        data: [22, 11, 33, 44, 32, 66, 12, 33]
    }, {
        name: '黑龙江23',
        data: [21, 7, 81, 97, 46, 45, 55, 7]
    }, {
        name: '黑龙江24',
        data: [1, 1, 5, 44, 34, 25, 42, 4]
    }, {
        name: '黑龙江25',
        data: [4, 44, 44, 3, 2, 66, 33, 3]
    },{
        name: '黑龙江26',
        data: [3, 22, 44, 24, 55, 11, 7, 28]
    }, {
        name: '黑龙江27',
        data: [9, 13, 55, 4, 33, 11, 77, 31]
    }, {
        name: '黑龙江28',
        data: [77, 7, 11, 7, 61, 5, 16, 7]
    }, {
        name: '黑龙江29',
        data: [21, 14, 5, 23, 54, 12, 42, 44]
    }, {
        name: '黑龙江30',
        data: [14, 64, 36, 23, 2, 42, 1, 13]
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            // chartOptions: {
            //     legend: {
            //         layout: 'horizontal',
            //         align: 'top',
            //         verticalAlign: 'top'
            //     }
            // }
        }]
    }
});

## 标签旋转

	xAxis: {
		type: 'category',
		labels: {
			rotation: 45  // 设置轴标签旋转角度
		}
	},

![img](https://gitee.com/yt46767/doc/raw/master/企业微信截图_16304027797572.png)

![img](https://gitee.com/yt46767/doc/raw/master/企业微信截图_16304027958761.png)

## highchart右倾斜45度

```
xAxis: {
    labels: {
    	rotation: -45  // 设置轴标签旋转角度
    }
},
```

## highchart增加legend

```
legend: {
    enabled: true,
    verticalAlign: 'bottom'
},
```

## 动态创建多个图表

数据：

```
bht: [{
        'type_tr': 'A',
        'datax': [
          1000, 100, 1200
        ],
        'datay': ['零件01', '零件03', '零件05']
      }, {
        'type_tr': 'B',
        'datax': [2000],
        'datay': ['零件02']
      }, {
        'type_tr': 'C',
        'datax': [1100, 3200],
        'datay': [
          '零件04', '零件06'
        ]
      }, {
        'type_tr': 'C',
        'datax': [1100, 3200],
        'datay': [
          '零件04', '零件06'
        ]
      }, {
        'type_tr': 'C',
        'datax': [1100, 3200],
        'datay': [
          '零件04', '零件06'
        ]
      }]
```

HTML:

```
<div id="test" style="border:1px dashed #000;text-align:center;"></div>
```

js:

```
	get_div () {
      var divTest = document.getElementById('test')
      console.log(divTest)
      for (let i = 0; i < this.bht.length; i++) {
        var oDiv = document.createElement('div')
        oDiv.id = 'bht' + i
        oDiv.style = 'width:19%;height:200px;text-align:center;display: inline-block;margin-right:1%'
        divTest.appendChild(oDiv)
        this.empStatices('bht' + i, this.bht[i]) //每次遍历时执行empStatices方法
      }
    },
    //每次遍历时生成highcharts图
	empStatices (id, data) {
      Highcharts.chart(id, {
        title: {
          text: data.type_tr
        },
        xAxis: {
          categories: data.datay,
          tickInterval: 0,
          crosshair: true,
          title: {
            text: '日期'
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: data.type_tr
          }
        },
        plotOptions: {
          areaspline: {
            fillOpacity: 0.5
          }
        },
        series: [{
          name: data.type_tr,
          data: data.datax
        }]
      })
    }
```

效果图：

![img](https://img-blog.csdnimg.cn/20210617145025278.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODQ1NTIz,size_16,color_FFFFFF,t_70#pic_center)

https://blog.csdn.net/qq_45845523/article/details/117993540

## 词云 横向 不竖立

https://blog.csdn.net/gyysmile/article/details/103628927

## highcharts-词云配置：
https://blog.csdn.net/gyysmile/article/details/103628927
