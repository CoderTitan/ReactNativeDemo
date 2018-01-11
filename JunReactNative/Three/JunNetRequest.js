/**
 * 网络请求
 * @providesModule JunNetRequest
 * @flow
*/

export default class JunNetRequest {
    /**
     * 请求体类型
     * @return ParamType
     */
    static ParamType = {
        ParamTypeJson: 'application/json',
        ParamTypeURL: 'application/x-www-form-urlencoded'
    }


    /***************GET请求****************************/
    /**
     * GET请求
     * @param {string} url
     * @param {字典参数} param
     * @param {成功回调(param:JSON)} success
     * @param {失败回调(param:ERROR)} failure
     * @return Get请求
     */
    static Get(url, param, success, failure) {
        //1. 参数拼接
        if (param) {
            //所有key值
            var keys = Object.keys(param)

            var totalParm = ''
            for (key in param) {

            }
            keys.forEach((key, i)=>{
                var mark = '?'
                if (i > 0) {
                    mark = '&'
                }

                var value = param[key]
                totalParm += mark
                totalParm = totalParm + key + '=' + value
            })

            //获得完整的url
            url = url + totalParm
        }

        fetch(url)
            .then((response)=>response.json())
            .then((json)=>{
                //请求成功
                if (success) {
                    success(json)
                }
            })
            .catch((error)=>{
                if (failure) {
                    failure(error)
                }
            })
    }


    /***************POST请求****************************/
    /**
     * URL类型请求
     * @param 请求地址 url
     * @param 请求参数 param
     * @param 成功回调 success
     * @param 失败回调 failure
     * @constructor
     */
    static PostWithURLParam(url, param, success, failure) {
        this.Post(url, param, this.ParamType.ParamTypeURL, success, failure)
    }

    /**
     * JSON类型请求
     * @param 请求地址 url
     * @param 请求参数 param
     * @param 成功回调 success
     * @param 失败回调 failure
     * @constructor
     */
    static PostWithJsonParam(url, param, success, failure) {
        this.Post(url, param, this.ParamType.ParamTypeJson, success, failure)
    }

    /**
     * POST基础请求
     * @param {string} url
     * @param {字典参数} param
     * @param {成功回调function} success
     * @param {失败回调function} failure
     * @return POST请求
     */
    static Post(url, param, paramType, success, failure) {
        //1. 处理请求参数
        this.resolveParam(param, paramType)
        var body = JSON.stringify(param)

        //2. 定制请求
        var optionals = {
            method: 'POST',
            headers: {
                'Content-Type':paramType
            },
            body: body
        }

        //3. 发送请求
        fetch(url, optionals)
            .then((response)=>response.json())
            .then((json)=>{
                //请求成功
                if (success) {
                    success(json)
                }
            })
            .catch((error)=>{
                if (failure) {
                    failure(error)
                }
            })
    }

    /**
     * 拼接post请求体
     * @param {字典参数} param
     * @param {ParamType} paramType
     * @return {string}
     */
    static resolveParam(param, paramType) {
        //没有参数
        if (!param) return'';

        if (paramType == 'application/json') {
            return JSON.stringify(param)
        }else if (paramType == 'application/x-www-form-urlencoded') {
            //获取key
            var totalParam = ''
            var i = 0;

            for (key in param) {
                var mark = ''
                if (i > 0) {
                    mark = '&'
                }

                var value = param[key]
                totalParam += mark + key + '=' + value
                i++;
            }
            return totalParam
        }
    }
}
