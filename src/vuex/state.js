/**
 * Created by Administrator on 2017/3/15.
 */

export default{
    //state
    cover: false,  //控制遮罩显示和隐藏
    sessionContext: {},
    localCity: {city: "定位中...", code: "", country: ""},  //定位当前城市
    flightType: "1",  //航班类型  1国内|0国际
    roundTrip: false,  //单程or往返  单程false  往返true
    depCity: {city: "深圳", code: "SZX", country: ""},  //起点城市
    arrCity: {city: "北京", code: "PEK", country: ""},  //到达城市
    depDate: '',  //出发日期
    backDate: '',  //返程日期
    endDate: '',  //私人定制结束时间
    depWeek: '',  //出发日期星期几
    backWeek: "",  //返程日期星期
    child: false,  //国际航班 携带儿童标志
    baby: false,  //国际航班 携带婴儿标志
    priceTrendDate: [],  //价格走势日期
    priceTrendDistInfo: [],  //航班分布
    priceTrendPrice: [],  //航班分布价格走势
    contactList: [],  //联系人列表
    psgList: [],  //乘机人列表
    editPsg: {},  //修改乘机人
    selectCountry: {},  //选择国籍
    exptPrice: 0,  //私人订制期望价格
    relationMobile: '',  //联系人手机号
    flightList: {},  //航班列表
    flightDetails: {},  //航班详情
    flightCondition: {},  //航班筛选条件
    rate: 0,
    cabinType: '',  //舱位类型
    cabinData: {},  //舱位
    tranChannel: 'tpurse', //支付方式
    showDetail: false, //打开支付明细
    accidentPrice: 30,//组合险单价
    delayPrice: 30,//航延险单价
    interPrice: 0, //国际航意险单价
    orderId: '',//订单号
    detailData: {},//订单详情
    editAddress: {},//修改地址
    selectAddress: {},//选择地址
    showRetreat: '', //退改签规则
    showOrder: '', //显示订单航班明细
    changeFlag: '1',//下单提交类型 1普通提交 2改签提交
    airCode:'',//普通改签传航司二字码
    changePsg: [], //改签乘机人
    changeType: "1",// 国内改签类型
    interChange: "1",// 国际改签类型
    couponPrice: 0,//总优惠价格
    couponId: [],//优惠券ID
}
