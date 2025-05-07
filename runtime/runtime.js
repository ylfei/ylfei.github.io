setInterval(() =&gt; {
    let create_time = Math.round(new Date('2018-10-12 10:00:00').getTime() / 1000);
    //xxxx-xx-xx xx:xx:xx的格式为，例：2020-12-26 00:00:00
    let timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0, 0);
    //年
    if (second &gt;= 365 * 24 * 3600) {
      time[0] = parseInt(second / (365 * 24 * 3600));
      second %= 365 * 24 * 3600;
    }
    //天
    if (second &gt;= 24 * 3600) {
      time[1] = parseInt(second / (24 * 3600));
      second %= 24 * 3600;
    }
    //时
    if (second &gt;= 3600) {
      time[2] = parseInt(second / 3600);
      second %= 3600;
    }
    //分
    if (second &gt;= 60) {
      time[3] = parseInt(second / 60);
      second %= 60;
    }
    //秒
    if (second &gt; 0) {
      time[4] = second;
    }
    currentTimeHtml = '已经运行了' + ' ' + time[0] + ' 年 ' + time[1] + ' 天 ' + time[2] + ' 时 ' + time[3] + ' 分 ' + time[4] + ' 秒';
    //xxxxxx可随意定义，中英文都可，例如"一川的奇思怪想屋运行了"
    document.getElementById("running-time").innerHTML = currentTimeHtml;
  }, 1000);

