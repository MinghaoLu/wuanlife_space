<?php
return array(
    //模块名
    'name' => 'Weibo',
    //别名
    'alias' => '分享',
    //版本号
    'version' => '2.0.0',
    //是否商业模块,1是，0，否
    'is_com' => 0,
    //是否显示在导航栏内？  1是，0否
    'show_nav' => 1,
    //模块描述
    'summary' => '分享模块，用户可以发布分享',
    //开发者
    'developer' => '嘉兴想天信息科技有限公司',
    //开发者网站
    'website' => 'http://www.ourstu.com',
    //前台入口，可用U函数
    'entry' => 'Weibo/index/index',

    'admin_entry' => 'Admin/Weibo/weibo',

    'icon' => 'quote-left',

    'can_uninstall' => 1

);