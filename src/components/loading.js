import { Spin, Message } from 'iview';

function toasts(message) {
    Message.warning(message)
}

var toast = {
    show: function(type, message) {
        var finalMessage = message;
        if (!finalMessage) {
            switch (type) {

                case 1000:
                    finalMessage = '没有权限';
                    break;

                case -201:
                    finalMessage = '没有用户';
                    break;

                case -1:
                    finalMessage = '没有权限';
                    break;

                case 500:
                    finalMessage = '网络错误';
                    break;

                default:
                    finalMessage = '网络错误';
                    break;
            }
            finalMessage += type;
        }
        toasts(finalMessage);
    },

    showMessage: function(message) {
        toasts(message);
    },

    showloading: function(show) {
        if (show) {
            Spin.show();
        } else {
            Spin.hide();
        }
    }

}


export default toast