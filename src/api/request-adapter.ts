import Taro from "@tarojs/taro";

const interceptor: Taro.interceptor = async (chain) => {
    let requestParams = chain.requestParams;

    const token = Taro.getStorageSync("token");
    if (token) {
        requestParams = {
            ...chain.requestParams,
            header: {
                ...chain.requestParams.header,
                Authorization: "Bearer " + Taro.getStorageSync("token"),
            },
        };
    }
    const showErrorModal = async (statusCode: number, message: string) => {
        let title = "";
        switch (statusCode) {
            case 400:
                title = "操作异常";
                break;
            case 401:
                title = "授权失败";
                break;
            case 500:
                title = "服务器错误";
                break;
            case 503:
                title = "服务不可用";
                break;
            default:
                title = "网络异常";
                break;
        }
        Taro.hideLoading();
        Taro.showModal({
            title,
            showCancel: false,
            content: message,
            confirmText: "确定",
            success: async () => {},
        });
    };

    try {
        const res = await chain.proceed(requestParams);
        if (res != undefined) {
            if (res.statusCode !== 200) {
                showErrorModal(res.statusCode, res.data?.message || "");
            }
        }
        return res;
    } catch (e) {
        console.error(e);
        showErrorModal(0, e.errMsg || "网络异常");
    }
};
Taro.addInterceptor(interceptor);

const request = async <T>(url: any, options: any): Promise<T> => {
    var result = await Taro.request<T>({
        url,
        data: options.params,
        ...options,
    });
    if (!result || result.statusCode !== 200) {
        return Promise.reject();
    }
    return result.data;
};

export default request;
