//监控区域模块制作

(function() {
    $(".monitor .tabs").on("click", "a", function() {
            $(this).addClass('active').siblings('a').removeClass('active');
            //当前添加active  他的兄弟删除active

            var index = $(this).index();
            //选取对应索引号的content
            $(".monitor .content").eq(index).stop().show().siblings(".content").stop().hide();
        })
        //无缝滚动  复制 row
    $(".marquee-view .marquee").each(function(i, e) {
        // 其实吧：  $(this) ==$(e)
        var rows = $(this).children().clone();
        $(this).append(rows);
    })
})(),
// 点位分析模块  ---南丁格尔玫瑰图
(function() {

    //1:实例化对象

    //2:指定配置项和数据
    //3: 传递数据
    var myChart = echarts.init(document.querySelector(".pie"));
    var option;

    option = {
        // tooltip 和 series
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        }
        //color 与 tooltip 同级别
        ,
        series: [{
            name: '点位模式',
            type: 'pie',
            radius: ["10%", "70%"], //“10%”，“70%” ---百分比 得加 ""
            //  radius 数组：  第一个 小圆 ，第二个  大圆  //也可以写百分比
            center: ['50%', '50%'],
            //  距离容器 ....的位置 ： 中心位置
            roseType: 'radius', //radius半径模式：    另一种是   area面积模式

            label: {
                show: true,
                fontSize: 10,

            },
            labelLine: {
                length: 6,
                length2: 7
                    //两条线：  length  length2

            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                { value: 40, name: '云南' },
                { value: 33, name: '北京' },
                { value: 28, name: '山东' },
                { value: 22, name: '广州' },
                { value: 20, name: '中山' },
                { value: 15, name: '杭州' },
                { value: 12, name: '苏州' },
                { value: 10, name: '上海' }
            ]

            //怎样把 字体  和 引导线修改？
        }]
    };

    option && myChart.setOption(option);
    // 这里是利用 逻辑 与


    //4:图标和 屏幕一同缩放
    window.addEventListener("resize", function() {
        // resize 事件
        myChart.resize();
        // ele.resize 事件---- 可以使   ele 和 浏览器 等比例缩放
    })
})(),

//  全国用户总量统计
(function() {
    var item = {
        name: '',
        value: 400,
        itemStyle: {
            color: "grey"
        }, //鼠标放到柱子上 不想高亮显示
        emphasis: {
            itemStyle: {
                color: "grey"
            }
        },
        tooltip: {
            extraCssText: "opacity:0"
        }

    }
    var chartDom = document.getElementById('bar');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        color: new echarts.graphic.LinearGradient(
            //  {x1,y1} 点到点 (x2,y2)之间进行渐变,
            0, 0, 0, 1, [
                { offset: 0, color: "#00fffb" }, // 0起始颜色
                { offset: 1, color: "#0061ce" } //1 结束颜色
            ]
        ),

        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: true //显示网格
                ,
            borderColor: "white"
        },
        xAxis: [{
            type: 'category',
            data: ['北京', '上海', '深圳', '天京', '广州', '中山', '厦门'],
            axisTick: {
                alignWithLabel: true,
                // 刻度  ---显示  true  居中显示
                //把X轴的刻度隐藏起来
                show: false
            },
            //修改文字颜色  axisLabel 对象设置
            axisLabel: {
                color: "#4c9bfd",

            },
            //X轴线的颜色
            axisLine: {
                lineStyle: {
                    color: "white"
                }
            }

        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                color: "#4c9bfd",

            },
            //y轴线的颜色
            axisLine: {
                lineStyle: {
                    color: "white"
                }
            },
            //y轴 刻度
            axisTick: {
                alignWithLabel: true,
                // 刻度  ---显示  true  居中显示
                //把X轴的刻度隐藏起来
                show: false
            },
            splitLine: {
                llineStyle: {
                    color: "white",
                }
            }
        }],
        series: [{
            name: '信息',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, item, item, 390, 330, 220]
        }]
    };

    option && myChart.setOption(option);
    //4:图标和 屏幕一同缩放
    window.addEventListener("resize", function() {
        // resize 事件
        myChart.resize();
        // ele.resize 事件---- 可以使   ele 和 浏览器 等比例缩放
    })

})(),
//订单模块
(function() {

})(),
//销售统计模块
(function() {
    //线性图表
    var chartDom = document.querySelector(".line");
    var myChart = echarts.init(chartDom);
    var option;
    var datas = {
        year: [
            [
                24, 30, 12, 125, 122, 31, 23, 124, 14, 23, 12, 99
            ],
            [12, 52, 56, 12, 44, 66, 112, 44, 55, 24, 11, 46]
        ],
        quarter: [
            [24, 30, 12, 125, 122, 31, 23, 19, 74, 23, 12, 99],
            [12, 52, 88, 12, 42, 16, 112, 44, 55, 24, 11, 46]
        ],
        month: [
            [24, 30, 12, 125, 122, 31, 23, 19, 74, 23, 12, 99],
            [24, 30, 12, 125, 122, 31, 23, 124, 14, 23, 12, 99]
        ],
        week: [
            [24, 30, 12, 125, 122, 31, 23, 124, 14, 23, 12, 99],
            [12, 52, 88, 12, 42, 16, 112, 44, 55, 24, 11, 46]
        ]


    }
    option = {
        color: ["#e71b1b", "#68d8fe"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: 'axis'
        },
        //如何修改 线图大小呢？  grid！
        legend: {
            //图例组件  位置  文字颜色
            right: "10%", //距离容器 10%
            //如果 series  里面设置了name  此时 图例组件的 data 可以省略
            // data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'], //文字....
            textStyle: {
                color: "#4c9bfd",
            }
        },
        grid: {
            top: "20%",
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,
            borderColor: "#012f4a",
            containLabel: true //显示标签
        },

        xAxis: {
            // 去除刻度，x轴刻度标签字体颜色#4c9bfd
            // 剔除坐标轴颜色  （将来使用Y轴分割线）
            //   轴两端不需要内间距，boundaryGap
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                show: false //去除刻度
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: {
                show: false //去除轴线
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false //去除刻度
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            splitLine: {
                lineStyle: {
                    color: "#4c9bfd"
                }
            }

        },
        series: [{
                name: 'Direct',
                type: 'line',
                //这里不能用 stack  数据堆叠  //如果启用了  两条线  就永远都不会相交
                data: datas.year[0],
                //光滑曲线
                smooth: true,
            },
            {
                name: 'Search Engine',
                type: 'line',

                data: datas.year[1],
                smooth: true,
            }
        ]
    };

    option && myChart.setOption(option);

    //切换功能
    $(".sales .caption").on("click", "a", function() {
        //点击当前 a 高亮显示  调用active
        $(this).addClass('active').siblings('a').removeClass('active');
        //自定义 h5 属性  data-name   然后通过  dataset.type  获得h5属性  data-type
        // 为啥那么需要这个？因为：  数据用 对象存储
        console.log(this);
        var arr = datas[this.dataset.type]; //为什么这里是 this  同时也是原生js嘛  ----这里的this 指的是 当前点击事件的对象
        //上面那个 $(this) 也是指 a  但是 首先得利用 $ 将其转化为jQ对象 才能使用JQ方法

        $.each(option.series, function(i, e) {
                e.data = arr[i];
            })
            //重点： option的值发生了变化  需要重新渲染一下！ 也就是 setOption  one more time！
        myChart.setOption(option);
        index = $(this).index() - 1; //这里 相当于获取当前索引号，给下面计时器里面的 index 重新定位
        //切记JS  声明  和 定义 的不同!   与  执行顺序
        //小重点：  $(thix).index()  获取元素的索引号: 但是 一视同仁嗷

    });
    var as = $(".sales .caption a");
    //自动切换功能
    var index = 0;
    var timer = setInterval(function() {
            index++;
            if (index >= 4) { index = 0 };
            as.eq(index).click();

        }, 1000)
        //鼠标和经过离开
    $(".sales ").hover(function() {
            clearInterval(timer);
        }, function() {
            clearInterval(timer); //老规矩  定时器 清除
            timer = setInterval(function() {
                index++;
                if (index >= 4) { index = 0 };
                as.eq(index).click();

            }, 1000)
        })
        //4:图标和 屏幕一同缩放
    window.addEventListener("resize", function() {
        // resize 事件
        myChart.resize();
        // ele.resize 事件---- 可以使   ele 和 浏览器 等比例缩放
    })
})()

, (function() {
    var chartDom = document.querySelector(".radar");
    var myChart = echarts.init(chartDom);
    var option;

    // Schema:
    // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
    const dataBJ = [

        [108, 79, 120, 1.7, 75, 41, 14],
        [108, 63, 116, 1.48, 44, 26, 15],

    ];

    const lineStyle = {
        width: 1,
        opacity: 0.5
    };
    option = {
        backgroundColor: '#161627',
        radar: {
            tooltip: {
                show: true
                    //怎么控制提示框位置？
                    ,
                position: ["60%", "10%"]
            },
            radius: "60%",
            indicator: [
                { name: '地铁', max: 300 },
                { name: '机场', max: 250 },
                { name: '地铁', max: 300 },
                { name: 'CO', max: 5 },
                { name: 'NO2', max: 200 },
                { name: 'SO2', max: 100 }
            ],
            shape: 'circle',
            splitNumber: 4, //分隔段数
            axisName: {
                color: 'rgb(238, 197, 102)'
            },
            //name
            name: {
                textStyle: {
                    color: "#4c9bfd" //雷达图文字的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    // color: [
                    //         'rgba(238, 197, 102, 0.1)',
                    //         'rgba(238, 197, 102, 0.2)',
                    //         'rgba(238, 197, 102, 0.4)',
                    //         'rgba(238, 197, 102, 0.6)',
                    //         'rgba(238, 197, 102, 0.8)',
                    //         'rgba(238, 197, 102, 1)'
                    //         // 这里的线条  指的是 分割线：  也就是圆圈个数
                    //     ].reverse() //反转 是干啥的
                    color: "rgba(255,255,255,0.5)"
                }
            },
            splitArea: {
                show: false
            },
            axisLine: { //坐标轴： 竖着的线
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.6)'
                }
            }
        },
        series: [{
                name: 'Beijing',
                type: 'radar',
                lineStyle: {
                    color: "fff",
                    width: 1,
                    opacity: 0.5
                        //线条的样式设置
                },
                data: dataBJ,
                //设置图形标记（拐点）
                symbol: 'circle',
                symbolSize: 4,

                itemStyle: {
                    color: '#fff' //设置小圆点颜色
                },
                //让小圆点显示数据
                label: {
                    show: true //显示
                        ,
                    fontSize: 10,
                },
                //修饰我们区域填充的背景颜色
                areaStyle: {
                    opacity: 0.2 //不透明度
                        ,
                    color: "ragb(238,197,102,0.5)" //背景颜色
                }
            },

        ]
    };

    option && myChart.setOption(option);
    //4:图标和 屏幕一同缩放
    window.addEventListener("resize", function() {
        // resize 事件
        myChart.resize();
        // ele.resize 事件---- 可以使   ele 和 浏览器 等比例缩放
    })
})(),
//进度销售图表
(function() {
    var chartDom = document.querySelector(".gauge");
    var myChart = echarts.init(chartDom);
    var option;

    option = {

        series: [{
            hoverOffset: 0,
            type: 'pie',
            radius: ['130%', '150%'], //修改大小  半径     内圆---外园
            center: ["45%", "80%"], // 中心位置
            // avoidLabelOverlap: false, 是否有重叠策略
            itemStyle: {},
            // label: {
            //     show: false,
            //     position: 'center'
            // },
            // emphasis: {
            //     label: {
            //         show: true,
            //         fontSize: '40',
            //         fontWeight: 'bold'
            //     }
            // },
            labelLine: {
                show: false // 不需要连接线
            },
            startAngle: 180, //饼形图的起始角度为 180   不是旋转角度!
            data: [{
                    value: 100,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: "#00c9e0" }, { offset: 1, color: "#005fc1" }
                        ])
                    }
                }, //修改渐变颜色
                {
                    value: 100,
                    itemStyle: {
                        color: "#11274d"
                    }
                },
                {
                    value: 200,
                    itemStyle: {
                        color: "transparent"
                    }
                },
                //有多少数据 就有多少段内容： 划分三段： 然后使 下面的50% 透明
            ]

            //4：鼠标经过无需放大


        }]

    };

    option && myChart.setOption(option);
    window.addEventListener("resize", function() {
        // resize 事件
        myChart.resize();
        // ele.resize 事件---- 可以使   ele 和 浏览器 等比例缩放
    })
})()