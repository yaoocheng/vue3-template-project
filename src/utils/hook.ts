import {
    ref, watch, onMounted, onUnmounted,
} from 'vue';
import { getRefreshProjectStatusApi } from 'api/project';

// 列表hook
export default function useList(listReqFn: Function, filterOptions: any = {}) {
    // 总数
    const total = ref<number>(0);
    // 当前页
    const curPage = ref<number>(1);
    // 列表数据
    const listData = ref<Array<any>>([]);
    // 缓存总数据
    const initData = ref<Array<any>>([]);
    // 是否无值
    const isHaveData = ref<boolean>(true);
    // 检测详情统计数据
    const statisticsData = ref<Object>({});

    // 获取数据
    const getData = async () => {
        try {
            const res = await listReqFn({
                page: curPage.value,
                limit: 20,
                ...filterOptions.value,
            });
            listData.value = Object.values(res.data?.list || res.data || []);
            initData.value = Object.values(res.data?.list || res.data || []);
            statisticsData.value = res.data?.statistics || {};
            total.value = res.data?.total;
            isHaveData.value = listData.value.length > 0;
        } catch (error) {
            console.log(error);
        }
    };
    getData();

    // 分页监听
    watch(curPage, () => {
        getData();
    });

    // 筛选监听
    if (filterOptions.value) {
        watch(filterOptions.value, () => {
            curPage.value = 1;
            getData();
        });
    }
    return {
        total,
        curPage,
        listData,
        isHaveData,
        initData,
        statisticsData,
    };
}

export const useEnterPress = (callback: () => void) => {
    function enterPress(event: any) {
        if (event.keyCode === 13) {
            callback.call(null);
        }
    }

    onMounted(() => {
        document.addEventListener('keydown', enterPress);
    });

    onUnmounted(() => {
        document.removeEventListener('keydown', enterPress);
    });
};

// 项目刷新
export const lastRefreshTime = ref<string>('');
export const refreshLoading = ref<boolean>(false);
export const rollTimer = ref<any>(null);
export const rollRefresh = (data: any) => {
    refreshLoading.value = true;
    const refreshProjectHandle = async () => {
        try {
            const res = await getRefreshProjectStatusApi(data.value);
            if (!res.data.is_doing) {
                lastRefreshTime.value = res.data.start_time;
                return true;
            }
            return false;
        } catch (error) {
            return true;
        }
    };

    rollTimer.value = window.setInterval(async () => {
        const res = await refreshProjectHandle();
        if (res) {
            window.clearInterval(rollTimer.value);
            rollTimer.value = null;
            refreshLoading.value = false;
        }
    }, 3000);
};
