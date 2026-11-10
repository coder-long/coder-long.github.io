(function () {

  // dayjs使用duration 插件
  dayjs.extend(dayjs_plugin_duration);

  let baseTime = '6/15/2022',
    format = 'M/DD/YYYY HH:mm:ss',
    diffTime = dayjs().diff(dayjs(new Date(baseTime), format), 'second'),
    duration = dayjs.duration(diffTime, 'second'); // 转换为 dayjs 的 duration 对象

  // let duration——day = dayjs.duration(diff, 'day');


  setInterval(() => {
    diffTime = dayjs().diff(dayjs(new Date(baseTime), format), 'second');
    duration = dayjs.duration(diffTime, 'second');

    let years = Math.floor(duration.asYears()); // 计算年份
    let days = Math.floor(duration.asDays() % 365); // 计算天数

    $('.footer_custom_text').text(`
    已运行
    ${years || 0} 年
    ${days || 0} 天
    ${duration.hours() || 0} 时
    ${duration.minutes() || 0} 分
    ${duration.seconds() || 0} 秒
    `);

  }, 1000);

})();