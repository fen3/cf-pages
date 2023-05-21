import './App.css'
function App() {
    const sites = [
        [['https://github.com/', 'Github'], ['https://www.oschina.net/', 'OSChina'], ['https://v2ex.com/', 'V2EX'], ['https://segmentfault.com/', '思否']],
        [['https://www.taobao.com/', '淘宝'], ['https://www.jd.com/', '京东'], ['https://www.suning.com/', '苏宁'], ['https://www.smzdm.com/', '什么值得买']],
        [['https://www.bilibili.com/', '哔哩哔哩'], ['http://www.iqiyi.com/', '爱奇艺'], ['https://www.mgtv.com/', '芒果TV'], ['https://v.qq.com/', '腾讯视频']],
        [['https://developer.mozilla.org/', 'MDN'], ['https://docs.python.org/3/', 'Py3Doc'], ['https://www.djangoproject.com/', 'Django'], ['http://codeigniter.org.cn/', 'codeigniter']],
        [['https://mirrors.tuna.tsinghua.edu.cn/', '清华开源'], ['http://mirrors.163.com/', '网易开源'], ['https://mirrors.cloud.tencent.com/index.html', '腾讯开源'], ['https://opsx.alibaba.com/mirror', '阿里云开源']],
        [['http://www.ccb.com/cn/home/indexv3.html', '建行'], ['http://www.boc.cn/', '中行'], ['http://www.icbc.com.cn/icbc/', '工行'], ['http://www.abchina.com/cn/', '农行']],
        [['https://cdn.bytedance.com/', '字节跳动CDN'], ['https://cn.vuejs.org/', 'VUEJS'], ['https://stackoverflow.com/', 'stackoverflow']],
        [['https://poi.apache.org/index.html', 'POI'], ['https://spring.io/projects/spring-boot', 'SpringBoot'], ['https://docs.oracle.com/javase/8/docs/api/', 'jdk8Doc'], ['https://baomidou.com/', 'MyBatis-Plus']],
        [['https://day.js.org/zh-CN/', 'dayjs'], ['http://momentjs.cn/', 'moment中文'], ['https://grid.layoutit.com/', 'layoutit'], ['https://github.com/Tencent/secguide', '安全指南']],
        [['https://bulma.io/', 'Bulma'], ['https://zh-hans.reactjs.org/', 'reactjs'], ['https://www.bootcss.com/', 'Bootstrap'], ['https://jquery.com/', 'JQuery']],
        [['https://nodejs.org/zh-cn/', 'Node.js'], ['http://expressjs.com/', 'express.js'], ['https://ant.design/index-cn', 'antd']],
        [['https://www.google.cn/chrome/thank-you.html?standalone=1&statcb=1&installdataindex=empty&defaultbrowser=0', 'Chrome下载'], ['https://download.mozilla.org/?product=firefox-latest&os=win64&lang=zh-CN', 'Firefox下载']],
        [['https://ventoy.net/', 'Ventoy'], ['https://raw.hellogithub.com/hosts', '520GitHub']],
        [['http://java.bejson.com/generator/', 'JAVA代码生成器'], ['https://www.lfd.uci.edu/~gohlke/pythonlibs/', 'PythonLib'], ['https://mvnrepository.com/', 'mvnrepo']],
        [['https://qwerty.kaiyi.cool/', '打字练习'], ['https://zm-digicol.dpm.org.cn/', '故宫藏品']],
        [['https://ant-design.antgroup.com/index-cn', 'antd国内']]
    ];
    return (
        <>
            {sites.map(s => {
                return <div key={s[0][0]} className="row">{s.map(ss=><a key={ss[0]} className="icol" href={ss[0]}>{ss[1]}</a>
                )}</div>
            })
            }
        </>
    )
}

export default App
