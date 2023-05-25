import { ElNotification } from 'element-plus';
import mitt from 'mitt';
import Clipboard from 'clipboard';

/**
 * 事件总线
 */
export default mitt();

/**
 * 信息提示
 */
export function showMessage(text: string, type: any) {
    return ElNotification({
        message: text,
        type,
        duration: 3000,
        showClose: false,
    });
}

/**
 * 复制
 */
export function copyFunc(domSelect: string) {
    const clip = new Clipboard(domSelect);
    showMessage('复制成功', 'success');
    return clip;
}
