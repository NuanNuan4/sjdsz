// 导航功能
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');
const chartPreviews = document.querySelectorAll('.chart-preview');

// 导航点击事件
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = link.getAttribute('data-section');
        
        // 更新导航状态
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
        
        // 显示对应内容
        contentSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetSection) {
                section.classList.add('active');
            }
        });
    });
});

// 首页预览点击事件
chartPreviews.forEach(preview => {
    preview.addEventListener('click', () => {
        const targetSection = preview.getAttribute('data-section');
        const correspondingLink = document.querySelector(`[data-section="${targetSection}"]`);
        if (correspondingLink) {
            correspondingLink.click();
        }
    });
});

// 基础折线图
function initBasicLineChart() {
    const data = [
        {
            x: [1, 2, 3],
            y: [10, 8, 7],
            type: 'scatter',
            mode: 'lines+markers',
            name: '第一条线',
            line: { color: '#9370db', width: 3 },
            marker: { size: 8 }
        },
        {
            x: [1, 2, 3],
            y: [4, 5, 6],
            type: 'scatter',
            mode: 'lines+markers',
            name: '第二条线',
            line: { color: '#8a2be2', width: 3 },
            marker: { size: 8 }
        },
        {
            x: [1, 2, 3],
            y: [7, 8, 9],
            type: 'scatter',
            mode: 'lines+markers',
            name: '第三条线',
            line: { color: '#da70d6', width: 3 },
            marker: { size: 8 }
        }
    ];

    const layout = {
        title: '基础折线图',
        xaxis: { title: 'X轴' },
        yaxis: { title: 'Y轴' },
        plot_bgcolor: '#f8f4ff',
        paper_bgcolor: '#f8f4ff',
        font: { color: '#333' },
        showlegend: true
    };

    Plotly.newPlot('basic-line-chart', data, layout, { responsive: true });
}

function updateBasicLineChart() {
    const newData = [
        {
            x: [1, 2, 3],
            y: Array.from({length: 3}, () => Math.floor(Math.random() * 20) + 5),
            type: 'scatter',
            mode: 'lines+markers',
            name: '随机数据1',
            line: { color: '#9370db', width: 3 },
            marker: { size: 8 }
        },
        {
            x: [1, 2, 3],
            y: Array.from({length: 3}, () => Math.floor(Math.random() * 20) + 5),
            type: 'scatter',
            mode: 'lines+markers',
            name: '随机数据2',
            line: { color: '#8a2be2', width: 3 },
            marker: { size: 8 }
        }
    ];

    Plotly.react('basic-line-chart', newData);
}

// 温度折线图
function initTemperatureChart() {
    const days = Array.from({length: 15}, (_, i) => i + 4);
    const y_max = [32, 33, 34, 34, 33, 31, 30, 29, 30, 29, 26, 23, 21, 25, 31];
    const y_min = [19, 19, 20, 22, 22, 21, 22, 16, 18, 18, 17, 14, 15, 16, 16];

    const data = [
        {
            x: days,
            y: y_max,
            type: 'scatter',
            mode: 'lines+markers',
            name: '最高温度',
            line: { color: '#ff6b6b', width: 3 },
            marker: { size: 6 }
        },
        {
            x: days,
            y: y_min,
            type: 'scatter',
            mode: 'lines+markers',
            name: '最低温度',
            line: { color: '#4ecdc4', width: 3 },
            marker: { size: 6 }
        }
    ];

    const layout = {
        title: '未来15天温度趋势',
        xaxis: { title: '天数' },
        yaxis: { title: '温度 (°C)' },
        plot_bgcolor: '#f8f4ff',
        paper_bgcolor: '#f8f4ff',
        font: { color: '#333' }
    };

    Plotly.newPlot('temperature-chart', data, layout, { responsive: true });
}

function updateTemperatureChart() {
    const showMax = document.getElementById('show-max-temp').checked;
    const showMin = document.getElementById('show-min-temp').checked;
    
    const days = Array.from({length: 15}, (_, i) => i + 4);
    const newData = [];

    if (showMax) {
        newData.push({
            x: days,
            y: Array.from({length: 15}, () => Math.floor(Math.random() * 15) + 20),
            type: 'scatter',
            mode: 'lines+markers',
            name: '最高温度',
            line: { color: '#ff6b6b', width: 3 },
            marker: { size: 6 }
        });
    }

    if (showMin) {
        newData.push({
            x: days,
            y: Array.from({length: 15}, () => Math.floor(Math.random() * 10) + 10),
            type: 'scatter',
            mode: 'lines+markers',
            name: '最低温度',
            line: { color: '#4ecdc4', width: 3 },
            marker: { size: 6 }
        });
    }

    Plotly.react('temperature-chart', newData);
}

// 基础柱状图
function initBasicBarChart() {
    const categories = ['a', 'b', 'c', 'd', 'e'];
    const values = [10, 8, 7, 11, 13];

    const data = [{
        x: categories,
        y: values,
        type: 'bar',
        marker: {
            color: ['#9370db', '#8a2be2', '#da70d6', '#ba55d3', '#9932cc'],
            line: {
                color: 'white',
                width: 2
            }
        }
    }];

    const layout = {
        title: '基础柱状图',
        xaxis: { title: '类别' },
        yaxis: { title: '数值' },
        plot_bgcolor: '#f8f4ff',
        paper_bgcolor: '#f8f4ff'
    };

    Plotly.newPlot('basic-bar-chart', data, layout, { responsive: true });
}

function updateBasicBarChart() {
    const categories = ['a', 'b', 'c', 'd', 'e'];
    const newValues = Array.from({length: 5}, () => Math.floor(Math.random() * 20) + 5);

    const newData = [{
        x: categories,
        y: newValues,
        type: 'bar',
        marker: {
            color: ['#9370db', '#8a2be2', '#da70d6', '#ba55d3', '#9932cc'],
            line: {
                color: 'white',
                width: 2
            }
        }
    }];

    Plotly.react('basic-bar-chart', newData);
}

// 堆积柱状图
function initStackedBarChart() {
    const categories = ['a', 'b', 'c', 'd', 'e'];
    const y1 = [10, 8, 7, 11, 13];
    const y2 = [9, 6, 5, 10, 12];

    const data = [
        {
            x: categories,
            y: y1,
            type: 'bar',
            name: '第一组',
            marker: { color: '#9370db' }
        },
        {
            x: categories,
            y: y2,
            type: 'bar',
            name: '第二组',
            marker: { color: '#8a2be2' }
        }
    ];

    const layout = {
        title: '堆积柱状图',
        barmode: 'stack',
        xaxis: { title: '类别' },
        yaxis: { title: '数值' },
        plot_bgcolor: '#f8f4ff',
        paper_bgcolor: '#f8f4ff'
    };

    Plotly.newPlot('stacked-bar-chart', data, layout, { responsive: true });
}

function updateStackedBarChart() {
    const categories = ['a', 'b', 'c', 'd', 'e'];
    const newData = [
        {
            x: categories,
            y: Array.from({length: 5}, () => Math.floor(Math.random() * 15) + 5),
            type: 'bar',
            name: '第一组',
            marker: { color: '#9370db' }
        },
        {
            x: categories,
            y: Array.from({length: 5}, () => Math.floor(Math.random() * 15) + 5),
            type: 'bar',
            name: '第二组',
            marker: { color: '#8a2be2' }
        }
    ];

    Plotly.react('stacked-bar-chart', newData);
}

// 饼图
function initPieChart() {
    const labels = ['产品A', '产品B', '产品C', '产品D', '产品E'];
    const values = [35, 25, 20, 15, 5];

    const data = [{
        values: values,
        labels: labels,
        type: 'pie',
        marker: {
            colors: ['#9370db', '#8a2be2', '#da70d6', '#ba55d3', '#9932cc']
        },
        textinfo: 'percent',
        hoverinfo: 'label+percent+value',
        hole: 0.4
    }];

    const layout = {
        title: '产品市场份额分布',
        height: 500,
        plot_bgcolor: '#f8f4ff',
        paper_bgcolor: '#f8f4ff'
    };

    Plotly.newPlot('pie-chart-container', data, layout, { responsive: true });
}

function updatePieChart() {
    const labels = ['产品A', '产品B', '产品C', '产品D', '产品E'];
    const newValues = Array.from({length: 5}, () => Math.floor(Math.random() * 40) + 10);

    const newData = [{
        values: newValues,
        labels: labels,
        type: 'pie',
        marker: {
            colors: ['#9370db', '#8a2be2', '#da70d6', '#ba55d3', '#9932cc']
        },
        textinfo: 'percent',
        hoverinfo: 'label+percent+value',
        hole: 0.4
    }];

    Plotly.react('pie-chart-container', newData);
}

// 散点图
function initScatterPlot() {
    const x = Array.from({length: 50}, () => Math.random() * 100);
    const y = Array.from({length: 50}, () => Math.random() * 100);

    const data = [{
        x: x,
        y: y,
        mode: 'markers',
        type: 'scatter',
        marker: {
            size: 12,
            color: '#9370db',
            opacity: 0.7
        }
    }];

    const layout = {
        title: '散点图 - 变量相关性分析',
        xaxis: { title: 'X变量' },
        yaxis: { title: 'Y变量' },
        plot_bgcolor: '#f8f4ff',
        paper_bgcolor: '#f8f4ff'
    };

    Plotly.newPlot('scatter-plot-container', data, layout, { responsive: true });
}

function updateScatterPlot() {
    const x = Array.from({length: 50}, () => Math.random() * 100);
    const y = Array.from({length: 50}, () => Math.random() * 100);

    const newData = [{
        x: x,
        y: y,
        mode: 'markers',
        type: 'scatter',
        marker: {
            size: 12,
            color: '#9370db',
            opacity: 0.7
        }
    }];

    Plotly.react('scatter-plot-container', newData);
}

// 面积图
function initAreaChart() {
    const x = Array.from({length: 20}, (_, i) => i);
    const y = Array.from({length: 20}, () => Math.random() * 50 + 50);

    const data = [{
        x: x,
        y: y,
        type: 'scatter',
        fill: 'tozeroy',
        fillcolor: 'rgba(147, 112, 219, 0.3)',
        line: { color: '#9370db', width: 3 }
    }];

    const layout = {
        title: '面积图 - 数据累积展示',
        xaxis: { title: '时间' },
        yaxis: { title: '数值' },
        plot_bgcolor: '#f8f4ff',
        paper_bgcolor: '#f8f4ff'
    };

    Plotly.newPlot('area-chart-container', data, layout, { responsive: true });
}

function updateAreaChart() {
    const x = Array.from({length: 20}, (_, i) => i);
    const y = Array.from({length: 20}, () => Math.random() * 50 + 50);

    const newData = [{
        x: x,
        y: y,
        type: 'scatter',
        fill: 'tozeroy',
        fillcolor: 'rgba(147, 112, 219, 0.3)',
        line: { color: '#9370db', width: 3 }
    }];

    Plotly.react('area-chart-container', newData);
}

// 气泡图
function initBubbleChart() {
    const x = Array.from({length: 20}, () => Math.random() * 100);
    const y = Array.from({length: 20}, () => Math.random() * 100);
    const sizes = Array.from({length: 20}, () => Math.random() * 50 + 10);

    const data = [{
        x: x,
        y: y,
        mode: 'markers',
        marker: {
            size: sizes,
            color: sizes,
            colorscale: 'Viridis',
            showscale: true,
            opacity: 0.7
        }
    }];

    const layout = {
        title: '气泡图 - 三维数据可视化',
        xaxis: { title: 'X变量' },
        yaxis: { title: 'Y变量' },
        plot_bgcolor: '#f8f4ff',
        paper_bgcolor: '#f8f4ff'
    };

    Plotly.newPlot('bubble-chart-container', data, layout, { responsive: true });
}

function updateBubbleChart() {
    const x = Array.from({length: 20}, () => Math.random() * 100);
    const y = Array.from({length: 20}, () => Math.random() * 100);
    const sizes = Array.from({length: 20}, () => Math.random() * 50 + 10);

    const newData = [{
        x: x,
        y: y,
        mode: 'markers',
        marker: {
            size: sizes,
            color: sizes,
            colorscale: 'Viridis',
            showscale: true,
            opacity: 0.7
        }
    }];

    Plotly.react('bubble-chart-container', newData);
}

// 雷达图
function initRadarChart() {
    const categories = ['技术', '创新', '设计', '营销', '服务', '品质'];
    const values = [90, 85, 78, 92, 88, 95];

    const data = [{
        type: 'scatterpolar',
        r: values,
        theta: categories,
        fill: 'toself',
        fillcolor: 'rgba(147, 112, 219, 0.3)',
        line: { color: '#9370db' }
    }];

    const layout = {
        title: '雷达图 - 多维度数据对比',
        polar: {
            radialaxis: {
                visible: true,
                range: [0, 100]
            }
        },
        plot_bgcolor: '#f8f4ff',
        paper_bgcolor: '#f8f4ff'
    };

    Plotly.newPlot('radar-chart-container', data, layout, { responsive: true });
}

function updateRadarChart() {
    const categories = ['技术', '创新', '设计', '营销', '服务', '品质'];
    const values = Array.from({length: 6}, () => Math.floor(Math.random() * 50) + 50);

    const newData = [{
        type: 'scatterpolar',
        r: values,
        theta: categories,
        fill: 'toself',
        fillcolor: 'rgba(147, 112, 219, 0.3)',
        line: { color: '#9370db' }
    }];

    Plotly.react('radar-chart-container', newData);
}

// 热力图
function initHeatmap() {
    const z = Array.from({length: 10}, () => 
        Array.from({length: 10}, () => Math.random() * 100)
    );

    const data = [{
        z: z,
        type: 'heatmap',
        colorscale: 'Viridis'
    }];

    const layout = {
        title: '热力图 - 数据密度分布',
        plot_bgcolor: '#f8f4ff',
        paper_bgcolor: '#f8f4ff'
    };

    Plotly.newPlot('heatmap-container', data, layout, { responsive: true });
}

function updateHeatmap() {
    const z = Array.from({length: 10}, () => 
        Array.from({length: 10}, () => Math.random() * 100)
    );

    const newData = [{
        z: z,
        type: 'heatmap',
        colorscale: 'Viridis'
    }];

    Plotly.react('heatmap-container', newData);
}

// 页面加载完成后初始化所有图表
document.addEventListener('DOMContentLoaded', function() {
    initBasicLineChart();
    initTemperatureChart();
    initBasicBarChart();
    initStackedBarChart();
    initPieChart();
    initScatterPlot();
    initAreaChart();
    initBubbleChart();
    initRadarChart();
    initHeatmap();
});

// 添加窗口大小改变时的响应式调整
window.addEventListener('resize', function() {
    // 重新绘制所有图表以适应新的大小
    const chartIds = [
        'basic-line-chart', 'temperature-chart', 'basic-bar-chart',
        'stacked-bar-chart', 'pie-chart-container', 'scatter-plot-container',
        'area-chart-container', 'bubble-chart-container', 'radar-chart-container',
        'heatmap-container'
    ];
    
    chartIds.forEach(chartId => {
        const chart = document.getElementById(chartId);
        if (chart && chart.data) {
            Plotly.relayout(chartId, {
                width: chart.clientWidth,
                height: chart.clientHeight
            });
        }
    });
});