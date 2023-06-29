
/* eslint-disable no-unused-vars */
interface ResponseData<T> {
    code: number;
    msg: string;
    data: T;
}

declare namespace ApiTypes {
    export interface Datum {
        contentTagList: {
            id: number;
            name: string;
            tagTypeId: number;
        }[];
        id: number;
        name: string;
    }

    export interface OpenSecInfoListItem {
        /**
         * 标签ID
         */
        contentTagId: number;
        /**
         * 标签名称
         */
        contentTagName: string;
        /**
         * 标签类别ID
         */
        contentTagTypeId: number;
        /**
         * 标签类别名称
         */
        contentTagTypeName: string;
        /**
         * id
         */
        id: number;
        /**
         * 是否发布标识  1：是 0：否
         */
        published: number;
        /**
         * 发布人
         */
        publisher?: number;
        /**
         * 发布时间
         */
        publishTime?: Date;
        /**
         * 标题
         */
        title: string;
        excerpt: string;
    }
    export interface SecInfoList {
        list: OpenSecInfoListItem[];
        total: number;
    }

    export interface BusContentVO {
        /**
         * 内容-富文本
         */
        content: string;
        /**
         * 标签ID
         */
        contentTagId: number;
        /**
         * 标签名称
         */
        contentTagName: string;
        /**
         * 标签类别ID
         */
        contentTagTypeId: number;
        /**
         * 标签类别名称
         */
        contentTagTypeName: string;
        /**
         * id
         */
        id: number;
        /**
         * 是否发布标识  1：是 0：否
         */
        published: number;
        /**
         * 发布人
         */
        publisher?: number;
        /**
         * 发布时间
         */
        publishTime?: Date;
        /**
         * 标题
         */
        title: string;
    }

    /**
     * VulnDBDetailed，漏洞知识库-漏洞详情
     */
    export interface SecInfo {
        title: string;
        /**
         * 页面下方的文章片段
         */
        articles: VulnDBArticle[];
        /**
         * CNVD ID
         */
        cnvd_id: string;
        /**
         * CVE ID
         */
        cve_id: string;
        /**
         * CVSS 评分
         */
        cvss_score: number;
        /**
         * CVSS 攻击向量
         */
        cvss_vector: string;
        /**
         * 漏洞描述
         */
        description: string;
        effects: VulnDBEffect[];
        /**
         * 漏洞类型
         */
        kind: string;
        /**
         * 最近更新时间
         */
        last_modified_time: Date;
        level: VulnerabilityLevel;
        /**
         * MPS ID
         */
        mps_id: number;
        /**
         * 发布时间
         */
        published_time: Date;
        /**
         * 参考链接
         */
        reference_url_list: VulnInfoReferenceUrl[];
        /**
         * 漏洞标签
         */
        tags: string[];
        scope_influence: string;
        exploitability: string;
        poc: boolean;
    }

    /**
     * VulnDBArticle，漏洞知识库-文章片段
     */
    export interface VulnDBArticle {
        /**
         * 内容
         */
        content: string;
        /**
         * 标题
         */
        title: string;
    }

    /**
     * VulnDBEffect，漏洞知识库-漏洞影响
     */
    export interface VulnDBEffect {
        /**
         * 组件名
         */
        comp_name: string;
        /**
         * 生态系统
         */
        ecosystem: string;
        versions: VulnDBEffectItem[];
    }

    /**
     * VulnDBEffectItem，漏洞知识库-漏洞影响版本条目
     */
    export interface VulnDBEffectItem {
        /**
         * 影响版本
         */
        affected_version: string;
        /**
         * 最小修复版本
         */
        min_fixed_version: string;
    }

    /**
     * VulnerabilityLevel，漏洞等级:
     * |Enum|Description|
     * |---|---|
     * |Critical|严重|
     * |High|高|
     * |Medium|中|
     * |Low|低|
     */
    export enum VulnerabilityLevel {
        Critical = 'Critical',
        High = 'High',
        Low = 'Low',
        Medium = 'Medium',
    }

    /**
     * VulnInfoReferenceUrl，漏洞参考链接对象
     */
    export interface VulnInfoReferenceUrl {
        /**
         * 漏洞参考链接名称
         */
        name: string;
        /**
         * 漏洞参考URL
         */
        url: string;
    }
}