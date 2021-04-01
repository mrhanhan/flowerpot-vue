import {Result} from "@/models/common";
import {VNode} from "vue";


export declare interface PageOptions {
    /**
     * 当前叶
     */
    current: number;
    /**
     * PageSize
     */
    pageSize: number;
    /**
     * 总记录条数
     */
    total?: number;
    /**
     * f
     */
    pageSizeOption?: Array<string>;
}

/**
 * 表格列
 */
export declare interface TableColumn {

    /**
     * 设置列内容的对齐方式
     */
    align?: 'left' | 'right' | 'center';
    /**
     * 超过宽度将自动省略，暂不支持和排序筛选一起使用。设置为 true 时，表格布局将变成 tableLayout="fixed"。
     */
    ellipsis?: boolean;
    /**
     * 表头列合并,设置为 0 时，不渲染
     */
    colSpan?: number;
    /**
     * 列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法
     */
    dataIndex?: string;
    /**
     * 默认筛选值
     */
    defaultFilteredValue?: string;

    /**
     * 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互
     */
    filterDropdown?: VNode;
    /**
     * 用于控制自定义筛选菜单是否可见
     */
    filterDropdownVisible?: boolean;
    /**
     * 标识数据是否经过过滤，筛选图标会高亮
     */
    filtered?: boolean;
    /**
     * 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组
     */
    filteredValue?: string[];
    /**
     * 自定义 filter 图标。
     */
    filterIcon?: VNode | (({filtered: boolean, column: TableColumn}) => VNode);
    /**
     * 是否多选
     */
    filterMultiple?: boolean;
    /**
     * 表头的筛选菜单项
     */
    filters?: unknown[];
    /**
     * 列是否固定，可选 true(等效于 left) 'left' 'right'
     */
    fixed?: boolean | string;
    /**
     * Vue 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性
     */
    key?: string;
    /**
     * 自定义渲染
     * @param unknown       行数据列
     * @param unknown       行数据
     * @param number        行索引
     */
    customRender?: ({text: unknown, record: unknown, index: number}) => VNode;
    /**
     * 排序的受控属性，外界可用此控制列的排序，可设置为 'ascend' 'descend' false
     */
    sortOrder?: boolean | string;
    /**
     * 支持的排序方式，取值为 'ascend' 'descend'
     */
    sortDirections?: string[];
    /**
     * 列头显示文字
     */
    title?: string | (() => VNode);
    /**
     * 列宽度
     */
    width?: string | number;
    /**
     * 设置单元格属性
     * @param column
     */
    customCell?: (column: TableColumn)=>void;
    /**
     * 设置头部单元格属性
     * @param column
     */
    customHeaderCell?: (column: TableColumn)=>void;
    /**
     * 本地模式下，确定筛选的运行函数, 使用 template 或 jsx 时作为filter事件使用
     */
    onFilter?: ()=>void;
    /**
     * 自定义筛选菜单可见变化时调用，使用 template 或 jsx 时作为filterDropdownVisibleChange事件使用
     * @param visible
     */
    onFilterDropdownVisibleChange?: (visible: boolean) =>void;
    /**
     * 使用 columns 时，可以通过该属性配置支持 slot 的属性，如 slots: { filterIcon: 'XXX'}
     */
    slots?: {[key in string]: VNode | (()=>VNode)}
}

/**
 * Table
 */
export declare interface TableHolder {
    /**
     * 分页配置
     */
    page: PageOptions;
    /**
     * 单行的Key
     */
    rowKey?: string;

    /**
     * 是否在加载种
     */
    loading?: boolean;

    /**
     * 列配置
     */
    columns?: TableColumn[];

    /**
     * 数据源
     */
    dataSource?: unknown[];
}

/**
 * 分页响应实体
 */
export declare interface PageResult<T> {
    /**
     * 数据
     */
    list: Array<T>;
    /**
     * 总记录条数
     */
    total: number | string;
}
