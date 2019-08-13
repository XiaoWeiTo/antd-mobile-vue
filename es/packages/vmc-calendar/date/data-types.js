export var Models;
(function (Models) {
    let SelectType;
    (function (SelectType) {
        SelectType[SelectType["None"] = 0] = "None";
        /** 单选 */
        SelectType[SelectType["Single"] = 1] = "Single";
        /** 起/止 */
        SelectType[SelectType["All"] = 2] = "All";
        /** 区间仅选择了 起 */
        SelectType[SelectType["Only"] = 3] = "Only";
        /** 区间起 */
        SelectType[SelectType["Start"] = 4] = "Start";
        /** 区间中 */
        SelectType[SelectType["Middle"] = 5] = "Middle";
        /** 区间止 */
        SelectType[SelectType["End"] = 6] = "End";
    })(SelectType = Models.SelectType || (Models.SelectType = {}));
})(Models || (Models = {}));
//# sourceMappingURL=data-types.js.map