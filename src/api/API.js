/**
 * Created by wiki on 2017/3/14.
 */
var http = require('./adapter');
import ENV from './config';
import toast from '../components/loading'
//***************************************
export default {
    getweather: {
        weather: function(success, fail) {
            var url = ENV.baseURL + 'weather.php';
            var params = {};
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
    },
    portrait: {
        getPortraitScore: function(sid, start_date, end_date, success, fail) {

            var url = ENV.baseURL + 'shop/getPortraitScore';
            var params = {
                sid: sid,
                start_date: start_date,
                end_date: end_date,
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        getPortraitAppinfo: function(sid, start_date, end_date, success, fail) {
            var url = ENV.baseURL + 'shop/getPortraitAppinfo';
            var params = {
                sid: sid,
                start_date: start_date,
                end_date: end_date,
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        getPortraitComeGo: function(sid, start_date, end_date, gender, agebin, income, edu, kids, success, fail) {
            var url = ENV.baseURL + 'shop/getPortraitComeGo';
            var params = {
                sid: sid,
                start_date: start_date,
                end_date: end_date,
                gender: gender,
                agebin: agebin,
                income: income,
                edu: edu,
                kids: kids,
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        getPortraitLive: function(sid, start_date, end_date, gender, agebin, income, edu, kids, success, fail) {
            var url = ENV.baseURL + 'shop/getPortraitLive';
            var params = {
                sid: sid,
                start_date: start_date,
                end_date: end_date,
                gender: gender,
                agebin: agebin,
                income: income,
                edu: edu,
                kids: kids
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        getPortraitArea: function(sid, start_date, end_date, gender, agebin, income, edu, kids, success, fail) {
            var url = ENV.baseURL + 'shop/getPortraitArea';
            var params = {
                sid: sid,
                start_date: start_date,
                end_date: end_date,
                gender: gender,
                agebin: agebin,
                income: income,
                edu: edu,
                kids: kids
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        getPortraitAreaThermal: function(sid, start_date, end_date, gender, agebin, income, edu, kids, success, fail) {
            var url = ENV.baseURL + 'shop/getPortraitAreaThermal';
            var params = {
                sid: sid,
                start_date: start_date,
                end_date: end_date,
                gender: gender,
                agebin: agebin,
                income: income,
                edu: edu,
                kids: kids
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        getPortraitAround: function(sid, start_date, end_date, gender, agebin, income, edu, kids, success, fail) {
            var url = ENV.baseURL + 'shop/getPortraitAround';
            var params = {
                sid: sid,
                start_date: start_date,
                end_date: end_date,
                gender: gender,
                agebin: agebin,
                income: income,
                edu: edu,
                kids: kids
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },

    },
    NewDataList: {
        getNowCustomerData: function(id, success, fail) {
            var url = ENV.baseURL + 'seller/getNowCustomerData'
            var params = {
                id: id
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        getCustomerHourData: function(id, date, cates, success, fail) {
            var url = ENV.baseURL + 'seller/getCustomerHourData';
            var params = {
                id: id,
                date: date,
                cates: cates
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        getCountTimes: function(sid, date, success, fail) {
            var url = ENV.baseURL + 'seller/getCountTimes';
            var params = {
                sid: sid,
                date: date,
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        }
    },
    NewData: {
        getSankeyInfo: function(sid, date, success, fail) {
            var url = ENV.baseURL + 'shop/getSankeyInfo';
            var params = {
                sid: sid,
                date: date,
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        getCustomerDayData: function(id, start_date, end_date, cates, data_type, success, fail) {
            var url = ENV.baseURL + 'seller/getCustomerDayData';
            var params = {
                id: id,
                start_date: start_date,
                end_date: end_date,
                cates: cates,
                data_type: data_type
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        getThermodynamicData: function(sid, date, success, fail) {
            var url = ENV.baseURL + 'shop/getThermodynamicData';
            var params = {
                sid: sid,
                date: date,
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
    },
    realTimeAndhistory: {
        realTimeCustomesData: function(id, date, page, cate, success, fail) {
            var url = ENV.baseURL + 'customer/realTimeCustomesData';
            var params = {
                id: id,
                page: page,
                date: date,
                cate: cate
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        // 根据店铺id获取分类详情.

        realTimeStoreData: function(id, date, success, fail, cancel) {
            var url = ENV.baseURL + 'seller/realTimeStoreData';
            var params = {
                id: id,
                date: date
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options, cancel)
        },

        realTimeMobileTypes: function(id, date, success, fail) {
            var url = ENV.baseURL + 'seller/mobileType';
            var params = {
                id: id,
                date: date
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },


        historyCustomAnalysis: function(id, date, success, fail, cancel) {
            var url = ENV.baseURL + 'seller/historyCustomAnalysis';
            var params = {
                id: id,
                date: date
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options, cancel)
        },

        historyWeek: function(id, date, success, fail) {
            var url = ENV.baseURL + 'seller/historyWeek';
            var params = {
                id: id,
                date: date
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },

        historyStoreCompare: function(type, date, success, fail) {
            var url = ENV.baseURL + 'seller/historyDay';
            var params = {
                type: type,
                date: date
            };
            var options = new Option();

            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        }
    },
    devices: {
        setShareCode: function(sid, type, limit, code_name, success, fail) {
            var url = ENV.baseURL + 'shop/setShareCode';
            var params = {
                sid: sid,
                type: type,
                limit: limit,
                code_name: code_name,
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        getShareCode: function(sid, type, code_name, success, fail) {
            var url = ENV.baseURL + 'shop/getShareCode';
            var params = {
                sid: sid,
                type: type,
                code_name: code_name,
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        queryDevices: function(wxOpen_id, sid, success, fail) {
            var url = ENV.baseURL + 'device/queryDevices';
            var params = {
                sid: sid,
                wxOpen_id: wxOpen_id
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        getShopDeviceInfo(is_tree, success, fail) {
            var url = ENV.baseURL + 'device/getShopDeviceInfo';
            var params = {
                is_tree: is_tree
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        deleteDevice: function(id, sid, success, fail) {
            var url = ENV.baseURL + 'device/deleteDevice';
            var params = {
                id: id,
                sid: sid,
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },

        updateDevice: function(sn, name, sid, id, success, fail) {
            var url = ENV.baseURL + 'device/updateDevice';
            var params = {
                sn: sn,
                name: name,
                sid: sid,
                id: id,
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },

        addDevice: function(id, name, sid, wxOpen_id, success, fail) {
            var url = ENV.baseURL + 'device/addDevice';
            var params = {
                sn: id,
                sid: sid,

                name: name,
                wxOpen_id: wxOpen_id
            };
            var options = new Option();
            options.error = function(reqdata, req) {

                if (fail) {
                    fail(reqdata)
                }

            };
            http.get(url, params, success, options)
        },

        getRanges: function(sn, sid, success, fail) {

            var url = ENV.baseURL + 'shop/getRanges';
            var params = {
                sn: sn,
                sid: sid,
            };
            var options = new Option();
            options.error = function(reqdata, req) {

                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)

        },


        setRanges: function(sn, sid, renliuRange, keliuRange, success, fail) {
            var url = ENV.baseURL + 'shop/setRanges';
            var params = {
                sn: sn,
                sid: sid,
                renliuRange: renliuRange,
                keliuRange: keliuRange
            };
            var options = new Option();
            options.error = function(reqdata, req) {

                if (fail) {
                    fail(reqdata)
                }

            };
            http.get(url, params, success, options)
        }
    },
    shopManage: {
        queryShop: function(type, is_tree, success, fail) {
            var url = ENV.baseURL + 'shop/queryShop';
            var params = {
                type: type,
                is_tree: is_tree,
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },

        deleteShop: function(id, success, fail) {
            var url = ENV.baseURL + 'shop/deleteShop';
            var params = {
                id: id,
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        updateShop: function(id, name, shopType, success, fail) {
            var url = ENV.baseURL + 'shop/updateShop';
            var params = {
                id: id,
                name: name,
                shopType: shopType
            };
            var options = new Option();
            options.error = function(reqdata, req) {

                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        getShopAdmin(sid, success, fail) {
            var url = ENV.baseURL + 'shop/getShopAdmin';
            var params = {
                sid: sid,
            };
            var options = new Option();
            options.error = function(reqdata, req) {

                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        setAdmin(sid, uid, remark, type, success, fail) {
            var url = ENV.baseURL + 'shop/setAdmin';
            var params = {
                sid: sid,
                uid: uid,
                remark: remark,
                type: type,
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        addShop: function(name, shopType, shareCode, pid, provinceid, cityid, areaid, detaile_addr, success, fail) {
            var url = ENV.baseURL + 'shop/addShop';
            var params = {
                name: name,
                shopType: shopType,
                shareCode: shareCode,
                pid: pid,
                provinceid: provinceid,
                cityid: cityid,
                areaid: areaid,
                detaile_addr: detaile_addr,
            };
            var options = new Option();
            options.error = function(reqdata, req) {

                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        setDefShop: function(sid, success, fail) {
            var url = ENV.baseURL + 'user/setDefShop';
            var params = {
                sid: sid,
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        addDemoShop: function(success, fail) {
            var url = ENV.baseURL + 'shop/addDemoShop';
            var params = {};
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        getAreas(type, pid, success, fail) {
            var url = ENV.baseURL + 'shop/getAreas';
            var params = {
                type: type,
                pid: pid,
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
    },
    importData: {
        importData: function(sid, date, consumer, income, outcome, success, fail) {
            var url = ENV.baseURL + 'import/importData';
            var params = {
                sid: sid,
                date: date,
                consumer: consumer,
                income: income,
                outcome: outcome
            };
            var options = new Option();
            options.error = function(reqdata, req) {

                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },

        consumerData: function(sid, type, date, success, fail) {
            var url = ENV.baseURL + 'import/getConsumerData';
            var params = {
                sid: sid,
                type: type,
                date: date,
            };
            var options = new Option();
            options.error = function(reqdata, req) {

                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
    },
    macManage: {
        addOrDelIgnoreMac: function(sid, mac, remark, isIgnore, success, fail) {
            var url = ENV.baseURL + 'customer/addIgnoreMac';
            var params = {
                sid: sid,
                mac: mac,
                remark: remark,
                isIgnore: isIgnore
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        getAllIgnoreMac: function(sid, success, fail) {
            var url = ENV.baseURL + 'shop/getAllIgnoreMac';
            var params = {
                sid: sid
            };
            var options = new Option();
            options.error = function(reqdata, req) {

                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        updatePushStatus: function(mac, onOff, remark, success, fail) {
            var url = ENV.baseURL + 'customer/updatePushStatus';
            var params = {
                mac: mac,
                isPush: String(Number(onOff)),
                remark: remark,
            };
            var options = new Option();
            options.error = function(reqdata, req) {

                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        }
    },
    pay: {
        getpaylists: function(success, fail) {
            var url = ENV.baseURL + 'order/queryOrder';
            var params = {};
            var options = new Option();
            options.error = function(reqdata, req) {

                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
        getpayparas: function(orderId, success, fail) {
            var url = ENV.baseURL + 'web/pay/native.php';
            var params = {
                orderId: orderId,
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },

        createOrder: function(totalFee, goodTag, deviceId, renewalTime, success, fail) {
            var url = ENV.baseURL + 'order/createOrder';
            var params = {
                totalFee: totalFee,
                goodTag: goodTag,
                deviceId: deviceId,
                renewalTime: renewalTime
            };
            var options = new Option();
            options.error = function(reqdata, req) {

                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
    },
    wx: {
        getOpenId: function(code, forOEM, success, fail) {
            var url = ENV.baseURL + 'weChat/getOpenId';
            var params = {
                code: code,
                forOEM: forOEM
            };
            var options = new Option();
            options.error = function(reqdata, req) {
                if (fail) {
                    fail(reqdata)
                }
            };
            http.get(url, params, success, options)
        },
    }
}