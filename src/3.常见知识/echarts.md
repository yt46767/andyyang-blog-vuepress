## echarts 文字 调大

http://t.zoukankan.com/surplus-p-12387569.html



## echart 坐标 全展示

```
  xAxis: [
    {
      type: 'category',
      data: ['利息\n（借货利息、金库存货利息）', '招待', '差旅', '其它'],
      axisPointer: {
        type: 'shadow'
      },
      axisLabel: {
        show: true, //默认为true，设为false后下面都没有意义了 
        interval: 0, //此处关键， 设置文本标签全部显示 
        // rotate: 45, //标签旋转角度，对于长文本标签设置旋转可避免文本重叠 
        textStyle: {
          fontSize: '16px',
        }
      }
    }
  ],
```

关键设置：

​    show: true, //默认为true，设为false后下面都没有意义了 
​    interval: 0, //此处关键， 设置文本标签全部显示 
​    // rotate: 45, //标签旋转角度，对于长文本标签设置旋转可避免文本重叠 
​    

## echart 坐标  左移

padding: [0, 0, 0, -10],    // 四个数字分别为上右下左与原位置距离

## echarts 某条线 显示 在图形上方

放到series的最上面节点

  series: [
        {
      name: '展销效益',
      type: 'line',
      color: '#999',
      // markLine:{
        // zlevel: 2,
        // z: 2,
      // },
      // stack: 'Total',
    //   labelLine:{			// 标签的视觉引导线配置
  		// // 	show:true,		// 是否显示视觉引导线
  		// 	showAbove:true,	// 是否显示在图形上方
    //   },
      data: [2, 3, 1, 4, 0, 5, 1],
    },
    {
      name: '展销收益（按提成+高开计算）',
      type: 'bar',
      emphasis: {
        focus: 'series'
      },
      data: [30, 32, 31, 34, 39, 33, 32]
    },
    {
      name: '营销中心（区域）应承担费用',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [12, 13, 11, 14, 9, 23, 21]
    },
    {
      name: '退货费用',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [22, 18, 19, 24, 20, 30, 30]
    },
  ]
};