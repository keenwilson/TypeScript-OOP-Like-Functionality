"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likesCount, isSelected) {
        this.likesCount = likesCount;
        this.isSelected = isSelected;
    }
    LikeComponent.prototype.onClick = function () {
        // If the like compent is already selected
        // Add -1 to likesCount, basically decrease the value of likesCount by 1
        // Otherwise, Add 1 to likesCount
        this.likesCount += (this.isSelected) ? -1 : 1;
        // Toggle isSelected field
        this.isSelected = !this.isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
