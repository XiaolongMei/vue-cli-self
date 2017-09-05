/**
 * Created by Administrator on 2017/3/15.
 */
export default {
    updateSession(state,data){
        //更新报文
        state.sessionContext = data;
    },
    updateRoundTrip(state,data){
        state.roundTrip = data;
    },
    exchangeCity(state){
        let city = state.depCity;
        //交换城市
        state.depCity = state.arrCity;
        state.arrCity = city;
        //交换城市对应的天气
    },
    updateLocalCity(state,data){
        //更新当前定位城市
        state.localCity = data;
    },
    updateFlightType(state,data){
        //更新航班类型 国内航班或国际航班
        state.flightType = data;
    },
    updateDepDate(state,date){
        //更新出发日期
        state.depDate = date;
    },
    updateBackDate(state,date){
        //更新出发日期
        state.backDate = date;
    },
    updateCity(state,data){
        //判断数据中的
        state[data.target] = data.city;
    },
    updateCover(state,data){
        //更新遮罩显示和隐藏
        state.cover = data.show;
    },
    updateEndDate(state,data){
        //更新私人定制结束时间
        state.endDate = data.date;
    },
    updateFlightList(state,data){
        //更新航班列表
        state.flightList = data;
    },
    updateFlightDetails(state,data){
        //更新航班详情数据
        state.flightDetails = data;
    },
    updateDepWeek(state,data){
        state.depWeek = data;
        //更新星期数
    },
    updateBackWeek(state,data){
        state.backWeek = data;
        //更新星期数
    },
    updateChild(state,data){
        //更新国际航班携带儿童
        state.child = data;
    },
    updateBaby(state,data){
        //更新国际航班携带婴儿标志
        state.baby = data;
    },
    updateCabinType(state,data){
        //更新舱位类型，支付页面查询航班详细信息时需要
        state.cabinType = data;
    },
    updateRate(state,data){
        //更新准点率
        state.rate = data;
    },
    updateCabinData(state,data){
        //更新舱位信息
        state.cabinData = data;
    },
    updateFlightCondition(state,data){
        //更新航班筛选条件
        state.flightCondition = data;
    },
    updateTranChannel(state,data){
        //更新支付方式
        state.tranChannel = data;
    },
    updatePsgList(state,data){
        //更新乘机人列表
        state.psgList = data;
    },
    updateEditPsg(state,data){
        //修改乘机人
        state.editPsg = data;
    },
    updateSelectCountry(state,data){
        //选择国籍
        state.selectCountry = data;
    },
    updateRelationMobile(state,data){
        //更新联系方式
        state.relationMobile = data;
    },
    updateExptPrice(state,data){
        //私人订制期望价格
        state.exptPrice = data;
    },
    updateShowDetail(state,data){
        //显示价格明细
        state.showDetail = data;
    },
    updateAccidentPrice(state,data){
        //更新组合险信息
        state.accidentPrice= data;
    },
    updateDelayPrice(state,data){
        //更新航延险
        state.delayPrice = data;
    },
    updateInterPrice(state,data){
        //更新国际意外险
        state.interPrice = data;
    },
    updateOrderId(state,data){
        //订单号
        state.orderId = data;
    },
    updateDetailData(state,data){
        //订单详情
        state.detailData = data;
    },
    updateEditAddress(state,data){
        //修改地址
        state.editAddress = data;
    },
    updateShowRetreat(state,data){
        //显示退改签规则
        state.showRetreat = data;
    },
    updateSelectAddress(state,data){
        //选择地址
        state.selectAddress = data;
    },
    updateShowOrder(state,data){
        //显示订单航班明细
        state.showOrder = data;
    },
    updateChangeFlag(state,data){
        //是否是改签订单提交
        state.changeFlag = data;
    },
    updateChangePag(state,data){
        //改签乘机人
        state.changePsg = data;
    },
    updateChangeType(state,data){
        //国内改签类型
        state.changeType = data;
    },
    updateInterChange(state,data){
        //国际改签类型
        state.interChange = data;
    },
    updateCouponPrice(state,data){
        //总优惠价格
        state.couponPrice = data;
    },
    updateCouponId(state,data){
        //优惠券ID
        state.couponId = data;
    },
    updateAirCode(state,data){
        //普通改签传航司二字码
        state.airCode = data;
    }
}